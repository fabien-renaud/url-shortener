import express from 'express';
import {urlService} from '../../application';

const router = express.Router();

router.post('/', (request, response) => {
    const {originalUrl} = request.body;
    urlService
        .createUrl(originalUrl)
        .then((url) => response.set({'Content-Type': 'application/json'}).status(201).send(url))
        .catch(() => response.status(500).send());
});

export default router;
