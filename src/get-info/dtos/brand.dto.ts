import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BrandOutDto } from './brandout.dto';

@ObjectType()
export class BrandDto extends BrandOutDto {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  image_url: string;

  @Field()
  purchase_link: string;

  @Field()
  company: string; //test

  @Field((type) => Int)
  price: number;
}
