import connectMongoDB from "@/libs/mongodb";
import Videogame from "@/models/videojuego";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    const { nuevoTitulo: titulo, nuevaDescripcion: descripcion } = await request.json();
    await connectMongoDB();
    await Videogame.findByIdAndUpdate(id, { titulo, descripcion });
    return NextResponse.json({ message: "Videojuego actualizado" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const videogame = await Videogame.findOne({ _id: id })
    return NextResponse.json({ videogame }, { status: 200 })
}