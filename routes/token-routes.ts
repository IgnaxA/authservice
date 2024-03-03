import express, { Router } from "express";
import { TokenController } from "../controllers/token-controller";

export class TokenRoutes {
    private readonly tokenController: TokenController;
    private tokenRouter: Router = express.Router();


    constructor(tokenController: TokenController) {
        this.tokenController = tokenController;
    };

    public setRouter(): void {
        this.tokenRouter = express.Router();
        this.tokenRouter.post('token/verifyAccessToken', this.tokenController.verifyAccessToken);
        this.tokenRouter.post('token/createAccessToken', this.tokenController.generateAccessToken);
    };

    public getRouter(): Router {
        return this.tokenRouter;
    }
}