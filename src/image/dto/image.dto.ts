import { ApiProperty } from '@nestjs/swagger';

export class imageDto {
  @ApiProperty()
  image: string;
  @ApiProperty()
  imageId: string;
  @ApiProperty()
  url: string;
}
