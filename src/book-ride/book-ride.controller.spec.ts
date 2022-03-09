import { Test, TestingModule } from '@nestjs/testing';
import { BookRideController } from './book-ride.controller';
import { BookRideService } from './book-ride.service';

describe('BookRideController', () => {
  let controller: BookRideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookRideController],
      providers: [BookRideService],
    }).compile();

    controller = module.get<BookRideController>(BookRideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
