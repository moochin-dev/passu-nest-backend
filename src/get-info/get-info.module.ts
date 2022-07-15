import { Module } from '@nestjs/common';
import { GetInfoResolver } from './get-info.resolver';
import { GetInfoService } from './get-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from '../entities/brand.entity';
import { SourceEntity } from '../entities/source.entity';
import { TestHistoryEntity } from '../entities/testHistory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BrandEntity, SourceEntity, TestHistoryEntity]),
  ],
  providers: [GetInfoResolver, GetInfoService],
})
export class GetInfoModule {}
