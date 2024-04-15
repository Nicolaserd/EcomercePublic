import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { Users } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}
  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
  getUser(id: string) {
    return this.usersRepository.getUser(id);
  }
  addUser(user: Users) {
    return this.usersRepository.addUser(user);
  }
  updateUser(id: string, user: any) {
    return this.usersRepository.updateUser(id, user);
  }
  deleteUser(id: string) {
    return this.usersRepository.deleteUser(id);
  }
  getUserByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }
}
