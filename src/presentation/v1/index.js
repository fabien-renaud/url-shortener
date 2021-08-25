import express from 'express';
import health from './health';
import url from './url';

const router = express.Router();

router.use('/url', url);
router.use('/health', health);

export default router;
