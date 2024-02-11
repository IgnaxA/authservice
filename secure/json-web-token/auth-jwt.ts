import { TokenDecoded } from "./token-decoded";

export interface AuthJWT {
    createRefreshToken(userId: number): Promise<string>;
    createAccessToken(userId: number): Promise<string>;
    verifyToken(token: string): Promise<{ succes: boolean, data: TokenDecoded | Error }>;
};