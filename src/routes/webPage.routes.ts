import * as webPageControllers from '../controllers/webPage';
import express from 'express';

const webPageRouter = express.Router();

webPageRouter
  .route('/')
  .get(webPageControllers.getAll)
  .post(webPageControllers.create);

webPageRouter
  .route('/:id')
  .get(webPageControllers.get)
  .patch(webPageControllers.update)
  .delete(webPageControllers.deleteById);

export default webPageRouter;
