import { Request, Response } from "express";

export interface TokenController {
    generateAccessToken(req: Request, res: Response): void;
    verifyAccessToken(req: Request, res: Response): void;
};