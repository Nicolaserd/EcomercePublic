import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Orders } from "src/entities/orders.entity";
import { Users } from "src/entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository{
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>
  ){}

  async getUser(id:string){
    const user = await this.usersRepository.findOne({
        where: {id},
        relations:{
            orders:true,
        }
    })
    if(!user){
        return"user not found"
    }

    const{password,...userWithoutPassword}=user
    return userWithoutPassword
  }

  async addUser(user:Users): Promise<Partial<Users>>{

    const newUser = await this.usersRepository.save(user)
    const{password,...userWhitoutPassword}=newUser
    return userWhitoutPassword
    
  }

}