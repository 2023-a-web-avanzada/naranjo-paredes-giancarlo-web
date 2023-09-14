import connectMongoDB from "@/conexion/mongodb";
import Usuario from "@/modelos/usuario";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {idUsuario} = params
    const {
        nuevoNombre: nombre,
        nuevoNick: usuario,
    } = await request.json();
    await connectMongoDB();
    await Usuario.findByIdAndUpdate(idUsuario, {nombre, usuario})
    return NextResponse.json({message: "Usuario actualizado"}, {status: 200})
}

export async function GET(request, {params}) {
    const {idUsuario} = params;
    await connectMongoDB();
    const usuario = await Usuario.findOne({_id: idUsuario})
    return NextResponse.json({usuario}, {status: 200})
}