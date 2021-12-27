import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { MongooseConfigService } from './_common/configs/mongoose.config';
import { VehicleInformationModule } from './vehicle-information/vehicle-information.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [ MongooseModule.forRootAsync({useClass : MongooseConfigService}),
   VehicleModule,
   VehicleInformationModule,
   AdminModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
