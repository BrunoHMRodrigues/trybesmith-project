import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginVerifications from '../middlewares/loginMiddlewares';

const { verifyRequestData } = loginVerifications;

const loginRouter = Router();

loginRouter.post('/', verifyRequestData, loginController.login);

export default loginRouter;