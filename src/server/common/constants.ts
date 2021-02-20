export const APP_PORT = process.env.PORT || 29115

export const COMBINED_LOGS_FILE_PATH = 'logs/api.log'

export enum ValidationErrorMessage {
  NOT_EMAIL = 'notEmail',
  NOT_UNIQUE = 'notUnique',
  TOO_LONG = 'tooLong',
  TOO_SHORT = 'tooShort',
}

export const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_HASHING_ROUNDS || 2

export const JWT_SECRET = process.env.ASTRAY_SECRET_KEY || 'defaultSecret'

export const DEFAULT_ERROR_MESSAGE = 'Oops..! Щось пішло не так;('
