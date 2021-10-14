const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inscripcionSchema = Schema({
    estudiante: {type: mongoose.Schema.Types.ObjectId,ref: 'listStudents'},
    asignatura: {type: mongoose.Schema.Types.ObjectId,ref: 'materias'},
    nota1: Number,
    nota2: Number,
    nota3: Number,
});
module.exports = mongoose.model('inscripcion', inscripcionSchema);