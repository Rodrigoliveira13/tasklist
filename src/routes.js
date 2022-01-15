import { Router } from 'express';
import UserController from './app/controller/userController';
import SessionController from './app/controller/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// Todas as rotas abaixo necessitam de autenticação
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
