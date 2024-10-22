import Express from 'express';
import dbConnect from './db.config.js';
import authRouter from '../routes/auth.routes.js';


class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = Express();

        this.paths = {
            auth: '/api/v1/auth'
        }
        
        this.dbConnect();
        this.middlewares();
        this.routes();

    }

    async dbConnect() {
        await dbConnect();
    }

    middlewares() {
        this.app.use(Express.json());
    }

    routes() {
        this.app.use(this.paths.auth, authRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

export default Server;