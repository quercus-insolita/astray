import {
  Model,
  ModelCtor,
  ModelAttributeColumnOptions,
  InitOptions,
  ModelAttributes,
  Sequelize,
} from 'sequelize'

import { sequelize } from '../sequelize'
import { Models } from '..'
import { PREFER_RESTRICT_NULL } from '../config'

export interface IBaseModel {
  readonly id: number
  readonly createdAt: Date
  updatedAt: Date
}

export interface IBaseModelConstructor extends ModelCtor<BaseModel> {
  associate?(models: Models): void
  associations: Record<string, any>
  initModel(attributes: ModelAttributes, options: Partial<InitOptions>): void
}

export abstract class BaseModel extends Model implements IBaseModel {
  readonly id!: number
  readonly createdAt!: Date
  updatedAt!: Date

  static initModel<M extends BaseModel = BaseModel>(
    attributes: ModelAttributes,
    options: Partial<InitOptions<M>>,
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
    console.log('%j', sequelize)
    super.init.call(this as any, attributes, {
      underscored: true,
      sequelize,
      ...options,
    } as any)
  }
}
