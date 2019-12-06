import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import './server/utils/logging';
import routes from './server/routes';
import { apiDocs } from './server/utils';

env.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

const PORT = process.env.PORT || 8000;

apiDocs(app, PORT);
routes(app);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`.info));

export default app;
