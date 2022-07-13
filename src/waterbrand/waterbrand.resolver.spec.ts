import { Test, TestingModule } from '@nestjs/testing';
import { WaterBrandResolver } from './waterbrand.resolver';

describe('WaterBrandResolver', () => {
  let resolver: WaterBrandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterBrandResolver],
    }).compile();

    resolver = module.get<WaterBrandResolver>(WaterBrandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
