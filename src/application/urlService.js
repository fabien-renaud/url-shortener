import QRCode from 'qrcode';
import {customAlphabet} from 'nanoid';
import {url} from '../domain';

const generateHash = customAlphabet('1234567890abcedfABCDEF', 10);

const generateQRCode = (shortenedUrl) => QRCode.toDataURL(shortenedUrl);

const createUrl = async (originalUrl) => {
    const shortenedUrl = `${process.env.BASE_URL}/${generateHash()}`;
    const QRCodeUrl = await generateQRCode(shortenedUrl);

    return url.createUrl({originalUrl, shortenedUrl, QRCodeUrl});
};

export default {createUrl};
