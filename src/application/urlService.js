import QRCode from 'qrcode';
import {customAlphabet} from 'nanoid';
import {url} from '../domain';
import {urlRepository} from '../infrastructure';

const generateHash = customAlphabet('1234567890abcedfABCDEF', 10);

const generateQRCode = (shortenedUrl) => QRCode.toDataURL(shortenedUrl);

const findUrlByHash = hash => {
    return urlRepository.findUrlByHash(hash);
};

const createUrl = async (originalUrl) => {
    const hash = generateHash();
    const shortenedUrl = `${process.env.BASE_URL}/${hash}`;
    const QRCodeUrl = await generateQRCode(shortenedUrl);

    return url.createUrl({originalUrl, shortenedUrl, hash, QRCodeUrl});
};

export default {findUrlByHash, createUrl};
