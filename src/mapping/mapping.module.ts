import { Module } from '@nestjs/common';
import { MappingService } from './mapping.service';
import { MappingResolver } from './mapping.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandSourceMapping } from '../entity/brandSourceMapping.entity';
import { BrandService } from '../brand/brand.service';
import { SourceService } from '../source/source.service';
import { BrandModule } from '../brand/brand.module';
import { SourceModule } from '../source/source.module';
import { BrandResolver } from '../brand/brand.resolver';
import { SourceResolver } from '../source/source.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([BrandSourceMapping]),
    BrandModule,
    SourceModule,
  ],
  providers: [MappingService, MappingResolver],
})
export class MappingModule {}
