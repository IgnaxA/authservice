import { UserDTOInput } from "../dto/UserDTOInput";
import { UserDTOOutput } from "../dto/UserDTOOutput";

export interface AuthService {
    signIn(userDTOInput: UserDTOInput): Promise<UserDTOOutput>;
    signUp(userDTOInput: UserDTOInput): Promise<UserDTOOutput>;
};