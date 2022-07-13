import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WaterBrand } from './entities/waterbrand.entity';
import { CreateWaterBrandDto } from './dtos/create-brand.dto';
import { WaterbrandService } from './waterbrand.service';
import { WaterBrandInput, WaterBrandInput2, WaterBrandResponse } from '../types/waterbrand';

@Resolver('WaterBrand')
export class WaterBrandResolver {
  constructor(private waterbrandService: WaterbrandService) {}

  @Query()
  async getAllWaterBrand(): Promise<WaterBrand[]> {
    return await this.waterbrandService.findAll();
  }

  @Query()
  async getWaterBrand(@Args('id') id: string): Promise<WaterBrand> {
    return await this.waterbrandService.findOne(id);
  }

  @Mutation()
  async addWaterBrand(
    @Args() waterbrand: WaterBrandInput,
  ): Promise<WaterBrand> {
    return await this.waterbrandService.add(waterbrand);
  }

  @Mutation(() => Boolean)
  async removeWaterBrand(@Args('id') id: string): Promise<Boolean> {
    try {
      await this.waterbrandService.remove(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
