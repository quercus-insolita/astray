import { DataTypes, Sequelize } from 'sequelize'
import { Report, ReportType, PetType, Color, Sex } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { Models } from '..'

export interface IReportModel extends IBaseModel, Report {}

export interface IReportModelConstructor extends IBaseModelConstructor {
  new (): ReportModel
}

export class ReportModel extends BaseModel implements IReportModel {
  public type!: ReportType
  public petType!: PetType
  public color!: Color
  public location!: string
  public sex!: Sex
  public date!: Date
  public description!: string

  static associate(models: Models) {
    ReportModel.hasMany(models.Contact, { foreignKey: 'reportId' })
    ReportModel.hasMany(models.Image, { foreignKey: 'reportId' })
  }
}

ReportModel.initModel<ReportModel>(
  {
    reportType: {
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
      defaultValue: String(Sequelize.col('createdAt'))
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
