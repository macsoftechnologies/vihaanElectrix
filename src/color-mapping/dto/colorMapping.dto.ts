import { ApiProduces, ApiProperty } from '@nestjs/swagger';

export class colorMappingDto {
  @ApiProperty()
  vehicleId: string;
  @ApiProperty()
  vehicleImage: string;
  @ApiProperty()
  colorImage: string;
  @ApiProperty()
  colorId: string;
  @ApiProperty()
  color: string;
}
