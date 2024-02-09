import { Request, Response } from "express";

export interface AuthController {
    getUser(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
};