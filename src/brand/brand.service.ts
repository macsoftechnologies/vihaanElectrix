import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { brandDto } from './dto/brand.dto';
import { brand } from './schema/brand.schema';

@Injectable()
export class BrandService {

    constructor(@InjectModel(brand.name) private brandModel: Model<brand>) { }
    async Create(req: brandDto) {

        try {

        const brands = await this.brandModel.create(req)
          if (brands) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Added SuccessFully",
                    data: {
                       Brand: brands
                    }
                }
              
            }
             return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }

        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }

}
