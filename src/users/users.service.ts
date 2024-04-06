import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor (private readonly usersRepository:UserRepository){}
    getUsers(page:number, limit:number){
        return this.usersRepository.getUsers(page, limit);
    }
    getUser(id:string){
        return this.usersRepository.getById(id);
    }
    addUser(user:any){
        return this.usersRepository.addUser(user)
    }
    updateUser(id:string,user:any){
        return this.usersRepository.updateUser(id,user)
    }
    deleteUser(id:string){
        return this.usersRepository.deleteUser(id)
    }

}
