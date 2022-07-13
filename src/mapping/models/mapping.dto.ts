import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MappingDto {
  @Field((type) => Int)
  id: number;

  @Field(() => Int)
  brand_id: number;

  @Field(() => Int)
  source_id: number;
}
