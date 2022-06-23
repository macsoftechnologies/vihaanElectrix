import { ApiProperty } from "@nestjs/swagger";

export class loc{
    longitude: string;
    latitude: string
}
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
    @ApiProperty()
    longitude: string;
    @ApiProperty()
    latitude: string
    @ApiProperty()
    location: loc
}
