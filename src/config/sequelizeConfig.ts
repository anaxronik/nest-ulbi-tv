import { SequelizeModule } from "@nestjs/sequelize";
import { RoleModel } from "src/roles/role.model";
import { UserRolesModel } from "src/roles/user-roles.model";
import { UserModel } from "src/users/user.model";

export default SequelizeModule.forRoot({
  dialect: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [UserModel, RoleModel, UserRolesModel],
  autoLoadModels: true,
});
