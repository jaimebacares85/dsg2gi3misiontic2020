import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const usuariosSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    correo: {type: String, required: [true, 'Correo obligatorio']}, 
    usuarioId: {type: String, required: [true, 'Usuario obligatorio']},
    rol: {type: String, required: [true, 'Rol obligatorio']}, 
    telefono: {type: String, required: [true, 'Teléfono obligatorio']}, 
    date:{type: Date, default: Date.now}, 
    activo: {type: Boolean, default: true} 
});

// Convertir a modelo 
const Usuarios = mongoose.model('Usuarios', usuariosSchema); 
export default Usuarios;