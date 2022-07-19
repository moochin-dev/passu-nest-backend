import { Module } from '@nestjs/common';
import { BrandResolver, SourceResolver } from './get-info.resolver';
import { GetInfoService } from './get-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entity/brand.entity';
import { Source } from './entity/source.entity';
import { TestHistory } from './entity/testHistory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, Source, TestHistory])],
  providers: [BrandResolver, SourceResolver, GetInfoService],
})
export class GetInfoModule {}
