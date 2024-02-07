import express, { Router } from "express";
import { UserController } from "../controllers/user-controller";

export class UserRouter {
    private userController: UserController;
    private userRouter: Router = express.Router();

    constructor(userController: UserController) {
        this.userController = userController;        
    };

    public setRouter(): void {
        this.userRouter.get('/users/:id', this.userController.getUser);
        this.userRouter.post('/users', this.userController.createUser);
    };

    public getRouter(): Router {
        return this.userRouter;
    };

    
};
