import mongoose from 'mongoose';
import { dbhost, dbname, dbcreds } from './config.js';

export function connect() {
    return mongoose.connect(
        `mongodb://${dbhost}/${dbname}`,
        dbcreds
    );
}
export default connect;
