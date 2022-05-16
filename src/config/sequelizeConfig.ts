import { SequelizeModule } from "@nestjs/sequelize";

export const sequelizeConfig = SequelizeModule.forRoot({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "nest-ulbi",
  models: [],
  autoLoadModels: true,
});
