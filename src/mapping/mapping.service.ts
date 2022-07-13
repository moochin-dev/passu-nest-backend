import { Inject, Injectable } from '@nestjs/common';
import { BrandService } from '../brand/brand.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandSourceMapping } from '../entity/brandSourceMapping.entity';
import { Repository } from 'typeorm';
import { MappingDto } from './models/mapping.dto';
import { SourceService } from '../source/source.service';

@Injectable()
export class MappingService {
  constructor(
    @InjectRepository(BrandSourceMapping)
    private readonly mappingRepository: Repository<BrandSourceMapping>,
  ) {}

  async getSourceByBrandId(brandId: number) {
    const mapping: MappingDto = await this.mappingRepository.findOneBy({
      brand_id: brandId,
    });

    return mapping;
  }
}
