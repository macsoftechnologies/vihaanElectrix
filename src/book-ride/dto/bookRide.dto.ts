import { ApiProperty } from "@nestjs/swagger";

export class bookRideDto{
    @ApiProperty()
    rideId: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    aadharNo : string;
    @ApiProperty()
    contactNo: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    area: string;
    @ApiProperty()
    landMark: string;
    @ApiProperty()
    city: string;
   }