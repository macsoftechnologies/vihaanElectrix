import { ApiProperty } from "@nestjs/swagger";

export class vehicleDto{
    @ApiProperty({type: String, default: ''})
    vehicleName: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    offers: string;

    @ApiProperty()
    capacity: string;

    @ApiProperty()
    image: []
    
}


