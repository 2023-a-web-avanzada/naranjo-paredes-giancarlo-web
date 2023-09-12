"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const eventos_service_1 = require("./eventos.service");
let EventosGateway = exports.EventosGateway = class EventosGateway {
    constructor(_eventosService) {
        this._eventosService = _eventosService;
    }
    devolverHola(message, socket) {
        console.log('message', message);
        socket.broadcast
            .emit('escucharEventoHola', {
            mensaje: this._eventosService.saludar() + ' ' + message.mensaje
        });
        return { mensaje: 'ok' };
    }
    unirseSala(message, socket) {
        socket.join(message.salaId);
        const mensajeDeBienvenidaSala = {
            mensaje: 'Bienvenido ${message.nombre} a la sala ${message.salaId}'
        };
        socket.broadcast
            .to(message.salaId)
            .emit('escucharEventoUnirseSala', mensajeDeBienvenidaSala);
        return { mensaje: 'ok' };
    }
    enviarMensaje(message, socket) {
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salald: message.salald
        };
        socket.broadcast
            .to(message.salald)
            .emit('escucharEventoMensajeSala', mensajeSala);
        return { mensaje: 'ok' };
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('hola'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Object)
], EventosGateway.prototype, "devolverHola", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirseSala", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarMensaje'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarMensaje", null);
exports.EventosGateway = EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(11202, {
        cors: {
            origin: '*',
        }
    }),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosGateway);
//# sourceMappingURL=eventos.gateway.js.map