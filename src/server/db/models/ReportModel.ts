import { DataTypes, Sequelize } from 'sequelize'
import { Report, ReportType, PetType, Color, Sex } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { ImageModel, Models } from '..'

export interface IReportModel extends IBaseModel, Report {}

export interface IReportModelConstructor extends IBaseModelConstructor {
  new (): ReportModel
}

export class ReportModel extends BaseModel implements IReportModel {
  public type!: ReportType
  public petType!: PetType
  public color!: Color
  public city!: string
  public sex!: Sex
  public date!: string
  public description!: string

  public getImages!: () => ImageModel[]

  static associate(models: Models) {
    ReportModel.associations.Contact = ReportModel.hasMany(models.Contact, { foreignKey: 'reportId' })
    ReportModel.associations.Image = ReportModel.hasMany(models.Image, { foreignKey: 'reportId' })
    ReportModel.associations.User = ReportModel.belongsTo(models.User, { foreignKey: 'userId' })
  }
}

ReportModel.initModel<ReportModel>(
  {
    type: {
      type: DataTypes.ENUM(...Object.values(ReportType)),
    },
    petType: {
      type: DataTypes.ENUM(...Object.values(PetType)),
      defaultValue: PetType.Other,
    },
    color: {
      type: DataTypes.ENUM(...Object.values(Color)),
      defaultValue: Color.NotSure,
    },
    // TODO: add coords
    city: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.ENUM(...Object.values(Sex)),
      defaultValue: Sex.NotSure,
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    tableName: 'reports',
  },
)
