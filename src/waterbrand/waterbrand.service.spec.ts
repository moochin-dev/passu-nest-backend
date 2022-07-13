import { Test, TestingModule } from '@nestjs/testing';
import { WaterbrandService } from './waterbrand.service';

describe('WaterbrandService', () => {
  let service: WaterbrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterbrandService],
    }).compile();

    service = module.get<WaterbrandService>(WaterbrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
