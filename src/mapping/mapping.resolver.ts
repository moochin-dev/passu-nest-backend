import { Args, Query, Resolver } from '@nestjs/graphql';
import { SourceDto } from '../source/models/source.dto';
import { MappingService } from './mapping.service';
import { MappingDto } from './models/mapping.dto';

@Resolver('Mapping')
export class MappingResolver {
  constructor(private mappingService: MappingService) {}

  @Query(() => SourceDto)
  async getSourceByBrandId(@Args('id') id: number) {
    return await this.mappingService.getSourceByBrandId(id);
  }
}
