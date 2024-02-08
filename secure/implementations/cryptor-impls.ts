import { Cryptor } from "../cryptor";
import { hash, compare } from "bcrypt";


export class CryptorImpl implements Cryptor {
    private readonly saltRounds: number = 10;

    encryptPassword = async (password: string): Promise<string> => {
        return hash(password, this.saltRounds);
    };
    comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
        return compare(password, hashedPassword);
    };
};