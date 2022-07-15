import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from '../entities/brand.entity';
import { Repository } from 'typeorm';
import { SourceEntity } from '../entities/source.entity';
// import { BrandSourceMappingEntity } from '../../brandSourceMapping.entity';
import { TestHistoryEntity } from '../entities/testHistory.entity';

@Injectable()
export class GetInfoService {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly brandRepository: Repository<BrandEntity>,
    @InjectRepository(SourceEntity)
    private readonly sourceRepository: Repository<SourceEntity>,
    @InjectRepository(TestHistoryEntity)
    private readonly testHistoryRepository: Repository<TestHistoryEntity>,
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
      for (const source of rtList[i].sources) {
        source.invalidCount = source.tests.length;
        cntForPassed += source.tests.length;
        console.log(source);
      }
      if (cntForPassed > 0) {
        rtList[i].passed = false;
      } else {
        rtList[i].passed = true;
      }
    }

    return rtList;

    // const rtList2 = rtList.map(async (item) => {
    //   return {
    //     ...item,
    //     source: {
    //       ...(await this.findSourceByBrandId(item.id)),
    //       invalidCount: 0,
    //     },
    //     passed: true,
    //   };
    // });
    //
    // for (const item of rtList2) {
    //   console.log();
    //   const itemSourceID: number = item.source.id;
    //
    //   const count: number = await this.testHistoryRepository.countBy({
    //     source_id: itemSourceID,
    //   });
    //   item.source.invalidCount = count;
    //   if (count > 0) {
    //     item.passed = false;
    //   } else {
    //     item.passed = true;
    //   }
    // }
    //
    // return rtList2;
  }
}
