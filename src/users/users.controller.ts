import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
   
   @Get()
   @UseGuards(AuthGuard)
   getUsers(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
    
    return this.userService.getUsers(page, limit);
  }
    @Get(":id")

    getUser(@Param("id") id:string){
        return this.userService.getUser(id)
    }
    @Post()
    addUser(@Body() user:any){
        return this.userService.addUser(user)
    }
    @Put(":id")
    @UseGuards(AuthGuard)
    updateUser(@Param("id") id:string,@Body() user:any){
        return this.userService.updateUser(id,user)
    }
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteUser(@Param("id") id:string){
        return  this.userService.deleteUser(id)
    }
//!Lo mismo para productos

    
}
