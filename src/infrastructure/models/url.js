import {STRING, TEXT, UUID, UUIDV4} from 'sequelize';
import database from '../../core/database';

const URLModel = database.define(
    'URL',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        original_url: {
            type: STRING,
            allowNull: false
        },
        shortened_url: {
            type: STRING,
            allowNull: false
        },
        hash: {
            type: STRING,
            allowNull: false
        },
        qr_code_url: {
            type: TEXT,
            allowNull: false
        }
    },
    {
        tableName: 'url',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

export default URLModel;
