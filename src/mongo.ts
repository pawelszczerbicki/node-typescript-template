import {Db, MongoClient} from 'mongodb';
import {User} from './user/user';

const users = 'users';

export class Mongo {
    public static mongo: Db;

    public static connect(url: string): Promise<Db> {
        return MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(c => this.mongo = c.db());
    }

    public static users = () => Mongo.collection<User>(users);
    private static collection = <T>(name: string) => Mongo.mongo.collection<T>(name);
}
