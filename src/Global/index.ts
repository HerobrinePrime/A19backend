import { DbCollectionType } from './DbCollectionType';
import { Collection, Db, MongoClient, OptionalId } from "mongodb"
import { url, port, admin, password } from '../dev.json'

export class Global {
    static db: Db;
    static async initDb() {
        const uri = `mongodb://${admin}:${password}@${url}:${port}/Zir?authSource=admin`
        try {
            console.log(uri);
            const client = await new MongoClient(uri).connect();
            console.log(`connected to ${url}`);
            this.db = client.db();
            
        } catch (error) {
            console.log(error);
        }
    }

    static collection<T extends keyof DbCollectionType>(col:T):Collection<OptionalId<DbCollectionType[T]>>{
        return this.db.collection(col)
    }
}