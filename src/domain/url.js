import {urlRepository} from '../infrastructure';

const createUrl = (url) => {
    if (!url.originalUrl.match('^https?:\\/\\/.*')) throw new Error('Invalidate original URL format');
    if (!url.shortenedUrl.match('^https?:\\/\\/.*')) throw new Error('Invalidate shortened URL format');
    if (!url.QRCodeUrl.match('^data:image/png;base64')) throw new Error('Invalidate QRCode format');

    return urlRepository.createUrl(url);
};

export default {createUrl};
