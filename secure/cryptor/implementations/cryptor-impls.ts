import { Cryptor } from "../cryptor";
import bcrypt from "bcrypt";


export class CryptorImpl implements Cryptor {
    private readonly saltRounds: number = 10;

    encryptPassword = async (password: string): Promise<string> => {
        return bcrypt
                .hash(password, this.saltRounds);
    };
    comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
        return bcrypt
                .compare(password, hashedPassword);
    };
};