import { UserDTO } from "../../dto/UserDTO";
import { AuthService } from "../../services/auth-service";
import { AuthController } from "../auth-controller";
import { Request, Response } from "express";

export class AuthControllerImpl implements AuthController {
    private readonly authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    };

    public getUser = async (req: Request, res: Response) => {
        const userId = Number(req.params.id);
        await this.authService.getUser(userId)
                                 .then((userDTO: UserDTO) => {
                                     res
                                        .status(200)
                                        .json(userDTO);
                                 });
    };

    public createUser = async (req: Request, res: Response) => {
        const { userEmail, userPassword, userAccessLevel } = req.body;
        await this.authService.createUser(userEmail, userPassword, userAccessLevel)
                              .then((userDTO: UserDTO) => {
                                res
                                   .status(200)
                                   .json(userDTO);
                              });
    };
};