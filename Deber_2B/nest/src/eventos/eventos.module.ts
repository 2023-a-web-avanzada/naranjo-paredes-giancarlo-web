import {Module} from '@nestjs/common';
import {EventosService} from "./eventos.service";
import {EventosGateway} from "./eventos.gateway";


@Module({
    imports: [],
    controllers: [],
    providers: [EventosService, EventosGateway],
    exports: [EventosService]
})
export class EventosModule {
}