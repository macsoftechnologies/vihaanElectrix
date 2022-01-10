import { ApiProperty } from "@nestjs/swagger"

export class loanDetailsDto{
    @ApiProperty()
    loanPurpose: string
    @ApiProperty()
    period : string
    @ApiProperty()
    payment: string
    @ApiProperty()
    interest: string
    @ApiProperty()
    totalAmt: string 
}