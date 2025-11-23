import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PromocionDocument = Promocion & Document;

@Schema({ timestamps: true })
export class Promocion {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion?: string;

  @Prop({ min: 0, max: 100 })
  descuento: number;

  @Prop({ required: true })
  fechaInicio: Date;

  @Prop({ required: true })
  fechaFin: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Producto' }], default: [] })
  productos?: any;

  @Prop({ default: true })
  activa?: boolean;

  @Prop()
  imagen?: string;

  @Prop()
  imagenThumbnail?: string;

}

export const PromocionSchema = SchemaFactory.createForClass(Promocion);

PromocionSchema.index({ activa: 1 });
PromocionSchema.index({ fechaInicio: 1, fechaFin: 1 });
