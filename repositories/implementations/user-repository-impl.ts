import { User } from "../../entities/user";
import { UserRepository } from "../user-repository";

import { pool } from "../../database/db";
import { QueryResult } from "pg";

export class UserRepositoryImpl implements UserRepository {

    constructor() {};

    public createUser = async (user: User): Promise<User> => {
        return await pool.query(`INSERT INTO users (user_email, user_password, user_access_level) 
                          VALUES (${user.getUserEmail()}, ${user.getUserPassword()}, ${user.getUserAccessLevel()}) RETURNING *`)
                          .then((queryResult: QueryResult<JSON>) => {
                            return new User();
                          });
    };
 
    public getUser = async (userId: number): Promise<User> => {
        return await pool.query(`SELECT * FROM users WHERE users.user_id == ${userId}`)
                    .then((queryResult: QueryResult<JSON>) => {
                        return new User();
                    });
    };
};
