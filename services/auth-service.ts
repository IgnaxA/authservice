import { UserDTOInput } from "../dto/user-dto-input";
import { UserDTOOutput } from "../dto/user-dto-output";

export interface AuthService {
    signIn(userDTOInput: UserDTOInput): Promise<UserDTOOutput>;
    signUp(userDTOInput: UserDTOInput): Promise<UserDTOOutput>;
};