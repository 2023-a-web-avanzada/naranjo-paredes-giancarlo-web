import {Injectable} from '@nestjs/common';

@Injectable()
export class EventosService {
    saludar(): string {
        return 'saludos';
    }
}