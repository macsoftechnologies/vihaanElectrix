import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { loanDetailsDto } from './dto/loanDetails.dto';
import { loanDetails } from './schema/loanDetails.schema';

@Injectable()
export class LoanDetailsService {
    constructor(@InjectModel(loanDetails.name) private loanDetailsModel: Model<loanDetails>) { }

    async Create(req: loanDetailsDto) {

        try {
            const registerRes = await this.loanDetailsModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Loan-details added SuccessFully",
                    data: {
                       response: registerRes
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
