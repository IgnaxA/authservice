import { Request, Response } from "express";
import { TokenController } from "../token-controller";
import { TokenService } from "../../services/token-service";


export class TokenControllerImpl implements TokenController {
    private readonly tokenService: TokenService;
    
    constructor(tokenService: TokenService) {
        this.tokenService = tokenService;
    };

    public generateAccessToken = async (req: Request, res: Response) => {
        const { refre } = req.body;

        
    };

    public verifyAccessToken = async (req: Request, res: Response) => {
        throw new Error("Method not implemented.");
    };
}