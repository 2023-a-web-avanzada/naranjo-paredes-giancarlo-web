import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();

// ModuloSoloServicios
// [Servicios]
// [exportar]->[Servicios]

// ModuloSoloControlador
// [Controlador]

// ModuloControladoresServicios
// [ModuloSoloServicios]
// [Controlador]
// [Servicios]
// [exportar]->[Servicios]

// Modulos contienen [Servicios, Controladores], tambien pueden exportar [Servicios]
// Controlador -> Recibir peticiones -> Responsabilidad controlador es VALIDACION
// Servicios -> LOGICA NEGOCIO (servicio es un singleton -> una sola instancia en todo el app)
// crear, borrar, actualizar, buscar, .....
