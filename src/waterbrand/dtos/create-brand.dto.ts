import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsDate, IsInt, IsNumber, IsString } from 'class-validator';

@ArgsType()
export class CreateWaterBrandDto {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  image_url: string;

  @Field(() => String)
  @IsString()
  purchase_link: string;

  @Field(() => String)
  @IsString()
  company: string;

  @Field(() => Number)
  @IsNumber()
  price: number;
}
