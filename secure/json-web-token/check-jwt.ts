import { TokenDecoded } from "./token-decoded"


export interface CheckJWT {
    createAccessToken(userId: number): Promise<string>;
    verifyToken(token: string): Promise<{ succes: boolean, data: TokenDecoded | Error }>;
};