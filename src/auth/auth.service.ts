import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UserRepository } from 'src/users/users.repository';
import {JwtService} from  "@nestjs/jwt";
import * as bcrypt from "bcrypt"



@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository:UserRepository,
        private readonly jwtService:JwtService
    ){}
   

    async signIn(email:string,password:string){

        const userdb = await this.userRepository.getUserByEmail(email);
        if(!userdb){
            throw new BadRequestException("Invalid credentials\-(uwu)-/")
        }

        const passwordMatch = await bcrypt.compare(password, userdb.password)

        if (!passwordMatch) {
       
            throw new BadRequestException("Invalid credentials\-(uwu)-/")
        }
      

        const userPayload = {
            sub:userdb.id,
            id:userdb.id,
            email:userdb.email
        }

        const token = this.jwtService.sign(userPayload);

        return {success:"user logged in successfully",token}


        
    }

    async singUp(user:any){
      
        if(!user){
           
            throw new BadRequestException("Invalid user")
        }
        const userdb = await this.userRepository.getUserByEmail(user.email);
        if(userdb){
            throw new BadRequestException("Email already exist in DB")
        }

        if (user.password !== user.confirmPassword) {
            throw new BadRequestException('Passwords do not match');
          }
       
          const { confirmPassword, ...userData } = user;
          const {password, ...userwhitoutpassword}=userData
          const hashedPassword = await bcrypt.hash(password,10)
          const finalUser={
            ... userwhitoutpassword,
            password:hashedPassword,
          }
          const userWithoutPassword = await this.userRepository.addUser( finalUser);


          return userWithoutPassword;


    }
}
