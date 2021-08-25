import express from 'express';
import health from './health';
import redirect from './redirect';
import url from './url';

const router = express.Router();

router.use('/url', url);
router.use('/health', health);

export default router;
export {redirect};