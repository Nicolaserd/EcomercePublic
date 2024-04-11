import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UserRepository } from 'src/users/users.repository';
import {JwtService} from  "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository:UserRepository,
        private readonly jwtService:JwtService
    ){}
    getAuth(){
        return "Todos las Auth";
    }

    async signIn(email:string,password:string){

        const userdb = await this.userRepository.getUserByEmail(email);
        if(!userdb){
            throw new BadRequestException("Invalid credentials")
        }
        if(userdb.password!==password){
            throw new BadRequestException("invalid credentials \-(uwu)-/")

        }

        const userPayload = {
            sub:userdb.id,
            id:userdb.id,
            email:userdb.email
        }

        const token = this.jwtService.sign(userPayload);

        return {success:"user logged in successfully",token}


        
    }

    async singUp(user:Users){
        const userdb = await this.userRepository.getUserByEmail(user.email);
        if(userdb){
            throw new BadRequestException("Email already exist in DB")
        }
       
        return;

    }
}
