import { Test, TestingModule } from '@nestjs/testing';
import { UploadTypeController } from './upload-type.controller';
import { UploadTypeService } from './upload-type.service';

describe('UploadTypeController', () => {
  let controller: UploadTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadTypeController],
      providers: [UploadTypeService],
    }).compile();

    controller = module.get<UploadTypeController>(UploadTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
