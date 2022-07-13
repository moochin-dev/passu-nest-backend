import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '../entity/brand.entity';
import { Repository } from 'typeorm';
import { BrandDto } from './models/brand.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async createBrand(data: BrandDto) {
    return await this.brandRepository.create(data).save();
  }

  async getAllBrands() {
    return await this.brandRepository.find();
  }
}
