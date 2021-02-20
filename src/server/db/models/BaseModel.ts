import {
  Model,
  ModelCtor,
  ModelAttributeColumnOptions,
  InitOptions,
  ModelAttributes,
  Sequelize,
} from 'sequelize'

import { ProjectModelsStore } from '../store'
import { PREFER_RESTRICT_NULL } from '../config'

export interface IBaseModel {
  readonly id: number
  readonly createdAt: Date
  updatedAt: Date
}

export interface IBaseModelConstructor extends ModelCtor<BaseModel> {
  associate?(models: ProjectModelsStore): void
  associations: Record<string, any>
  initModel(sequelize: Sequelize): void
}

export abstract class BaseModel extends Model implements IBaseModel {
  readonly id!: number
  readonly createdAt!: Date
  updatedAt!: Date

  protected static initModelInternal<M extends BaseModel = BaseModel>(
    attributes: ModelAttributes,
    options: InitOptions<M>,
  ) {
    if (PREFER_RESTRICT_NULL) {
      attributes = Object.entries(attributes).reduce<ModelAttributes>(
        (acc, [key, value]) => {
          value = value as ModelAttributeColumnOptions
          if (typeof value.allowNull !== 'boolean') {
            value.allowNull = false
          }
          return {
            ...acc,
            [key]: value,
          }
        },
        {},
      )
    }
    super.init.call(this as any, attributes, options as any)
  }
}
