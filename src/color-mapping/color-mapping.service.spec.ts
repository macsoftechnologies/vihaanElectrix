import { Test, TestingModule } from '@nestjs/testing';
import { ColorMappingService } from './color-mapping.service';

describe('ColorMappingService', () => {
  let service: ColorMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorMappingService],
    }).compile();

    service = module.get<ColorMappingService>(ColorMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
