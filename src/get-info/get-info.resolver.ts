import { Query, Resolver } from '@nestjs/graphql';
import { GetInfoService } from './get-info.service';
import { BrandOutDto } from './dtos/brandout.dto';

@Resolver('GetInfo')
export class GetInfoResolver {
  constructor(private getInfoService: GetInfoService) {}

  @Query(() => [BrandOutDto])
  async getAllBrands() {
    return await this.getInfoService.createOutputBrandList();
  }
}
