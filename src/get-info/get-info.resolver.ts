import { Query, Resolver } from '@nestjs/graphql';
import { GetInfoService } from './get-info.service';
import { BrandOutput } from './dto/brand.output';

@Resolver(() => BrandOutput)
export class GetInfoResolver {
  constructor(private getInfoService: GetInfoService) {}

  @Query(() => [BrandOutput])
  async getAllBrands() {
    return await this.getInfoService.createOutputBrandList();
  }
}
