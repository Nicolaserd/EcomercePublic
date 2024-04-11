import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
   
    @Get()
    @UseGuards(AuthGuard)
    getUsers(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
        
        return this.userService.getUsers(page, limit);
    }
    @Get(":id")

    getUser(@Param("id",ParseUUIDPipe) id:string){
        return this.userService.getUser(id)
    }
    //!Post de usuario sustituido por POST /Auth/singup
    @Post()
    addUser(@Body() user:CreateUserDto){
        // return this.userService.addUser(user)
    }
    @Put(":id")
    @UseGuards(AuthGuard)
    updateUser(@Param("id",ParseUUIDPipe) id:string,@Body() user:any){
        return this.userService.updateUser(id,user)
    }
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteUser(@Param("id",ParseUUIDPipe) id:string){
        return  this.userService.deleteUser(id)
    }
    @Get(":email")
    @UseGuards(AuthGuard)
    getUserByEmail(@Param("email") email:string){
        return  this.userService.getUserByEmail(email)
    }

    //!Lo mismo para productos

    
}
