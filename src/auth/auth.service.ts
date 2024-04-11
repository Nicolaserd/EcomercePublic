import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UserRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
    constructor(private readonly userRepository:UserRepository){}
    getAuth(){
        return "Todos las Auth";
    }

    async signIn(email:string,password:string){
        //! validar datos
        if(!email || !password){
            return "email and password required"
        }
        // ! Usar Repo user
        // const user = this.userRepository.getUsersByEmail(email)
        // if(!user){
        //     return "user not found"
        // }
        //? Se deberia gregar un token en el return de abajo
        // if(user.password===password){
        //     return "you are loggin :D con token (deberia enviarse)"
        // }
        // return "invalid credentials \-(uwu)-/"
    }
    async singUp(user:Users){
        const userdb = await this.userRepository.getUserByEmail(user.email);
        if(userdb){
            throw new BadRequestException("Email already exist in DB")
        }
        return;

    }
}
