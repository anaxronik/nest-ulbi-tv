import { Module } from "@nestjs/common";
import { sequelizeConfig } from "src/config/sequelizeConfig";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [sequelizeConfig],
})
export class AppModule {}
