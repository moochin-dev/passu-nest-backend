import { Module } from '@nestjs/common';
import { WaterBrandResolver } from './waterbrand.resolver';
import { WaterbrandService } from './waterbrand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterBrand } from './entities/waterbrand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WaterBrand])],
  providers: [WaterBrandResolver, WaterbrandService]
})
export class WaterbrandModule {}
