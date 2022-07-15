import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SourceEntity } from './source.entity';

@Entity('testHistory')
export class TestHistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @RelationId((testHistory: TestHistoryEntity) => testHistory.source)
  sourceId: number;
  @ManyToOne(() => SourceEntity, (source) => source.id)
  source: SourceEntity;
}
