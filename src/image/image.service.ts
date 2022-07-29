import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { image } from './schema/image.schema';
import { Model } from 'mongoose';
import { imageDto } from './dto/image.dto';
@Injectable()
export class ImageService {
  constructor(@InjectModel(image.name) private imageModel: Model<image>) {}
  async addImage(req: imageDto, image) {
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

        req.image = reqDoc.toString();
      }
      console.log(req);
      // return false;
      const addImageResp = await this.imageModel.create(req);
      const Count = await this.imageModel.find().count();
      if (addImageResp) {
        return {
          statusCode: HttpStatus.OK,
          addImageRes: addImageResp,
          count: Count,
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
  async imageList() {
    try {
      const imagesResp = await this.imageModel.find();
      console.log(imagesResp);
      if (imagesResp) {
        return {
          StatusCode: HttpStatus.OK,
          imageRes: imagesResp,
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

  async delete(body: imageDto) {
    try {
      const deleteRes = await this.imageModel.deleteMany({
        imageId: body.imageId,
      });
      console.log(deleteRes, 'resp');
      return {
        statusCode: HttpStatus.OK,
        message: 'Store removed successfully',
      };
    } catch (error) {
      let error_response = {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message: error,
      };
      return error_response;
    }
  }

  async findImage(req) {
    try {
      const imageResponse = await this.imageModel.find({
        imageId: req.imageId,
      });
      const count = await this.imageModel.count();
      if (imageResponse) {
        return {
          StatusCode: HttpStatus.OK,
          imageDetails: imageResponse,
          count: count,
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

  async findImageUrl(req) {
    try {
      const imageResponse = await this.imageModel.find({
        $and: [{ imageId: req.imageId, url: req.url }],
      });
      const count = await this.imageModel
        .find({
          $and: [{ imageId: req.imageId, url: req.url }],
        })
        .count();
      if (imageResponse) {
        return {
          StatusCode: HttpStatus.OK,
          imageDetails: imageResponse,
          count: count,
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
}
