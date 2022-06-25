import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { MongooseConfigService } from './_common/configs/mongoose.config';
import { VehicleInformationModule } from './vehicle-information/vehicle-information.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LoanTypeModule } from './loan-type/loan-type.module';
import { UploadTypeModule } from './upload-type/upload-type.module';
import { LoanModule } from './loan/loan.module';
import { LoanDetailsModule } from './loan-details/loan-details.module';
import { LoanPeriodModule } from './loan-period/loan-period.module';
import { VEnergyModule } from './v-energy/v-energy.module';
import { BrandModule } from './brand/brand.module';
import { BookRideModule } from './book-ride/book-ride.module';
import { SharedService } from './shared/shared.service';
import { ColorMappingModule } from './color-mapping/color-mapping.module';
import { StoresModule } from './stores/stores.module';
import { ImageModule } from './image/image.module';


@Module({
 // imports: [ MongooseModule.forRoot('mongodb://velectrix1:Vihaan2023@13.232.5.108:27017/velectrix?authSource=admin'),
 imports: [MongooseModule.forRoot('mongodb+srv://macsof:macsof@nextlevelcarwash.yjs3i.mongodb.net/vElectrix?retryWrites=true&w=majority'), 
 VehicleModule,
   VehicleInformationModule,
   AdminModule,
   UserModule,
   LoanTypeModule,
   UploadTypeModule,
   LoanModule,
   LoanDetailsModule,
   LoanPeriodModule,
   VEnergyModule,
   BrandModule,
   BookRideModule,
   ColorMappingModule,
   StoresModule,
   ImageModule
   ],
  controllers: [AppController],
  providers: [AppService, SharedService],
})
export class AppModule {}
