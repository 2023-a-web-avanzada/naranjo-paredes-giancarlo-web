import mongoose from 'mongoose';

const VideogameSchema = new mongoose.Schema(
  {
    titulo: String,
    descripcion: String,
  },
  {
    timestamps: true,
  }
);

// Comprueba si el modelo ya existe antes de registrarlo
const Videogame = mongoose.models.Videogame || mongoose.model("Videogame", VideogameSchema);

export default Videogame;
