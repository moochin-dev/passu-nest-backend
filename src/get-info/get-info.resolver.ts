import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GetInfoService } from './get-info.service';
import { Brand } from './entity/brand.entity';
import { Source } from './entity/source.entity';

@Resolver(() => Brand)
export class BrandResolver {
  constructor(private getInfoService: GetInfoService) {}

  @Query(() => [Brand])
  async getAllBrands() {
    return await this.getInfoService.getBrands();
  }

  @Query(() => Brand)
  async getOneBrand(@Args('id') id: number) {
    return await this.getInfoService.getBrandById(id);
  }

  @ResolveField('passed')
  passed(@Parent() parent: Brand) {
    let count = 0;
    for (const source of parent.sources) {
      count += source.tests.length;
    }
    if (count > 0) return false;
    else return true;
  }
}

@Resolver(() => Source)
export class SourceResolver {
  constructor(private getInfoService: GetInfoService) {}

  @ResolveField('invalidCount')
  invalidCount(@Parent() parent: Source) {
    return parent.tests.length;
  }
}
