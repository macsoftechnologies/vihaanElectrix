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
    @ApiProperty()
    vehicleId: string
    @ApiProperty()
    vehicleName: string;
    @ApiProperty()
    amount: string
    @ApiProperty()
    tyre: string;
    @ApiProperty()
    motor: string;
    @ApiProperty()
    controller: string;
    @ApiProperty()
    battery: string;
    @ApiProperty()
    batteryCasing: string;
    @ApiProperty()
    cells: string;
    @ApiProperty()
    bms: string;
    @ApiProperty()
    chargerOutput: string;
    @ApiProperty()
    externalChargingPort: string;
    @ApiProperty()
    brake: string;
    @ApiProperty()
    regenerativeBraking: string;
    @ApiProperty()
    display: string;
    @ApiProperty()
    headLamp: string;
    @ApiProperty()
    refelector: string;
    @ApiProperty()
    blinkers: string;
    @ApiProperty()
    brakeLights: string;
    @ApiProperty()
    mudGuards: string;
    @ApiProperty()
    seat: string;
    @ApiProperty()
    throttle: string;
    @ApiProperty()
    gradeablity: string;
    @ApiProperty()
    storage: string;
    @ApiProperty()
    security: string;
    @ApiProperty()
    ladiesFootrest: string
}