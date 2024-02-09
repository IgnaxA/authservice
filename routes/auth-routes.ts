import express, { Router } from "express";
import { AuthController } from "../controllers/auth-controller";

export class AuthRouter {
    private authController: AuthController;
    private authRouter: Router = express.Router();

    constructor(authController: AuthController) {
        this.authController = authController;        
    };

    public setRouter(): void {
        this.authRouter.get('/users/:id', this.authController.getUser);
        this.authRouter.post('/users', this.authController.createUser);
    };

    public getRouter(): Router {
        return this.authRouter;
    };
};
