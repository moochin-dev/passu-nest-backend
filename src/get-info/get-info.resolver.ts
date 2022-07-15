import { Query, Resolver } from '@nestjs/graphql';
import { GetInfoService } from './get-info.service';

@Resolver('GetInfo')
export class GetInfoResolver {
  constructor(private getInfoService: GetInfoService) {}

  @Query(() => Boolean)
  async getAllBrands() {
    await this.getInfoService.createOutputBrandList();
    return true;
  }
}
