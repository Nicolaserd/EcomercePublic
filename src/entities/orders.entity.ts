import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { OrderDetails } from './orderdetails.entity';

@Entity({
    name:"ORDERS"
})
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => Users, user => user.orders)
  @JoinColumn({name:"user_id"})
  user: Users; 

  @OneToOne(() => OrderDetails, orderDetail => orderDetail.order)
  orderDetails: OrderDetails;
}
