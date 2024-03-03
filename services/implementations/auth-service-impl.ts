import { UserDTOOutput } from "../../dto/user-dto-output";
import { UserDTOInput } from "../../dto/user-dto-input";
import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";
import { Cryptor } from "../../secure/cryptor/cryptor";
import { AuthJWT } from "../../secure/json-web-token/auth-jwt";
import { AuthService } from "../auth-service";
import { TokenDecoded } from "../../secure/json-web-token/token-decoded";



export class AuthServiceImpl implements AuthService {
    private readonly userRepository: UserRepository;
    private readonly cryptor: Cryptor;
    private readonly authJWT: AuthJWT;

    constructor(userRepository: UserRepository, cryptor: Cryptor, authJWT: AuthJWT) {
        this.userRepository = userRepository;
        this.cryptor = cryptor;
        this.authJWT = authJWT;
    };

    public signIn = async (userDTOInput: UserDTOInput): Promise<UserDTOOutput> => { 
        const user: User = await this.userRepository.getUser(userDTOInput.getUserEmail());

        const userPasswordCheck: boolean = await this.cryptor.comparePasswords(userDTOInput.getUserPassword(), user.getUserPassword());

        if (!userPasswordCheck) {
            throw new Error("User with that email or password does not exists!");
        };

        const userRefreshTokenCheck: { success: boolean, data: TokenDecoded | Error } = await this.authJWT.verifyToken(user.getUserRefreshToken());

        let fullUser: User = user;
        if (!userRefreshTokenCheck.success) {
            const userRefreshToken: string = await this.authJWT.createRefreshToken(user.getUserId());
            fullUser = await this.userRepository.setUserRefreshToken(user, userRefreshToken);
        };

        const userAccessToken: string = await this.authJWT.createAccessToken(fullUser.getUserId());

        const userDTOOutput: UserDTOOutput = new UserDTOOutput();
        userDTOOutput.setUserSignInOutput(fullUser.getUserId(), fullUser.getUserEmail(), fullUser.getUserRefreshToken(), userAccessToken);
        return userDTOOutput;
    };

    public signUp = async (userDTOInput: UserDTOInput): Promise<UserDTOOutput> => {
        const user: User = new User();

        const encryptedUserPassword: string = await this.cryptor.encryptPassword(userDTOInput.getUserPassword());

        user.setNotAddedUser(userDTOInput.getUserEmail(), encryptedUserPassword, userDTOInput.getUserAccessLevel());
        const createdUser: User = await this.userRepository.createUser(user);

        const userRefreshToken: string = await this.authJWT.createRefreshToken(createdUser.getUserId());
        const userAccessToken: string = await this.authJWT.createAccessToken(createdUser.getUserId());
        const fullUser: User = await this.userRepository.setUserRefreshToken(createdUser, userRefreshToken);
        
        const userDTOOutput: UserDTOOutput = new UserDTOOutput();
        userDTOOutput.setUserSignUpOutput(fullUser.getUserId(), fullUser.getUserEmail(), fullUser.getUserRefreshToken(), userAccessToken);
        return userDTOOutput;
    };
};