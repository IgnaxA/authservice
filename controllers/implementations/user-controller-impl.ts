import { UserDTO } from "../../dto/UserDTO";
import { UserService } from "../../services/user-service";
import { UserController } from "../user-controller";
import { Request, Response } from "express";

export class UserControllerImpl implements UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    };

    public getUser = async (req: Request, res: Response) => {
        await this.userService.getUser(Number(req.params.id))
                                 .then((userDTO: UserDTO) => {
                                     res
                                        .status(200)
                                        .json(userDTO);
                                 });
    };

    public createUser = async (req: Request, res: Response) => {
        const userEmail: string = req.body.userEmail;
        const userPassword: string = req.body.userPassword;
        const userAccessLevel: number = req.body.userAccessLevel;
        await this.userService.createUser(userEmail, userPassword, userAccessLevel)
                              .then((userDTO: UserDTO) => {
                                res
                                   .status(200)
                                   .json(userDTO);
                              });
    };
};