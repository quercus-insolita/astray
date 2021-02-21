import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { ValidationError } from 'sequelize';
import { BCRYPT_SALT_ROUNDS, DEFAULT_ERROR_MESSAGE, JWT_SECRET, ValidationErrorMessage } from '../common/constants';
import { User } from '../common/domain';
import { Loggable } from '../common/Loggable';
import { Db, UserModel } from '../db';

type AuthenticateUserReturnType = {
  success: false
  errorMessage: string
} | {
  success: true
  user: Pick<UserModel, 'name' | 'email' | 'id'>
}

type RegisterUserReturnType = AuthenticateUserReturnType

export class AuthService extends Loggable {
  constructor(private readonly db: Db) {
    super('auth service')
  }

  async generateToken(data: any) {
    return jwt.sign(data, JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    })
  }
  
  async verifyToken<DecodedData extends object | string = object | string>(token: string): Promise<{
    success: true,
    decodedData: DecodedData
  } | {
    success: false
  }> {
    try {
      return {
        success: true,
        decodedData: jwt.verify(token, JWT_SECRET) as DecodedData
      }
    } catch {
      return {
        success: false,
      }
    }
  }

  async registerUser(user: User): Promise<RegisterUserReturnType> {
    const { password: rawPassword } = user
    const hashedPassword = await bcrypt.hash(rawPassword, BCRYPT_SALT_ROUNDS)
    
    try {
      const { email, name, id } = await this.db.models.User.create<UserModel>({
        ...user,
        password: hashedPassword
      })

      return {
        success: true,
        user: { email, name, id }
      }
    } catch (e) {
      this.logger.error(e)
      let errorMessage = DEFAULT_ERROR_MESSAGE
      
      if (e instanceof ValidationError) { 
        if (e.errors.find(({ message, path }) => path === 'email' && message === ValidationErrorMessage.NOT_EMAIL)) {
          errorMessage = 'Невалідний e-mail'
        } else if (e.errors.find(({ message, path }) => path === 'email' && message === ValidationErrorMessage.NOT_UNIQUE)) {
          errorMessage = 'Такий e-mail вже зайнятий'
        }
      }

      return {
        success: false,
        errorMessage,
      }
    }
  }
  
  async authenticateUser(credentials: Pick<User, 'email' | 'password'>): Promise<AuthenticateUserReturnType> {
    const { password: rawPassword, email } = credentials
    
    const user = await this.db.models.User.findOne<UserModel>({
      where: {
        email
      }
    })
    if (!user) {
      return {
        success: false,
        errorMessage: 'Невідомий e-mail',
      }
    }

    const { name, password: encryptedPassword, id } = user
    const isPasswordMatched = await bcrypt.compare(rawPassword, encryptedPassword)
    if (!isPasswordMatched) {
      return {
        success: false,
        errorMessage: 'Невірний пароль',
      }
    }
    
    return {
      success: true,
      user: {
        name,
        email,
        id,
      },
    }
  }
}