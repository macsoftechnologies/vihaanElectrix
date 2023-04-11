import { ApiProperty } from "@nestjs/swagger";
export class Locs{
    @ApiProperty()
    longitude:string
    @ApiProperty()
    latitude:string

}
export class roadsideAssistanceDto {
    @ApiProperty()
    roadsideassistanceId:string
    @ApiProperty()
    name:string
    @ApiProperty()
    phNumber:string
    @ApiProperty()
    location:Locs[]
}
