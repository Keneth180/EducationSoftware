import * as mongoose from 'mongoose';
export const GroupSchema = new mongoose.Schema({
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Students',
            autopopulate: true,
        },
    ],
    materia: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'materias',
            autopopulate: true,
        },
    ],
    codigo: String,
});
GroupSchema.plugin(require('mongoose-autopopulate'));
