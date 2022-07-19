import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandOutput {
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

  @Field(() => [sourceObject])
  sources: sourceObject[];

  @Field()
  passed: boolean;
}
@ObjectType()
export class sourceObject {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [testObject])
  tests: testObject[];

  @Field(() => Int)
  invalidCount: number;
}

@ObjectType()
export class testObject {
  @Field()
  id: number;

  @Field()
  date: Date;

  @Field()
  sourceId: number;
}
