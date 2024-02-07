import { Cryptor } from "../cryptor";


export class CryptorImpl implements Cryptor {

    encryptPassword = async (password: string): Promise<string> => {
        throw new Error("Method not implemented.");
    };
    decryptPassword = async (password: string): Promise<string> => {
        throw new Error("Method not implemented.");
    };

};