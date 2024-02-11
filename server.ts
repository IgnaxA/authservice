import express from "express";
import { AuthRouter } from "./routes/auth-routes";
import { AuthControllerImpl } from "./controllers/implementations/auth-controller-impl";
import { UserRepository } from "./repositories/user-repository";
import { UserRepositoryImpl } from "./repositories/implementations/user-repository-impl";
import { AuthController } from "./controllers/auth-controller";
import { AuthService } from "./services/auth-service";
import { AuthServiceImpl } from "./services/implementations/auth-service-impl";
import { Cryptor } from "./secure/cryptor/cryptor";
import { CryptorImpl } from "./secure/cryptor/implementations/cryptor-impls";
import bodyParser from "body-parser";
import { AuthJWT } from "./secure/json-web-token/auth-jwt";
import { JWTImpl } from "./secure/json-web-token/implementations/jwt-impl";

const PORT = 8080;

const app = express();
app.use(bodyParser.json());

const userRepository: UserRepository = new UserRepositoryImpl();
const cryptor: Cryptor = new CryptorImpl();
const authJWT: AuthJWT = new JWTImpl();
const authService: AuthService = new AuthServiceImpl(userRepository, cryptor, authJWT);
const authController: AuthController = new AuthControllerImpl(authService);
const authRouter: AuthRouter = new AuthRouter(authController);

authRouter.setRouter();

app.use(authRouter.getRouter());

app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});