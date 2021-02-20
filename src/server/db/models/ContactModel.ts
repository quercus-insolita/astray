import { DataTypes, Sequelize } from 'sequelize'
import { Contact } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { ProjectModelsStore } from '../store'

export interface IContactModel extends IBaseModel, Contact {}

export interface IContactModelConstructor extends IBaseModelConstructor {
  new (): ContactModel
}

export class ContactModel extends BaseModel implements IContactModel {
  public name!: string
  public email!: string
  public phone!: string
  public telegram!: string
  public facebook!: string
  public viber!: string

  static initModel(sequelize: Sequelize) {
    super.initModelInternal<ContactModel>(
      {
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'isNotEmail',
            },
          },
        },
        phone: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        telegram: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        facebook: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        viber: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
      },
      {
        tableName: 'contacts',
        sequelize
      },
    )  
  }
}
