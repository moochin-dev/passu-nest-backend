import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandOutDto {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  image_url: string;

  @Field()
  purchase_link: string;

  @Field()
  company: string;

  @Field()
  released_date: Date;

  @Field((type) => Int)
  price: number;

  @Field()
  sources: sourceInDto[];

  @Field()
  passed: boolean;
}

class sourceInDto {
  id: number;
  name: string;
  address: string;
  tests: testInDto[];
  invalidCount: number;
}

class testInDto {
  id: number;
  date: Date;
  sourceId: number;
}
