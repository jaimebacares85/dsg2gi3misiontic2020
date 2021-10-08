import mongoose from 'mongoose'; 
const Schema=mongoose.Schema; 

const usuarioSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    correo: {type: String, required: [true, 'Correo obligatorio']}, 
    usuarioId: {type: String, required: [true, 'Usuario obligatorio']},
    rol: {type: String, required: [true, 'Rol obligatorio']}, 
    telefono: {type: Number, required: [true, 'Teléfono obligatorio']},
    contraseña: {type: String, required: [true, 'Contraseña obligatoria']},  
    date:{type: Date, default: Date.now}, 
    activo: {type: Boolean, default: true} 
});

// Convertir a modelo 
const Usuario=mongoose.model('Usuario', usuarioSchema); 
export default Usuario;

// Sesion