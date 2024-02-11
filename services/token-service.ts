
export interface TokenService {
    createAccessToken(): void;
    verifyAccessToken(): void;
    verifyRefreshToken(): void;
};