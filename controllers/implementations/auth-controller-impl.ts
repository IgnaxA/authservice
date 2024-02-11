import { UserDTOInput } from "../../dto/UserDTOInput";
import { UserDTOOutput } from "../../dto/UserDTOOutput";
import { AuthService } from "../../services/auth-service";
import { AuthController } from "../auth-controller";
import { Request, Response } from "express";
import JWTConfig from "../../configs/jwt-config.json";

export class AuthControllerImpl implements AuthController {
    private readonly authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    };

    public signIn = async (req: Request, res: Response) => {
        const { userEmail, userPassword } = req.body;
        const userDTOInput: UserDTOInput = new UserDTOInput();
        userDTOInput.setSignInInput(userEmail, userPassword);
        
        await this.authService.signIn(userDTOInput)
                                 .then((userDTOOutput: UserDTOOutput) => {
                                     res
                                        .status(200)
                                        .cookie('access_token', userDTOOutput.getUserAcessToken(), { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * JWTConfig.accessTokenExpDat })
                                        .json({ userEmail: userDTOOutput.getUserEmail() });
                                 })
                                 .catch((err) => res.status(500).json(err));
    };

    public signUp = async (req: Request, res: Response) => {
        const { userEmail, userPassword, userAccessLevel } = req.body;
        const userDTOInput: UserDTOInput = new UserDTOInput();
        userDTOInput.setSignUpInput(userEmail, userPassword, userAccessLevel);
        
        await this.authService.signUp(userDTOInput)
                              .then((userDTOOutput: UserDTOOutput) => {
                                res
                                   .status(200)
                                   .cookie('access_token', userDTOOutput.getUserAcessToken(), { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * JWTConfig.accessTokenExpDat })
                                   .json({ userEmail: userDTOOutput.getUserEmail() });
                              })
                              .catch((err) => res.status(500).json(err));
    };
};