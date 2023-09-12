import connectMongoDB from "@/libs/mongodb";
import Videogame from "@/models/videojuego";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { titulo, descripcion } = await request.json();
    await connectMongoDB();
    await Videogame.create({ titulo, descripcion });
    return NextResponse.json({ message: "Videojuego creado" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const videogames = await Videogame.find();
    return NextResponse.json({ videogames });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Videogame.findByIdAndDelete(id);
    return NextResponse.json({ message: "Videojuego eliminado" }, { status: 200 })
}