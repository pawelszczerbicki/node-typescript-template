import {Response, Request, Router} from 'express';
import {Mongo} from '../mongo';
import {Type} from './user';

export class UserController {
    public path = '/user';
    public router = Router();

    constructor() {
        this.router.get(this.path, this.current);
        this.router.post(this.path, this.register);
    }

    current = async (req: any, res: Response) => res.send((await Mongo.users().findOne({email: req.user.email})) || {});

    register = async (req: Request, res: Response) => {
        await Mongo.users().insertOne({...req.body, type: [Type.CLIENT]})
        return res.send({});
    }
}
