import express from 'express';
import cors from 'cors'
import {Mongo} from './mongo';
import {config} from 'dotenv'
import auth from './auth/auth.middleware'
import {UserController} from './user/user.controller';

config()

const controllers = [new UserController()].map(c => c.router);

Mongo.connect(process.env.DB_URL)
    .then(() => express().use(cors()).use(express.json()).use(auth).use('/', controllers))
    .then(app => app.listen(process.env.PORT || 3000, () => console.log('Server started')))
    .catch(console.log)
