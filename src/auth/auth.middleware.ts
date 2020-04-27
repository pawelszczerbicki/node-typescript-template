import * as admin from 'firebase-admin'
import {Response} from 'express'

admin.initializeApp();
const auth = async (req: any, resp: Response, next: any) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const user = await admin.auth().verifyIdToken(token)
        req.user = {id: user.uid, email: user.firebase.identities.email[0]};
        return next()
    } catch (e) {
        console.log('Can not auth user', e);
        resp.status(401).send({error: 'Not authorized'})
    }
}

export default auth
