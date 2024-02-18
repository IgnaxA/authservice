

export class UserDTOInput {
    private userId: number = -1;
    private userEmail: string = "";
    private userPassword: string = "";
    private userAccessLevel: number = -1;

    public setSignInInput(userEmail: string, userPassword: string) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    };

    public setSignUpInput(userEmail: string, userPassword: string, userAccessLevel: number) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAccessLevel = userAccessLevel;
    };

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
};