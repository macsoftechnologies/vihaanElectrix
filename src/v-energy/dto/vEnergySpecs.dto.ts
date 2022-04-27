import { ApiProperty } from "@nestjs/swagger";

export  class vEnergySpecsDto{
    @ApiProperty()
    chargerId: string
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
    @ApiProperty()
    powerSpecifications: string
}