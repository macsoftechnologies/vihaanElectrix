import { Test, TestingModule } from '@nestjs/testing';
import { BookRideService } from './book-ride.service';

describe('BookRideService', () => {
  let service: BookRideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookRideService],
    }).compile();

    service = module.get<BookRideService>(BookRideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
