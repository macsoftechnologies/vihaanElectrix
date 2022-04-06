import { Test, TestingModule } from '@nestjs/testing';
import { ColorMappingController } from './color-mapping.controller';
import { ColorMappingService } from './color-mapping.service';

describe('ColorMappingController', () => {
  let controller: ColorMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorMappingController],
      providers: [ColorMappingService],
    }).compile();

    controller = module.get<ColorMappingController>(ColorMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
