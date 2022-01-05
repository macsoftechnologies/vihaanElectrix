import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { userRegisterDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService:  UserService) {}

  @Post('/register') 
  async create(@Body() req: userRegisterDto) {
      try {
          const result = await this.userService.Create(req)
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
  async login(@Body() req:userRegisterDto ) {
      try {
          const result = await this.userService.Login(req)
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }

}


