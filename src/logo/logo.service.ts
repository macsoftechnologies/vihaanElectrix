import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { logoDto } from './dto/logo.dto';
import { logo } from './schema/logo.schema';

@Injectable()
export class LogoService {
  constructor(@InjectModel(logo.name) private logoModel: Model<logo>) {}

  async addlogo(req: logoDto, image) {
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

        req.logo = reqDoc.toString();
      }
      console.log(req);

      const addImage = await this.logoModel.create(req);
      if (addImage) {
        return {
          statusCode: HttpStatus.OK,
          msg: 'Added Successfully',
          data: addImage,
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

  async getlogo() {
    try{
        const list = await this.logoModel.find();
        if(list) {
            return {
                statusCode: HttpStatus.OK,
                msg: "List of Logo",
                data: list,
            }
        }
    } catch(error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            msg: error,
        }
    }
  }
}
