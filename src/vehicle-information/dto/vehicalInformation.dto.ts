import { ApiProperty } from "@nestjs/swagger";

export class vehicleInfoDto{
     @ApiProperty()
     vehicleInfoId: string;
    @ApiProperty()
    image: []
   
    @ApiProperty()
    vehicleName: string;

    @ApiProperty()
    capacity: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    eBikes: string;


    @ApiProperty()
    offers: string;

    @ApiProperty()
    trueRange: string;

    @ApiProperty()
    peakPower: string;

    @ApiProperty()
    torque: string;

    @ApiProperty()
    topSpeed: string;

    @ApiProperty()
    chargingTime: string;

    @ApiProperty()
    usableCapacity: string;

    @ApiProperty()
    colors: []
 
}

export class Price{
    @ApiProperty()  
    watts1: string;
    @ApiProperty()
    price1: string;
    @ApiProperty()
    watts2: string;
    @ApiProperty()
    price2: string;
}
