 import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userRegisterDto } from './dto/user.dto';
import { users } from './schema/user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel(users.name) private adminModel: Model<users>) { }


    async Create(req: userRegisterDto) {

        try {
            // const loginRes = await this.adminModel.findOne({ $or: [{ email: req.email }, { Mobile: req.mobileNum }] })

            // if (loginRes) {
            //     return {
            //         statusCode: HttpStatus.CONFLICT,
            //         message: `User Already Exits with ${loginRes.email} and ${loginRes.mobileNum}`
            //     }
            // }

            const registerRes = await this.adminModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            FirstName: registerRes.fname,
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

    async Login(req: userRegisterDto) {
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




