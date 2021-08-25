import express from 'express';
import v1 from './v1';
import redirect from './v1/redirect';

const router = express.Router();

router.use('/v1', v1);

export default router;
export {redirect};
