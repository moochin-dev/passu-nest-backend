import { Query, Resolver } from '@nestjs/graphql';
import { GetInfoService } from './get-info.service';
import { BrandDto } from '../brand/models/brand.dto';

@Resolver('GetInfo')
export class GetInfoResolver {
  constructor(private getInfoService: GetInfoService) {}

  @Query(() => [BrandDto])
}
