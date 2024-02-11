import express, { Router } from "express";
import { AuthController } from "../controllers/auth-controller";

export class AuthRouter {
    private authController: AuthController;
    private authRouter: Router = express.Router();

    constructor(authController: AuthController) {
        this.authController = authController;        
    };

    public setRouter(): void {
        this.authRouter.post('/api/signin',this.authController.signIn);
        this.authRouter.post('/api/signup', this.authController.signUp);
    };

    public getRouter(): Router {
        return this.authRouter;
    };
};
