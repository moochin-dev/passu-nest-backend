import { Args, Query, Resolver } from '@nestjs/graphql';
import { SourceService } from './source.service';
import { SourceDto } from './models/source.dto';

@Resolver('Source')
export class SourceResolver {
  constructor(private sourceService: SourceService) {}

  @Query(() => [SourceDto])
  async getSources() {
    return await this.sourceService.getAllSources();
  }

  @Query(() => SourceDto)
  async getOneSource(@Args('id') id: number) {
    return await this.sourceService.getSourceById(id);
  }
}
