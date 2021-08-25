import {URLModel} from './models';

const domainUrlToEntity = (domainUrl) => ({
    original_url: domainUrl.originalUrl,
    shortened_url: domainUrl.shortenedUrl,
    hash: domainUrl.hash,
    qr_code_url: domainUrl.QRCodeUrl
});

const entityUrlToDomain = (entityUrl) => ({
    originalUrl: entityUrl.original_url,
    shortenedUrl: entityUrl.shortened_url,
    hash: entityUrl.hash,
    QRCodeUrl: entityUrl.qr_code_url
});

const findUrlByHash = async (hash) => {
    const entityUrl = await URLModel.findOne({where: {hash}});
    return entityUrlToDomain(entityUrl);
};

const createUrl = async (url) => {
    const entityUrl = await URLModel.create(domainUrlToEntity(url));
    return entityUrlToDomain(entityUrl);
};

export default {
    findUrlByHash,
    createUrl
};
