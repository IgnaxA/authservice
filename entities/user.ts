
export class User {
    private userId: number = -1;
    private userEmail: string = "";
    private userPassword: string = "";
    private userAccessLevel: number = -1;
    private userRefreshToken: string = "";

    public setNotAddedUser(userEmail: string, userPassword: string, userAccessLevel: number) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAccessLevel = userAccessLevel;
    };

    public setAddedUser(userId: number, userEmail: string, userPassword: string, userAccessLevel: number) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAccessLevel = userAccessLevel;
    }

    public setFullUser(userId: number, userEmail: string, userPassword: string, userAccessLevel: number, userRefreshToken:string) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAccessLevel = userAccessLevel;
        this.userRefreshToken = userRefreshToken;
    }

    public getUserId() {
        return this.userId;
    };

    public getUserEmail() {
        return this.userEmail;
    };

    public getUserPassword() {
        return this.userPassword;
    };

    public getUserAccessLevel() {
        return this.userAccessLevel;
    };

    public getUserRefreshToken() {
        return this.userRefreshToken;
    };
};
