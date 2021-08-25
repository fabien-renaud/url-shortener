import {urlRepository} from '../infrastructure';

const createUrl = (url) => {
    if (!url.originalUrl.match('^https?:\\/\\/.*')) throw new Error('Invalid original URL format');
    if (!url.shortenedUrl.match('^https?:\\/\\/.*')) throw new Error('Invalid shortened URL format');
    if (url.hash.length !== 10) throw new Error('Invalid hash length');
    if (!url.QRCodeUrl.match('^data:image/png;base64')) throw new Error('Invalidate QRCode format');

    return urlRepository.createUrl(url);
};

export default {createUrl};
