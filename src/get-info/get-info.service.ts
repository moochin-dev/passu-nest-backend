import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entity/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetInfoService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async getBrands() {
    return this.brandRepository.find({
      relations: ['sources', 'sources.tests'],
    });
  }

  async getBrandById(id: number) {
    return this.brandRepository.findOne({
      where: { id: id },
      relations: ['sources', 'sources.tests'],
    });
  }
}
