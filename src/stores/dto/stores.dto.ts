import { ApiProperty } from "@nestjs/swagger"
export class loc{
    
    longitude: string
    latitude: string
}
export class storeDto{
    @ApiProperty()
    storeName: string
    @ApiProperty()
    storeIcon: []
    @ApiProperty()
    location: loc
    @ApiProperty()
    storeImage: []
    @ApiProperty()
    storeId: string
}
