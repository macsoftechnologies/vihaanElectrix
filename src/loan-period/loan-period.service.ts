import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { loanPeriodDto } from './dto/loanPeriod.dto';
import { loanPeriod } from './schema/loanPeriod.schema';

@Injectable()
export class LoanPeriodService {
    
    constructor(@InjectModel(loanPeriod.name) private loanPeriodModel: Model<loanPeriod>) { }
    async Create(req: loanPeriodDto) {
     
        try {
            const registerRes = await this.loanPeriodModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    // message: "Loan type added SuccessFully",
                    // data: {
                    //     authentication: {
                            id: registerRes.id,
                            period: registerRes.period
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

    async periodList() {
        try {
    
            const userResponse = await this.loanPeriodModel.find()
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    // Message: 'List of Periods',
                    // Data: {
                    periods: userResponse
                   // }
    
                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }
    
        } catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
    
            }
        }
    }
    async findPeriod(id: string){
        try{
           const vehicleResponse = await this.loanPeriodModel.findOne({id: id})
            if(vehicleResponse){
                return{
                    StatusCode: HttpStatus.OK,
                 //    Message: "Vehicle Details",
                 //    Data: {
                        vehicleDetails: vehicleResponse
                   // }
                }
            }
            return{
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }
        } catch(error){
            return{
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }
        }
    }
 
    
}
