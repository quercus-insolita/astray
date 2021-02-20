import { DataTypes, Sequelize } from 'sequelize'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { ProjectModelsStore } from '../store'
const Maintenance = {} as IBaseModel & IBaseModelConstructor
const Contribution = {} as IBaseModel & IBaseModelConstructor
type User = {}

export interface IUserModel extends IBaseModel, User {}

export interface IUserModelConstructor extends IBaseModelConstructor {
  new (): UserModel
}

export class UserModel extends BaseModel implements IUserModel {
  public name?: string
  public email!: string
  public username!: string
  public password!: string
  public status?: string
  public guildId?: number

  static associate(models: ProjectModelsStore) {
    this.hasMany(models.Device, { foreignKey: 'userId' })
    this.hasMany(models.Event, { foreignKey: 'userId' })
    this.associations.Product = this.belongsTo(models.Product, {
      foreignKey: 'productId',
    })
    this.belongsToMany(models.OpenSourceProject, {
      through: Maintenance,
      foreignKey: 'maintainerId',
      otherKey: 'projectId',
    })
    this.belongsToMany(models.OpenSourceProject, {
      through: Contribution,
      foreignKey: 'contributorId',
      otherKey: 'projectId',
    })
  }
}

export const initUserModel = (sequelize: Sequelize) => {
  UserModel.initModel<UserModel>(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: 'isNotEmail',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      guildId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      tableName: 'users',
      sequelize
    },
  )  
}
