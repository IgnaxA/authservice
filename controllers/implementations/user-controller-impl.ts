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
        const userId = Number(req.params.id);
        await this.userService.getUser(userId)
                                 .then((userDTO: UserDTO) => {
                                     res
                                        .status(200)
                                        .json(userDTO);
                                 });
    };

    public createUser = async (req: Request, res: Response) => {
        const { userEmail, userPassword, userAccessLevel } = req.body;
        await this.userService.createUser(userEmail, userPassword, userAccessLevel)
                              .then((userDTO: UserDTO) => {
                                res
                                   .status(200)
                                   .json(userDTO);
                              });
    };
};