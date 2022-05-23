import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CreateRoleDto } from "./dto/create-role.dto";
import { RoleModel } from "./role.model";

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RoleModel)
    private roleRepository: typeof RoleModel
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.create(
      createRoleDto
    );
    return role;
  }

  async findAll() {
    return this.roleRepository.findAll();
  }

  async findOne(value: string) {
    return await this.roleRepository.findOne({
      where: {
        value,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
