import { User } from "../entities/user";

export interface UserRepository {
    createUser(user: User): Promise<User>;
    getUser(userEmail: string): Promise<User>;
    setUserRefreshToken(user: User, userRefreshToken: string): Promise<User>;
};