import Express from 'express';
import dbConnect from './db.config.js';
import authRouter from '../routes/auth.routes.js';
import postRouter from '../routes/post.routes.js';


export default class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = Express();

        this.paths = {
            auth: '/api/v1/auth',
            posts: '/api/v1/posts'
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
        this.app.use(this.paths.posts, postRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
