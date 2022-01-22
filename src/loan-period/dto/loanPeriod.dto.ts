import { ApiProperty } from "@nestjs/swagger";

export class loanPeriodDto{
    @ApiProperty()
    id: string
    @ApiProperty()
    loanPeriod: string;
}