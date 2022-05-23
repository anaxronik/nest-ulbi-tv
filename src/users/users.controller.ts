import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateUserDto } from "./create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.service.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.service.getAllUsers();
  }
}
