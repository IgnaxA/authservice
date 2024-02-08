
export class User {
    private userId: number = -1;
    private userEmail: string = "";
    private userPassword: string = "";
    private userAccessLevel: number = -1;

    // constructor() {};

    constructor(userId: number, userEmail: string, userPassword: string, userAccessLevel: number ) {
        this.userId = userId;
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
