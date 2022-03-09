import { Module } from '@nestjs/common';
import { BookRideService } from './book-ride.service';
import { BookRideController } from './book-ride.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { bookRide, bookRideSchema } from './schema/bookRide.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: bookRide.name, schema: bookRideSchema}])],
  controllers: [BookRideController],
  providers: [BookRideService]
})
export class BookRideModule {}
