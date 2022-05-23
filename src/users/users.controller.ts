import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreateUserDto } from "./create-user.dto";
import { UserModel } from "./user.model";
import { UsersService } from "./users.service";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @ApiOperation({
    summary: "Create user",
  })
  @ApiResponse({
    status: 200,
    type: UserModel,
  })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.service.createUser(userDto);
  }

  @ApiOperation({
    summary: "Get all users",
  })
  @ApiResponse({
    status: 200,
    type: [UserModel],
  })
  @Get()
  getAll() {
    return this.service.getAllUsers();
  }
}
