import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const AppMiddleware = new express();
const corsOptions = {
  exposedHeaders: ['X-Total-Count'] 
}

AppMiddleware.use(bodyParser.json());
AppMiddleware.use(cors(corsOptions));
AppMiddleware.use(helmet());
AppMiddleware.use(bodyParser.urlencoded({ extended: false }));
AppMiddleware.use(express.static('public'));

export default AppMiddleware;

