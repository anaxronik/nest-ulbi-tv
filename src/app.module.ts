import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import moduleConfig from "./config/moduleConfig";
import sequelizeConfig from "./config/sequelizeConfig";

import { UsersModule } from "./users/users.module";

@Module({
  controllers: [],
  providers: [],
  imports: [moduleConfig, sequelizeConfig, UsersModule],
})
export class AppModule {}
