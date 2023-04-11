 import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userRegisterDto } from './dto/user.dto';
import { users } from './schema/user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel(users.name) private usersModel: Model<users>) { }


    async Create(req: userRegisterDto) {

        try {
            // const loginRes = await this.adminModel.findOne({ $or: [{ email: req.email }, { Mobile: req.mobileNum }] })

            // if (loginRes) {
            //     return {
            //         statusCode: HttpStatus.CONFLICT,
            //         message: `User Already Exits with ${loginRes.email} and ${loginRes.mobileNum}`
            //     }
            // }

            const registerRes = await this.usersModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "User Registered SuccessFully",
                    data: {
                        authentication: {
                            fullName: registerRes.fullName,
                            MobileNum: registerRes.mobileNum,
                            address:registerRes.address
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

            const loginRes = await this.usersModel.findOne({ $or: [ { MobileNum: req.mobileNum }] }).lean()
            if (loginRes) {
                if (loginRes.password === req.password) {

                    return {
                        statusCode: HttpStatus.OK,
                        message: "Login SuccessFully",
                        authentication: {
                            mobileNum: loginRes.mobileNum
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

    async usersList() {
        try {
    
            const userResponse = await this.usersModel.find()
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Users',
                    Data: {
                        UserDetails: userResponse
                    }
    
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
}




