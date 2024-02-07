

export interface Cryptor {
    encryptPassword(password: string): Promise<string>;
    decryptPassword(password: string): Promise<string>;
};