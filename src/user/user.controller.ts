import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { userRegisterDto } from './dto/user.dto';
import { UserService } from './user.service';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService:  UserService) {}

  @Post('/register') 
  
  @ApiCreatedResponse({ description: 'user details has been added successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' }) 
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
  
  @ApiCreatedResponse({ description: 'user details has been added successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' }) 
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

  @Get('/listOfUsers')
  
  @ApiCreatedResponse({ description: 'user details has been fetched successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' }) 
  async listOfUsers() {
      console.log()
      try {
          const response = await this.userService.usersList()
          return response
      } catch (error) {
          return {
              StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
              Message : error
          }
      }
  }

}


