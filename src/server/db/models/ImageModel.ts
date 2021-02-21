import { DataTypes, Sequelize } from 'sequelize'
import { Image } from '../../common/domain'
import { BaseModel, IBaseModel, IBaseModelConstructor } from './BaseModel'
import { Models } from '..'

export interface IImageModel extends IBaseModel, Image {}

export interface IImageModelConstructor extends IBaseModelConstructor {
  new (): ImageModel
}

export class ImageModel extends BaseModel implements IImageModel {
  public url!: string
  public hash!: string

  static associate(models: Models) {
    ImageModel.associations.Report = ImageModel.belongsTo(models.Report, { foreignKey: 'reportId' })
  }
}

ImageModel.initModel<ImageModel>(
  {
    url: {
      type: DataTypes.STRING,
    },
    hash: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'images',
  },
)
