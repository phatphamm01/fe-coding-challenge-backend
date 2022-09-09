import webPageRouter from './routes/webPage.routes';
import AppError from './utils/AppError.utils';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import logger from 'morgan';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(ExpressMongoSanitize());
app.options('*', cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome'
  });
});

const API_VERSION = '/api/v1';
app.use(`${API_VERSION}/web-page`, webPageRouter);

app.all('*', function (req, res, next) {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

export default app;
