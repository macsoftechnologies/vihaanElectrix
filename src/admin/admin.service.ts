import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { adminLogin } from './dto/admin.dto';
import { admin } from './schema/admin.schema';

@Injectable()
export class AdminService {
    constructor(@InjectModel(admin.name) private adminModel: Model<admin>) { }


    async Create(req: adminLogin) {

        try {
            const loginRes = await this.adminModel.findOne({ $or: [{ email: req.email }, { Mobile: req.mobileNum }] })

            if (loginRes) {
                return {
                    statusCode: HttpStatus.CONFLICT,
                    message: `User Already Exits with ${loginRes.email} and ${loginRes.mobileNum}`
                }
            }

            const registerRes = await this.adminModel.create(req)
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

    async Login(req: adminLogin) {
        try {

            const loginRes = await this.adminModel.findOne({ $or: [{ Email: req.email }, { MobileNum: req.mobileNum }] }).lean()
            if (loginRes) {
                if (loginRes.password === req.password) {

                    return {
                        statusCode: HttpStatus.OK,
                        message: "Login SuccessFully",
                        authentication: {
                            Email: loginRes.email
                        }
                    }
                }

                return {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Invalid Password"
                }

            }
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "User Not Found"

            }
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
}


