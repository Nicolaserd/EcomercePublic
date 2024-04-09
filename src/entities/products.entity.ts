import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Categories } from './categories.entity';
import { OrderDetails } from './orderdetails.entity';

@Entity(
    {
        name:"PRODUCTS"
    }
)
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ 
    length: 50,
    unique:true,
    nullable:false,
    type:"varchar"
})
  name: string;

  @Column({
    nullable:false,
    type:"text"
  })
  description: string;

  @Column({
    nullable:false,
    type:"decimal",
    precision:10,
    scale:2

    })
  price: number;

  @Column({
    type: "int",
    nullable:false
  })
  stock: number;

  @Column({ 
    nullable: true,
    type:"text"
  })
  imgUrl: string;

  @ManyToOne(() => Categories, (category) => category.products)
  @JoinColumn({name:"category_id"})
  category: Categories;

  @ManyToMany(() => OrderDetails, orderDetail => orderDetail.products)
  orderDetails: OrderDetails[];
}
