
export class User {
    private userId: number = -1;
    private userEmail: string = "";
    private userPassword: string = "";
    private userAccessLevel: number = -1;

    constructor() {};

    // constructor(userEmail: string, userPassword: string, userAccessLevel: number ) {
    //     this.userEmail = userEmail;
    //     this.userPassword = userPassword;
    //     this.userAccessLevel = userAccessLevel;
    // };

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
