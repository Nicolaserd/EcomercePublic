import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Orders } from './orders.entity';

@Entity({
    name:"USERS"
})
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ 
    length: 50,
    type:"varchar",
    nullable:false
})
  name: string;

  @Column({ 
    length: 50, 
    unique: true,
    type:"varchar",
    nullable:false 
})
  email: string;

  @Column({ 
    length: 20,
    type:"varchar",
    nullable:false
})
  password: string;

  @Column({ 
    type:"int",
    nullable: true
})
  phone: number;

  @Column({ 
    nullable: true, 
    length: 50
})
  country: string;

  @Column({ 
    nullable: true 
})
  address: string;

  @Column({ 
    nullable: true, 
    length: 50 
})
  city: string;

  @OneToMany(() => Orders, order => order.user)
  @JoinColumn({name:"orders_id"})
  orders: Orders[];
}