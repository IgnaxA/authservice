import { Request, Response } from "express";

export interface AuthController {
    signIn(req: Request, res: Response): void;
    signUp(req: Request, res: Response): void;
};