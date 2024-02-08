import { UserDTO } from "../../dto/UserDTO";
import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";
import { Cryptor } from "../../secure/cryptor";
import { UserService } from "../user-service";




export class UserServiceImpl implements UserService {
    private readonly userRepository: UserRepository;
    private readonly cryptor: Cryptor;

    constructor(userRepository: UserRepository, cryptor: Cryptor) {
        this.userRepository = userRepository;
        this.cryptor = cryptor;
    };

    public getUser = async (userId: number): Promise<UserDTO> => {
        const user: User = await this.userRepository.getUser(userId);
        return new UserDTO(user.getUserId(), user.getUserEmail());
    };

    public createUser = async (userEmail: string, userPassword: string, userAccessLevel: number): Promise<UserDTO> => {
        const encryptedUserPassword: string = await this.cryptor.encryptPassword(userPassword);
        const user: User = await this.userRepository.createUser(userEmail, encryptedUserPassword, userAccessLevel);
        return new UserDTO(user.getUserId(), user.getUserEmail());
    };
};