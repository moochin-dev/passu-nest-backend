import { Test, TestingModule } from '@nestjs/testing';
import { WaterbrandResolver } from './waterbrand.resolver';

describe('WaterbrandResolver', () => {
  let resolver: WaterbrandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterbrandResolver],
    }).compile();

    resolver = module.get<WaterbrandResolver>(WaterbrandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
