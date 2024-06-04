import path from 'path' ;
import * as url from 'url';

export const IS_DEBUG = (process.env.SERVER_IS_DEBUG === 'true');

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const httpPort = (Number(process.env.GENCS_PORT) || 8001);

export const dbhost = 'localhost';
export const dbname = 'gencs';
export const dbcreds = { user:undefined, pass:undefined };

export const staticDir = (process.env.STATIC_DIR || 'static');

export const projectPath = path.join(__dirname, '..'); // This is incorrect; need to convert to ESM
export function absolutePath(...paths) {
    return path.join(projectPath, ...paths);
}

