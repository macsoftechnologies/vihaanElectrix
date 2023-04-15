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
                    Req: registerRes
                          
                    
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
          const loginRes = await this.usersModel
            .findOne({ mobileNum: req.mobileNum })
            .lean();
          if (loginRes) {
            if (loginRes.password === req.password) {
              return {
                statusCode: HttpStatus.OK,
                message: 'Login SuccessFully',
                logindetails: loginRes,
              };
            } else {
            
            return {
              statusCode: HttpStatus.BAD_REQUEST,
              message: 'Invalid Password',
            };
            }
        } else {
          return {
            statusCode: HttpStatus.NOT_FOUND,
            msg: 'User Not Found',
          };
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

    async getUser(params:userRegisterDto){
        try{
            const userResp=await this.usersModel.findOne({userId:params.userId})
            if(userResp){
                return {
                    statusCode:HttpStatus.OK,
                    message:'list of users',
                    userReq:userResp
                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async updateUser(params:userRegisterDto){
        try{
            const editRes=await this.usersModel.updateOne({userId:params.userId},
                {$set:{
                    fullName:params.fullName,
                    address:params.address,
                    password:params.password,
                    mobileNum:params.mobileNum
                }})
             if(editRes){
                return {
                    statusCode:HttpStatus.OK,
                    updateRes:editRes

                }
             }
             return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'Invalid Request'
             }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async delUser(params:userRegisterDto){
        try{
            const delRes=await this.usersModel.deleteOne({userId:params.userId})
            if(delRes){
                return {
                    statusCode:HttpStatus.OK,
                    message:'deletd sucessfully',
                    deluser:delRes
                }
            }
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'invalid Request'
            }
        }catch(error){
            return {
                statuscode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}




