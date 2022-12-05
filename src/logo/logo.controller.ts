import { Body, Controller, Get, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { logoDto } from './dto/logo.dto';
import { LogoService } from './logo.service';
import { diskStorage } from 'multer';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}


  @Post('/addLogo')
  @UseInterceptors(
    AnyFilesInterceptor({
        storage: diskStorage({
            destination: './files',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        }),
    }),
)
  async addLogo(@Body() req: logoDto, @UploadedFiles() image) {
    try{
      const add = await this.logoService.addlogo(req, image);
      return add;
    } catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      }
    }
  }

  @Get('/getLogo')
  async getLogo() {
    try{
      const bring = await this.logoService.getlogo();
      return bring;
    } catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      }
    }
  }

}
