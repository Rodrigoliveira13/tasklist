import { Router } from 'express';
import UserController from './app/controller/userController';
import SessionController from './app/controller/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

export default routes;
