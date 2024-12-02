import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(cors({origin: '*'}));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

export default app;
