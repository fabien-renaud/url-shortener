import {URLModel} from './models';

const domainUrlToEntity = (domainUrl) => ({
    original_url: domainUrl.originalUrl,
    shortened_url: domainUrl.shortenedUrl,
    qr_code_url: domainUrl.QRCodeUrl
});

const entityUrlToDomain = (entityUrl) => ({
    originalUrl: entityUrl.original_url,
    shortenedUrl: entityUrl.shortened_url,
    QRCodeUrl: entityUrl.qr_code_url
});

const fetchUrl = () => {
    return URLModel.findAll();
};

const createUrl = async (url) => {
    const entityUrl = await URLModel.create(domainUrlToEntity(url));
    return entityUrlToDomain(entityUrl);
};

export default {
    fetchUrl,
    createUrl
};
