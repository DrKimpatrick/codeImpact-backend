import express from 'express';
import mongoose from 'mongoose';
import env from './helper/env';
import Routers from './routes';
import cors from 'cors';
class App {
    public app: express.Application = express();
    private mongoUrl = env.MONGODB_DATABASE;

    public constructor(){
        this.app.use(cors());
        this.config();
        this.mongoSetup();
        this.configureRoutes();
    }

    private config = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private mongoSetup(): void {
        try {
            mongoose.connect(this.mongoUrl, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false });
        } catch {
            console.log('Please provide a mongodb url fit for this environment');
        }
    }

    private configureRoutes  = () => {
        this.app.use('/', Routers);
    }
}

export default new App();