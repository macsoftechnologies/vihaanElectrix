import { ApiProperty } from "@nestjs/swagger";

export  class vEnergyDto{
    @ApiProperty()
    type: string;
    @ApiProperty()
    location: loc[]
    @ApiProperty()
    vEnergyId: string;
    @ApiProperty()
    ownerName: string;
    @ApiProperty()
    contact: string;
    @ApiProperty()
    aadhar: string;
    @ApiProperty()
    deviceOwnerName: string;
  
    
}
export class loc{
    longititude: string;
    latitude: string
}