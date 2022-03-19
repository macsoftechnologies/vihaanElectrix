import { ApiProperty } from "@nestjs/swagger";

export  class vEnergySpecsDto{
    @ApiProperty()
    networkSpecifications: []
    @ApiProperty()
    chargerStatusDetails: []
    @ApiProperty()
    environmentStatus: []
    @ApiProperty()
    otherSpecifications: []
    @ApiProperty()
    chargerImage: string;
}