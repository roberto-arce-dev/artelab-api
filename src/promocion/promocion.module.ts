import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromocionService } from './promocion.service';
import { PromocionController } from './promocion.controller';
import { UploadModule } from '../upload/upload.module';
import { Promocion, PromocionSchema } from './schemas/promocion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Promocion.name, schema: PromocionSchema }]),
    UploadModule,
  ],
  controllers: [PromocionController],
  providers: [PromocionService],
  exports: [PromocionService],
})
export class PromocionModule {}
