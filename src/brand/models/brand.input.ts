import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InputBrand {
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