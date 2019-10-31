import express from 'express';

class App {
    public app: express.Application = express();

    public constructor(){
        this.config();
    }

    private config = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}

export default new App();