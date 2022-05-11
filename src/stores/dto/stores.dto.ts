import { ApiProperty } from "@nestjs/swagger"
export class loc{
    
    longitude: string
    latitude: string
}
export class storeDto{
    @ApiProperty()
    storeName: string
    @ApiProperty()
    storeIcon: string
    @ApiProperty()
    location: loc
    @ApiProperty()
    storeImage: string  
    @ApiProperty()
    storeId: string
}
