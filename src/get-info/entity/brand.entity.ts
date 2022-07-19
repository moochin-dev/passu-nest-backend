import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Source } from './source.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('brand')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  image_url: string;

  @Column()
  @Field()
  purchase_link: string;

  @Column()
  @Field()
  company: string;

  @Column()
  @Field()
  released_date: Date;

  @ManyToMany(() => Source)
  @JoinTable({
    name: 'brandSourceMapping',
  })
  @Field(() => [Source])
  sources: Source[];

  @Column()
  @Field()
  price: number;
}
