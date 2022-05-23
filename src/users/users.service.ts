import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";

import { CreateUserDto } from "./create-user.dto";
import { UserModel } from "./user.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private userRepository: typeof UserModel,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.findOne("user");
    await user.$set("roles", [role.id]);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: { all: true },
    });
    return users;
  }
}
