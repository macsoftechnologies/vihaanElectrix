import { ApiProperty } from "@nestjs/swagger";

export class evservicedto {
    @ApiProperty()
    evserviceId:string
    @ApiProperty()
    vehicle:string
    @ApiProperty()
    date:string
    @ApiProperty()
    BookingStatus:string

}