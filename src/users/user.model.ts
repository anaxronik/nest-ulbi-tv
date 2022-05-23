import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: "ID",
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "email@email.com",
    description: "email value",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  email: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @ApiProperty()
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}
