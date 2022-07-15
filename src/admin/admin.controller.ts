import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { AdminService } from './admin.service';
import { adminLogin } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly vehicleService: VehicleService,
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  async create(@Body() req: adminLogin) {
    try {
      const result = await this.adminService.Create(req);
      console.log('result', result);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/login')
  async login(@Body() req: adminLogin) {
    try {
      const result = await this.adminService.Login(req);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Get('/listOfVehicles')
  async listOfVehicles() {
    console.log();
    try {
      const response = await this.vehicleService.vehiclesList();
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  @Get('/listOfUsers')
  async listOfUsers() {
    console.log();
    try {
      const response = await this.userService.usersList();
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  @Post('updateAdmin')
  async editservice(@Body() req: adminLogin) {
    try {
      const result = await this.adminService.updateAdmin(req);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }
}
