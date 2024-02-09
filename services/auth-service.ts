import { UserDTO } from "../dto/UserDTO";

export interface AuthService {
    createUser(userEmail: string, userPassword: string, userAccessLevel: number): Promise<UserDTO>;
    getUser(userId: number): Promise<UserDTO>;
};