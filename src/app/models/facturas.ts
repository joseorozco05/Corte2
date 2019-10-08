import { DetalleFactura } from './detalle-factura';
import {Servicios} from './servicios';
import { from } from 'rxjs';

export class Facturas {
    idFactura:number;
    estadoFac:string;
    total:number;
    detalles:DetalleFactura[];
    servico:Servicios;

}
