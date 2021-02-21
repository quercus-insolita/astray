import { DataTypes, Sequelize } from 'sequelize'
import { User } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { Models } from '..'
import { ValidationErrorMessage } from '../../common/constants'

export interface IUserModel extends IBaseModel, User {}

export interface IUserModelConstructor extends IBaseModelConstructor {
  new (): UserModel
}

export class UserModel extends BaseModel implements IUserModel {
  public name!: string
  public email!: string
  public password!: string

  static associate(models: Models) {
    UserModel.hasMany(models.Report, { foreignKey: 'userId' })
  }
}

UserModel.initModel<UserModel>(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        name: 'email',
        msg: ValidationErrorMessage.NOT_UNIQUE,
      },
      validate: {
        isEmail: {
          msg: ValidationErrorMessage.NOT_EMAIL,
        },
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
  },
)
