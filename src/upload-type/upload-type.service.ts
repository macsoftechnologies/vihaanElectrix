import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { uploadTypeDto } from './dto/uploadtype.dto';
import { uploadType } from './schema/uploadtype.schema';

@Injectable()
export class UploadTypeService {
    constructor(@InjectModel(uploadType.name) private uploadTypeModel: Model<uploadType>) { }
    async Create(req: uploadTypeDto, document) {
       try {
             console.log(req, "documents...", document)
            if (document) {
               const reqDoc = document.map((doc, index) => {
                   let IsPrimary = false
                   if (index == 0) {
                       IsPrimary = true
                   }
                   const randomNumber = Math.floor((Math.random() * 1000000) + 1);
                   return doc.filename
                   
               })

               req.documents = reqDoc.toString()
           }
              console.log(req);
           // return false;
          const documentsResp = await this.uploadTypeModel.create(req)
          
            if (documentsResp) {
               return {
                   statusCode: HttpStatus.OK,
                   message: "documents added SuccessFully",
                   data: {
                           documentsRes: documentsResp
                       
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
