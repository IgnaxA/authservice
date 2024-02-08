import { User } from "../entities/user";

export interface UserRepository {
    createUser(userEmail: string, userPassword: string, userAccessLevel: number): Promise<User>;
    getUser(userId: number): Promise<User>;
};