import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brandSourceMapping')
export class BrandSourceMappingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_id: number;

  @Column()
  source_id: number;
}
