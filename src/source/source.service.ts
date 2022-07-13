import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from '../entity/source.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private readonly sourcerepository: Repository<Source>,
  ) {}

  async getAllSources() {
    return await this.sourcerepository.find();
  }

  async getSourceById(id: number) {
    return await this.sourcerepository.findOneBy({ id: id });
  }
}
