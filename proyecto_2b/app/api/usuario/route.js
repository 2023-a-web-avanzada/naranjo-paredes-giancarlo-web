import connectMongoDB from "@/conexion/mongodb";
import Usuario from "@/modelos/usuario";
import {NextResponse} from "next/server";


export async function POST(request) {
    const {nombre, apellido, usuario, cedula, telefono, contrasena} = await request.json();
    await connectMongoDB();
    await Usuario.create({nombre, apellido, usuario, cedula, telefono, contrasena});
    return NextResponse.json({message: "Usuario creado"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const usuarios = await Usuario.find();
    return NextResponse.json({usuarios});
}