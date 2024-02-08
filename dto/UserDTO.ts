

export class UserDTO {
    public userId: number = -1;
    public userEmail: string = "";

    // constructor() {};

    constructor(userId: number, userEmail: string) {
        this.userId = userId;
        this.userEmail = userEmail;
    };
};