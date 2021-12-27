import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminLogin } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/register')
  async create(@Body() req: adminLogin) {
      try {
          const result = await this.adminService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  
  @Post('/login')
  async login(@Body() req:adminLogin ) {
      try {
          const result = await this.adminService.Login(req)
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }

}
