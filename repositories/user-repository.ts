import { User } from "../entities/user";

export interface UserRepository {
    createUser(user: User): Promise<User>;
    getUser(userId: number): Promise<User>;
};