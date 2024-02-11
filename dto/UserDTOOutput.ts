
export class UserDTOOutput {
    private userId: number = -1;
    private userEmail: string = "";
    private userAccessToken: string = "";

    public setUserSignUpOutput(userId: number, userEmail: string, userAccessToken: string) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userAccessToken = userAccessToken;
    };

    public setUserSignInOutput(userId: number, userEmail: string, userAccessToken: string) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userAccessToken = userAccessToken;
    };

    public getUserId() {
        return this.userId;
    };

    public getUserEmail() {
        return this.userEmail;
    };

    public getUserAcessToken() {
        return this.userAccessToken;
    };
};