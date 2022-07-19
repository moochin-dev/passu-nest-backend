import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Source } from './source.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('testHistory')
export class TestHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  date: Date;

  @ManyToOne(() => Source, (source) => source.id)
  @Field(() => Source)
  source: Source;
}
