import express from "express";
import { UserRouter } from "./routes/user-routes";
import { UserControllerImpl } from "./controllers/implementations/user-controller-impl";
import { UserRepository } from "./repositories/user-repository";
import { UserRepositoryImpl } from "./repositories/implementations/user-repository-impl";
import { UserController } from "./controllers/user-controller";
import { UserService } from "./services/user-service";
import { UserServiceImpl } from "./services/implementation/user-service-impl";
import { Cryptor } from "./secure/cryptor";
import { CryptorImpl } from "./secure/implementations/cryptor-impls";

const PORT = 8080;

const app = express();

const userRepository: UserRepository = new UserRepositoryImpl();
const cryptor: Cryptor = new CryptorImpl();
const userService: UserService = new UserServiceImpl(userRepository, cryptor);
const userController: UserController = new UserControllerImpl(userService);
const userRouter: UserRouter = new UserRouter(userController);

userRouter.setRouter();

app.use(userRouter.getRouter());

app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});