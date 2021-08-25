import express from 'express';
import {urlService} from '../../application';

const router = express.Router();

router.get('/:path', (request, response) => {
    const {path} = request.params;
    urlService
        .findUrlByHash(path)
        .then((url) => response.redirect(url.originalUrl))
        .catch(() => response.status(404).send());
});

export default router;
