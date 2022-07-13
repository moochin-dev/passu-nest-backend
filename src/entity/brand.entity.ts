import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brand')
export class Brand extends BaseEntity {
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
  price: number;
}
