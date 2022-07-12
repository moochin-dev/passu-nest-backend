import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsInt } from "class-validator";

@ArgsType()
export class CreateBrandDto {
    @Field(() => Int)
    @IsInt()
    id: number;

    @Field(() => string)
    @
}