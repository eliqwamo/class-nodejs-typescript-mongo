import express from 'express';

import authintication from './authentication';
import users from './users';

const router = express.Router();

export default (): express.Router => {
    authintication(router);
    users(router);
    return router;
}