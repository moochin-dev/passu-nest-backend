import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SourceDto {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;
}
