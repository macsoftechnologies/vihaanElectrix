import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { adminLogin } from './dto/admin.dto';
import { admin } from './schema/admin.schema';

@Injectable()
export class AdminService {
    constructor(@InjectModel(admin.name) private userModel: Model<admin>) { }


    async Create(req: adminLogin) {

        try {
            const loginRes = await this.userModel.findOne({ $or: [{ email: req.email }, { Mobile: req.mobileNum }] })

            if (loginRes) {
                return {
                    statusCode: HttpStatus.CONFLICT,
                    message: `User Already Exits with ${loginRes.email} and ${loginRes.mobileNum}`
                }
            }

            const registerRes = await this.userModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            Email: registerRes.email,
                            MobileNum: registerRes.mobileNum
                        }
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
