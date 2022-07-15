import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestHistoryEntity } from './testHistory.entity';

@Entity('source')
export class SourceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => TestHistoryEntity, (test) => test.source)
  tests: TestHistoryEntity[];
}
