import { ApiProperty } from '@nestjs/swagger';
export class spec {
  @ApiProperty()
  key: string;
  @ApiProperty()
  value: string;
}
export class colorMappingSpecsDto {
  @ApiProperty()
  vehicleId: string;
  @ApiProperty()
  vehicleName: string;
  @ApiProperty()
  amount: string;
  @ApiProperty()
  model: string;
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
  rim: string;
  @ApiProperty()
  gradeablity: string;
  @ApiProperty()
  storage: string;
  @ApiProperty()
  security: string;
  @ApiProperty()
  ladiesFootrest: string;
  @ApiProperty()
  vehicleImage: string;
  @ApiProperty()
  reflector: string;
  @ApiProperty()
  brandName: string;
  @ApiProperty()
  specsImage: string;
  @ApiProperty()
  speed: string;
  @ApiProperty()
  range: string;
  @ApiProperty()
  chargingTime: string;
  @ApiProperty()
  loadCapacity: string;
  @ApiProperty()
  batteryType: string;
  @ApiProperty()
  motorType: string;
  @ApiProperty()
  batteryCapacity: string;
  @ApiProperty()
  motorCapacity: string;
  @ApiProperty()
  specs: spec[];
  @ApiProperty()
  wheelSize: string;
  @ApiProperty()
  batteryWarranty: string;
  @ApiProperty()
  motorWarranty: string;
  @ApiProperty()
  licenseRegistration: string;
}

export class properties {
  colorProperty: [
    {
      color: string;
      image: string;
      colorId: string;
      model: string;
    },
  ];
}
