import { Router } from 'express';
import BookController from './controllers/BookController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({"message": "hello world!"});
});

routes.post('/book', BookController.

});

routes

export default routes;