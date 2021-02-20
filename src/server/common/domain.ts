// at least one contact channel required
export type User = {
  email: string
  password: string
}

// at least one contact channel required
export type Contact = {
  name: string
  email: string
  phone: string
  telegram: string
  facebook: string
  viber: string
}

export enum PetType {
  Cat = 'cat',
  Dog = 'dog',
  Other = 'other',
}

export enum ReportType {
  Lost = 'lost',
  Found = 'found',
}

export enum Sex {
  Male = 'male',
  Female = 'female',
  NotSure = 'not_sure',
}

export enum Color {
  Black = 'black',
  Brown = 'brown',
  Ginger = 'ginger',
  Grey = 'grey',
  White = 'white',
  NotSure = 'not_sure',
}

export type Report = {
  reportType: ReportType
  petType: PetType
  location: string
  sex: Sex
  color: Color
  date: Date
  description: string
}

export type Image = {
  url: string
  hash: string
}