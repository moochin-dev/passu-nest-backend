import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TestHistoryDto {
  @Field((type) => Int)
  id: number;

  @Field()
  date: Date;

  @Field(() => Int)
  source_id: number;
}
