import { ApiProperty } from "@nestjs/swagger";

export class brandDto{
    @ApiProperty()
    brandId: string;
    @ApiProperty()
    brandName: string;
    @ApiProperty()
    logo: string;
}