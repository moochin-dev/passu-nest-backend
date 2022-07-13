import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandResolver } from './brand.resolver';
import { Brand } from '../entity/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandService, BrandResolver],
  exports: [BrandService],
})
export class BrandModule {}
