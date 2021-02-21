import { DataTypes } from 'sequelize'
import { Contact } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { Models } from '..'
import { ValidationErrorMessage } from '../../common/constants'

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

  static associate(models: Models) {
    ContactModel.associations.Report = ContactModel.belongsTo(models.Report, { foreignKey: 'reportId' })
  }
}

ContactModel.initModel<ContactModel>(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        isEmail: {
          msg: ValidationErrorMessage.NOT_EMAIL,
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
  },
)
