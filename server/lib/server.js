import { createServer } from 'http';
import app from './app/index.js';
import { httpPort } from './config.js';
import logger from './logger.js';
import { connect } from './db.js';

const server = createServer(app);

connect()
    .then(() => {
        logger.info('DB Connection initialized.');
        server.listen(httpPort, () => {
            logger.info(`Server initialized and listening on ${httpPort}`);
        });
    })
    .catch((e) => {
        logger.error(e);
    });

