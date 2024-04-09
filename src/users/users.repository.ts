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

  async getUsers(page:number,limit:number):Promise<Partial<Users>[]>{
    let users = await this.usersRepository.find();
    const start = (page-1)*limit;
    const end = start + + limit;
    users = users.slice(start,end);
    return users.map(({password,...user})=>user)
  }

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

  async updateUser(id:string,user:Users){
    await this.usersRepository.update(id,user);
    const updateUser = await this.usersRepository.findOneBy({id});
    const {password,...userWithoutPassword} =updateUser;
    return userWithoutPassword
  }

  async deleteUser(id:string): Promise<Partial<Users>>{
    const user = await this.usersRepository.findOneBy({id});
    this.usersRepository.remove(user);
    const{password,...userWithoutPassword} = user;
    return userWithoutPassword;

  }

  async getUserByEmail(email:string):Promise<Users>{
    return await this.usersRepository.findOneBy({email})
  }

}