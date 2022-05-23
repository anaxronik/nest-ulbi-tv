import { Module } from "@nestjs/common";

import moduleConfig from "./config/moduleConfig";
import sequelizeConfig from "./config/sequelizeConfig";
import { RolesModule } from "./roles/roles.module";
import { UserRolesModel } from "./roles/user-roles.model";
import { UsersModule } from "./users/users.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    moduleConfig,
    sequelizeConfig,
    UsersModule,
    RolesModule,
    UserRolesModel,
  ],
})
export class AppModule {}
