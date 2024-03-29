import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
var moment = require('moment');
import { Model } from 'mongoose';
import { bookRideDto } from './dto/bookRide.dto';
import { bookRide } from './schema/bookRide.schema';

@Injectable()
export class BookRideService {
  constructor(
    @InjectModel(bookRide.name) private bookRideModel: Model<bookRide>,
  ) {}
  async addRide(req: bookRideDto, image) {
    try {
      console.log(req, 'documents...', image);
      if (image) {
        const reqDoc = image.map((doc, index) => {
          let IsPrimary = false;
          if (index == 0) {
            IsPrimary = true;
          }
          const randomNumber = Math.floor(Math.random() * 1000000 + 1);
          return doc.filename;
        });

        req.vehicleImage = reqDoc.toString();
      }
      console.log(req);
      // return false;
      req.date = moment(req.createdAt).format('DD-MM-YYYY');
      const bookRideResp = await this.bookRideModel.create(req);

      if (bookRideResp) {
        return {
          statusCode: HttpStatus.OK,
          bookRideRes: bookRideResp,

          //        }
        };
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Invalid Request',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  async findRide(rideId: string) {
    try {
      const bookingResponse = await this.bookRideModel.findOne({
        rideId: rideId,
      });
      if (bookingResponse) {
        return {
          StatusCode: HttpStatus.OK,
          EnergyStationsResponse: bookingResponse,
        };
      }
      return {
        StatusCode: HttpStatus.BAD_REQUEST,
        Message: 'InValid Request',
      };
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }
  async bookingList() {
    try {
      const brands = await this.bookRideModel.find().sort({ date: -1 });
      console.log(brands);
      if (brands) {
        return {
          StatusCode: HttpStatus.OK,
          Message: 'List of Brands',
          Data: {
            brandsList: brands,
          },
        };
      }
      return {
        StatusCode: HttpStatus.BAD_REQUEST,
        Message: 'InValid Request',
      };
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  async docs() {
    try {
      const bookingResp = await this.bookRideModel.find().count();
      console.log(bookingResp, 'bookingResp...');

      return {
        statusCode: HttpStatus.OK,
        message: 'Total number of Stores',
        resp: bookingResp,
      };

      // return {
      //     StatusCode: HttpStatus.BAD_REQUEST,
      //     Message: "Company deletion Failed"
      // }
    } catch (error) {
      let error_response = {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message: error,
      };
      return error_response;
    }
  }

  async deleteBookRide(req: bookRideDto) {
    try {
      const terminate = await this.bookRideModel.deleteOne({
        rideId: req.rideId,
      });
      if (terminate) {
        return {
          statusCode: HttpStatus.OK,
          msg: 'Deleted Successfully',
          data: terminate,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          msg: 'Invalid Request',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      };
    }
  }
}
