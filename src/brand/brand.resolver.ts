import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BrandDto } from './models/brand.dto';
import { BrandService } from './brand.service';
import { InputBrand } from './models/brand.input';

@Resolver('Brand')
export class BrandResolver {
  constructor(private brandService: BrandService) {}

  @Query(() => [BrandDto])
  async getBrands() {
    return await this.brandService.getAllBrands();
  }

  @Mutation(() => BrandDto)
  async createBrand(@Args('data') data: InputBrand) {
    console.log(data);
    return await this.brandService.createBrand(data);
  }
}
