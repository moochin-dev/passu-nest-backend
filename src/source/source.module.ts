import { Module } from '@nestjs/common';
import { SourceResolver } from './source.resolver';
import { SourceService } from './source.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Source } from '../entity/source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  providers: [SourceResolver, SourceService],
  exports: [],
})
export class SourceModule {}
