import { DataTypes, Sequelize } from 'sequelize'
import { User } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { ProjectModelsStore } from '../store'
import { ValidationErrorMessage } from '../../common/constants'

export interface IUserModel extends IBaseModel, User {}

export interface IUserModelConstructor extends IBaseModelConstructor {
  new (): UserModel
}

export class UserModel extends BaseModel implements IUserModel {
  public email!: string
  public password!: string

  static associate(models: ProjectModelsStore) {
    this.hasMany(models.Report, { foreignKey: 'userId' })
  }

  static initModel(sequelize: Sequelize) {
    super.initModelInternal<UserModel>(
      {
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          validate: {
            isEmail: {
              msg: ValidationErrorMessage.NOT_EMAIL,
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            min: {
              args: [5],
              msg: ValidationErrorMessage.TOO_SHORT,
            },
            max: {
              args: [20],
              msg: ValidationErrorMessage.TOO_LONG,
            }
          },
        },
      },
      {
        tableName: 'users',
        sequelize
      },
    )  
  }
}
