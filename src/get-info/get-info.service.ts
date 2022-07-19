import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entity/brand.entity';
import { Repository } from 'typeorm';
import { Source } from './entity/source.entity';
import { TestHistory } from './entity/testHistory.entity';

@Injectable()
export class GetInfoService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
    @InjectRepository(TestHistory)
    private readonly testHistoryRepository: Repository<TestHistory>,
  ) {}

  async createOutputBrandList() {
    const rtList = [];
    const putList = await this.brandRepository.find({
      relations: ['sources', 'sources.tests'],
    });

    const lenOfList: number = putList.length;

    for (let i = 0; i < lenOfList; i++) {
      let cntForPassed = 0;
      rtList.push({});
      rtList[i] = Object.assign(rtList[i], putList[i]);
      rtList[i].sources = rtList[i].sources.map((entity) => {
        return { ...entity };
      });
      for (const source of rtList[i].sources) {
        source.invalidCount = source.tests.length;
        cntForPassed += source.tests.length;
        source.tests = source.tests.map((test) => {
          return { ...test };
        });
        // console.log(source);
      }
      if (cntForPassed > 0) {
        rtList[i].passed = false;
      } else {
        rtList[i].passed = true;
      }
    }
    return rtList;
  }
}
