import morgan from 'morgan';
import compression from 'compression';
import { urlencoded, json } from 'body-parser';
import { join } from 'path';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'api-error-handler';
import expressMongooseErrors from 'express-mongoose-errors';
import serveStatic from 'serve-static';

import routes from './routes';

export default (app, io) => {
  app.use(compression());
  app.use(urlencoded({ extended: false, limit: '10mb' }));
  app.use(json({ limit: '10mb' }));
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(serveStatic(join(__dirname, '..', '..', '..', 'client')));

  if (process.env !== 'production') {
    app.use(morgan('dev'));
  }

  routes(app, io);

  app.use(expressMongooseErrors());
  app.use(errorHandler());
};