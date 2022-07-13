import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsDate, IsInt, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class WaterBrand {
  @Field(() => String, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  image_url: string;

  @Field(() => String)
  @Column()
  purchase_link: string;

  @Field(() => String)
  @Column()
  company: string;

  @Field(() => Int)
  @Column()
  price: number;
}
