
import { CompraService } from './services/compra.service';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraSchema } from './schema/compra.schema';
import { CompraController } from './controllers/compra.controller';

@Module({
  imports: [


    MongooseModule.forFeature([
        // para poder usar o mongoose  111
        {
          name: 'Compra',
          schema: CompraSchema ,
        }
      ]),




      
  ],
  controllers: [CompraController],
  providers: [CompraService],
})
export class CompraModule {}
