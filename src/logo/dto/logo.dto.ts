import { ApiProperty } from "@nestjs/swagger";

export class logoDto{
    @ApiProperty()
    logoId: string
    @ApiProperty()
    logo: string
}