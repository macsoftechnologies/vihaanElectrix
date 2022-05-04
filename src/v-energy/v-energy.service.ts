import { Get, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vEnergyDto } from './dto/vEnergy.dto';
import { vEnergySpecsDto } from './dto/vEnergySpecs.dto';
import { vEnergy } from './schema/vEnergy.schema';
import { vEnergySpecs } from './schema/vEnergySpecs.schema';

@Injectable()
export class VEnergyService {
    constructor(@InjectModel(vEnergy.name) private vEnergyModel: Model<vEnergy>, @InjectModel(vEnergySpecs.name) private vEnergySpecsModel: Model<vEnergySpecs>) { }
    async Create(req: vEnergyDto) {
        try {

            const registerRes = await this.vEnergyModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "User Registered SuccessFully",
                    data: {
                        Type: req.type,
                        Location: req.location,
                        UID: req.vEnergyId,
                        OwnerName: req.ownerName,
                        Contact: req.contact,
                        Aadhar: req.aadhar,
                        DeviceUserName: req.deviceOwnerName,
                        ContactName: req.contact
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

    async createCharger(req: vEnergySpecsDto, image) {
        try {
            console.log(req, "documents...", image)
            if (image) {
                const reqDoc = image.map((doc, index) => {
                    let IsPrimary = false
                    if (index == 0) {
                        IsPrimary = true
                    }
                    const randomNumber = Math.floor((Math.random() * 1000000) + 1);
                    return doc.filename
                })

                req.chargerImage = reqDoc.toString()
            }
            console.log(req);
            // return false;
            const createVehicleResp = await this.vEnergySpecsModel.create(req)

            if (createVehicleResp) {
                return {
                    statusCode: HttpStatus.OK,
                    //    message: "Registered SuccessFully",
                    //    data: {
                    UserRegistration: {
                        createVehicleRes: createVehicleResp
                    }
                    //        }
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

    async updateCharger(req: vEnergySpecsDto, image) {
        try {
            console.log(req, "documents...", image)
            if (image) {
                const reqDoc = image.map((doc, index) => {
                    let IsPrimary = false
                    if (index == 0) {
                        IsPrimary = true
                    }
                    const randomNumber = Math.floor((Math.random() * 1000000) + 1);
                    return doc.filename
                })

                req.chargerImage = reqDoc.toString()
            }
            console.log(req);
            // return false;
            const createVehicleResp = await this.vEnergySpecsModel.updateOne({ chargerId: req.chargerId},{$set:{chargerImage: req.chargerImage, powerSpecifications: req.powerSpecifications}})          
                

            if (createVehicleResp) {
                return {
                    statusCode: HttpStatus.OK,
                    //    message: "Registered SuccessFully",
                    //    data: {
                    UserRegistration: {
                        createVehicleRes: createVehicleResp
                    }
                    //        }
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

    async usersList() {
        try {

            const userResponse = await this.vEnergyModel.find()
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
    async getChargerDetails(req: vEnergySpecsDto) {
        try {
            const vehicleResponse = await this.vEnergySpecsModel.find({ chargerId: req.chargerId })
            if (vehicleResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    EnergyStationsResponse: vehicleResponse
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
    async findVehicle(chargerId: string) {
        try {
            const vehicleResponse = await this.vEnergySpecsModel.findOne({ chargerId: chargerId })
            if (vehicleResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    //    Message: "Vehicle Details",
                    //    Data: {
                    chargerDetails: vehicleResponse
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


    async chargerList() {
        try {

            const userResponse = await this.vEnergySpecsModel.find()
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Vehicles',
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

    async delete(body: vEnergySpecsDto) {
        try {

            console.log(body)
            const deleteRes = await this.vEnergySpecsModel.deleteOne({ chargerId: body.chargerId });
            console.log(deleteRes, "deleteRes...")

            return {
                statusCode: HttpStatus.OK,
                message: 'Vehicle removed successfully',
            };

        } catch (error) {
            let error_response = {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                data: null,
                message: error,
            };
            return error_response;
        }

    }

}
