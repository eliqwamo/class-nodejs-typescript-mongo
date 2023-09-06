import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true
}))

const mongoUrl = "mongodb+srv://elihuc:rrDxPRznSPCB4LPB@cluster0.y0z2ml0.mongodb.net/nodejs-typescript-db?retryWrites=true&w=majority"

app.use(compression());
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);

server.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002/`);
})

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());