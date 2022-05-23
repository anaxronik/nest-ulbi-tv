import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreateRoleDto } from "./dto/create-role.dto";
import { RoleModel } from "./role.model";
import { RolesService } from "./roles.service";

@ApiTags("roles")
@Controller("roles")
export class RolesController {
  constructor(
    private readonly rolesService: RolesService
  ) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiResponse({
    status: 200,
    type: [RoleModel],
  })
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":value")
  findOne(@Param("value") value: string) {
    return this.rolesService.findOne(value);
  }
}
