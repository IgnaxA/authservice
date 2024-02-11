import { Request, Response } from "express";
import { AuthJWT } from "../auth-jwt";
import { CheckJWT } from "../check-jwt";
import { TokenDecoded } from "../token-decoded";
import jwtConfig from "../../../configs/jwt-config.json";
import jwt from "jsonwebtoken";

export class JWTImpl implements AuthJWT, CheckJWT {
    private readonly refreshTokenAliveTime: number = 60 * 60 * 24 * jwtConfig.refreshTokenExpDay;
    private readonly accessTokenAliveTime: number = 60 * 60 * 24 * jwtConfig.accessTokenExpDay;

    createRefreshToken = async (userId: number): Promise<string> => {
        return jwt.sign({ id: userId }, jwtConfig.secretWord, {
            expiresIn: this.refreshTokenAliveTime
        });
    };

    verifyToken = async (token: string): Promise<{ success: boolean, data: TokenDecoded | Error }> => {
        try {
            const decoded = jwt.verify(token, jwtConfig.secretWord);
            return { success: true, data: decoded as TokenDecoded };
        } catch (err: any) {
            return { success: false, data: err };
        };
    };

    createAccessToken = async (userId: number): Promise<string> => {
        return jwt.sign({ id: userId }, jwtConfig.secretWord, {
            expiresIn: this.accessTokenAliveTime
        });
    };
};