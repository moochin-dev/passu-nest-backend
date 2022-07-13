import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandDto {
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

  @Field((type) => Int)
  price: number;
}
