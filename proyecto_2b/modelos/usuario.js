import mongoose from 'mongoose';

const usuarioEsquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        usuario: String,
        cedula: Number,
        telefono: Number,
        contrasena: String,
    },
    {
        timestamps: true,
    }
);

// Comprueba si el modelo ya existe antes de registrarlo
const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioEsquema);

export default Usuario;