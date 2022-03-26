import { ApiProperty } from "@nestjs/swagger";

export class colorDto{
    @ApiProperty()
    colorId: string;
    @ApiProperty()
    vehicleImage: [];
    @ApiProperty()
    colorImage: string;
    @ApiProperty()
    model: string
}