import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  nombre: { type: String, required: [true, "Nombre obligatorio"] },
  studentId: String,
});

// Convertir a modelo 
const student = mongoose.model('Nota', studentSchema);

export default student;
