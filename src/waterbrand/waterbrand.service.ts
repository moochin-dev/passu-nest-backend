import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterBrand } from './entities/waterbrand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WaterbrandService {
  constructor(
    @InjectRepository(WaterBrand)
    private WaterBrandRepository: Repository<WaterBrand>,
  ) {}

  findAll(): Promise<WaterBrand[]> {
    return this.WaterBrandRepository.find();
  }

  findOne(id: string): Promise<WaterBrand> {
    return this.WaterBrandRepository.findOneBy({ id });
  }

  async add(WaterBrand: WaterBrand): Promise<WaterBrand> {
    return await this.WaterBrandRepository.save(WaterBrand);
  }

  async remove(id: string): Promise<void> {
    await this.WaterBrandRepository.delete(id);
  }
}
