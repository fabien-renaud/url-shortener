import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../interface';

const server = express();
const port = parseInt(process.env.SERVER_PORT) || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cors());

server.use('*', (req, res, next) => {
    console.log(`${req.method} ${req.baseUrl}`);
    next();
});

server.use('/api', routes);

server.listen(port, () => console.info(`Server is listening at port ${port}`));
