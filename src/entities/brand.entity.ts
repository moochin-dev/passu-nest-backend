import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SourceEntity } from './source.entity';

@Entity('brand')
export class BrandEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  purchase_link: string;

  @Column()
  company: string;

  @Column()
  released_date: Date;

  @ManyToMany(() => SourceEntity)
  @JoinTable({
    name: 'brandSourceMapping',
  })
  sources: SourceEntity[];

  @Column()
  price: number;
}
