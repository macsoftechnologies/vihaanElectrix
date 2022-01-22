import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { typeDto } from './dto/loantype.dto';
import { type } from './schema/loantype.schema';

@Injectable()
export class LoanTypeService {
    
    constructor(@InjectModel(type.name) private typeModel: Model<type>) { }
    async Create(req: typeDto) {
     
        try {
            const registerRes = await this.typeModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    // message: "Loan type added SuccessFully",
                    // data: {
                    //     authentication: {
                            userId: registerRes.userId,
                            loanType: registerRes.typeLoan
                    //     }
                    // }
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
