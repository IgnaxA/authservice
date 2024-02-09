import { User } from "../../entities/user";
import { UserRepository } from "../user-repository";
import { JsonDecoder, Result } from "ts.data.json";
import { pool } from "../../database/db";
import { QueryResult } from "pg";
import { UserDB } from "../entities/user-db";

export class UserRepositoryImpl implements UserRepository {

    constructor() {};

    private userDecoder = JsonDecoder.object<UserDB>({
        user_id: JsonDecoder.number,
        user_email: JsonDecoder.string,
        user_password: JsonDecoder.string,
        user_access_level: JsonDecoder.number
    }, 'UserDB');

    private handlingQueryResult = async (queryResult: QueryResult<JSON>) => {
        const respond: User = await this.userDecoder.decodeToPromise(queryResult.rows[0])
                                                    .then((userDB: UserDB) => new User(userDB.user_id, 
                                                                                       userDB.user_email, 
                                                                                       userDB.user_password, 
                                                                                       userDB.user_access_level));
        return respond;
    };

    public createUser = async (userEmail: string, userPassword: string, userAccessLevel: number): Promise<User> => {
        return await pool.query(`INSERT INTO users (user_email, user_password, user_access_level) 
                                 VALUES ('${userEmail}', '${userPassword}', ${userAccessLevel}) RETURNING *`)
                          .then(async (queryResult: QueryResult<JSON>) => {
                            return this.handlingQueryResult(queryResult);
                          });
    };
 
    public getUser = async (userId: number): Promise<User> => {
        return await pool.query(`SELECT * FROM users WHERE users.user_id = ${userId}`)
                         .then(async (queryResult: QueryResult<JSON>) => {
                            return this.handlingQueryResult(queryResult);
                         });
    };
};
