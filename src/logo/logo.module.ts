import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoController } from './logo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { logo, logoSchema } from './schema/logo.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: logo.name, schema: logoSchema}])],
  controllers: [LogoController],
  providers: [LogoService]
})
export class LogoModule {}
