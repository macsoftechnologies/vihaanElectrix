import { ApiProperty } from "@nestjs/swagger"

export class technicianDto{
@ApiProperty()
technicianId:string
 @ApiProperty()
 name:string
@ApiProperty()
email:string
@ApiProperty()
mobileNumber:string

}