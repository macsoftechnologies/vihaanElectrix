import { Test, TestingModule } from '@nestjs/testing';
import { UploadTypeService } from './upload-type.service';

describe('UploadTypeService', () => {
  let service: UploadTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadTypeService],
    }).compile();

    service = module.get<UploadTypeService>(UploadTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
