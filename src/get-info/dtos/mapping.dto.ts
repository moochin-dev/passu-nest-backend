import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MappingDto {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  brand_id: number;

  @Field((type) => Int)
  source_id: number;
}
