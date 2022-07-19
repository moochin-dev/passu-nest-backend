import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestHistory } from './testHistory.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('source')
export class Source extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  address: string;

  @OneToMany(() => TestHistory, (test) => test.source)
  @Field(() => [TestHistory])
  tests: TestHistory[];

  @Field(() => Int)
  invalidCount: number;
}
