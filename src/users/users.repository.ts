import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async getUsers(page: number, limit: number): Promise<Partial<Users>[]> {
    let users = await this.usersRepository.find();
    const start = (page - 1) * limit;
    const end = start + +limit;
    users = users.slice(start, end);
    return users.map(({ password, isAdmin, ...user }) => user);
  }

  async getUser(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const {password, isAdmin,...userWhitoutPasswordandAdmin } = user;
    return userWhitoutPasswordandAdmin;
  }

  async addUser(user: Partial<Users>): Promise<Partial<Users>> {
    const newUser = await this.usersRepository.save(user);
    const { password, isAdmin,...userWhitoutPasswordandAdmin } = newUser;
    return userWhitoutPasswordandAdmin;
  }

  async updateUser(id: string, user: Users) {
    await this.usersRepository.update(id, user);
    const updateUser = await this.usersRepository.findOneBy({ id });
    const { password, isAdmin,...userWhitoutPasswordandAdmin  } = updateUser;
    return userWhitoutPasswordandAdmin;
  }

  async deleteUser(id: string): Promise<Partial<Users>> {
    const user = await this.usersRepository.findOneBy({ id });
    this.usersRepository.remove(user);
    const {  password, isAdmin,...userWhitoutPasswordandAdmin } = user;
    return userWhitoutPasswordandAdmin;
  }

  async getUserByEmail(email: string): Promise<Partial<Users>> {
    const user = await this.usersRepository.findOneBy({ email });
    if(!user){
      return null
    }
    const {   isAdmin,...userWhitoutPasswordandAdmin } = user;
    return userWhitoutPasswordandAdmin;
  }
}
