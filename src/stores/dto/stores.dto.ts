import { ApiProperty } from '@nestjs/swagger';
// export class loc{

//     longitude: string
//     latitude: string
// }
export class storeDto {
  @ApiProperty()
  storeName: string;
  @ApiProperty()
  storeIcon: [];
  @ApiProperty()
  longitude: string;
  @ApiProperty()
  latitude: string;
  @ApiProperty()
  storeImage: [];
  @ApiProperty()
  storeId: string;
  @ApiProperty()
  storeClose: string;
  @ApiProperty()
  storeOpen: string;
}
