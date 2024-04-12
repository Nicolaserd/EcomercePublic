import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Products } from './products.entity';

@Entity({
  name: 'CATEGORIES',
})
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => Products, (product) => product.category)
  @JoinColumn()
  products: Products[];
}
