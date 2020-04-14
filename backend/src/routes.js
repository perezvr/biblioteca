import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import BookController from './app/controllers/BookController';
import GoogleBooksApiController from './app/controllers/GoogleBooksApiController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/api', GoogleBooksApiController.get);
routes.get('/books', BookController.index);

routes.use(authMiddleware);
// abaixo sómente as rotas que precisam de autenticação


routes.post('/books', BookController.create);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);
export default routes;
