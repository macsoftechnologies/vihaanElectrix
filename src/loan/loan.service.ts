import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { loanDto } from './dto/loan.dto';
import { loan } from './schema/loan.schema';

@Injectable()
export class LoanService {
    constructor(@InjectModel(loan.name) private loanModel: Model<loan>) { }

    async Create(req: loanDto) {

        try {
           
        const registerRes = await this.loanModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                   // message: "loan details added successfully",
                   // data: {
                            vehicleName: registerRes.vehicleName,
                            period: registerRes.period,
                            amount: registerRes.amount
                     //   }


                        
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
