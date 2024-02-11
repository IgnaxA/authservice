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
        user_access_level: JsonDecoder.number,
        user_refresh_token: JsonDecoder.string
    }, 'UserDB');

    private handlingQueryResult = async (queryResult: QueryResult<JSON>) => {
        const respond: User = await this.userDecoder.decodeToPromise(queryResult.rows[0])
                                                    .then((userDB: UserDB) => {
                                                        const user: User = new User();
                                                        user.setFullUser(userDB.user_id,
                                                                         userDB.user_email, 
                                                                         userDB.user_password, 
                                                                         userDB.user_access_level,
                                                                         userDB.user_refresh_token);
                                                        return user;
                                                    });
        return respond;
    };

    public createUser = async (user: User): Promise<User> => {
        return await pool.query(`INSERT INTO users (user_email, user_password, user_access_level, user_refresh_token) 
                                 VALUES ('${user.getUserEmail()}', '${user.getUserPassword()}', ${user.getUserAccessLevel()}, '') 
                                 RETURNING *`)
                          .then(async (queryResult: QueryResult<JSON>) => {
                            return await this.handlingQueryResult(queryResult);
                          });
    };

    public getUser = async (userEmail: string): Promise<User> => {
        return await pool.query(`SELECT * 
                                 FROM users 
                                 WHERE users.user_email = '${userEmail}'`)
                         .then(async (queryResult: QueryResult<JSON>) => {
                            return await this.handlingQueryResult(queryResult);
                         });
    };

    public setUserRefreshToken = async (user: User, userRefreshToken: string): Promise<User> => {
        return await pool.query(`UPDATE users 
                                 SET user_refresh_token = '${userRefreshToken}' 
                                 WHERE user_id = ${user.getUserId()}
                                 RETURNING *`)
                         .then(async (queryResult: QueryResult<JSON>) => {
                            return await this.handlingQueryResult(queryResult);
                         });
    };
};
