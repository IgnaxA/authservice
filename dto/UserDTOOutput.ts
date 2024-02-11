
export class UserDTOOutput {
    private userId: number = -1;
    private userEmail: string = "";
    private userAccessToken: string = "";
    private userRefreshToken: string = "";

    public setUserSignUpOutput(userId: number, userEmail: string, userRefreshToken: string,userAccessToken: string) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userRefreshToken = userRefreshToken;
        this.userAccessToken = userAccessToken;
    };

    public setUserSignInOutput(userId: number, userEmail: string, userRefreshToken: string,userAccessToken: string) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userRefreshToken = userRefreshToken;
        this.userAccessToken = userAccessToken;
    };

    public getUserId() {
        return this.userId;
    };

    public getUserEmail() {
        return this.userEmail;
    };

    public getUserRefreshToken() {
        return this.userRefreshToken;
    };

    public getUserAcessToken() {
        return this.userAccessToken;
    };
};