import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { LucideIcon } from 'lucide-react'

export interface IFieldProps {
	placeholder: string
	error?: FieldError
	Icon?: LucideIcon
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IFieldProps {
	placeholder: string
	error?: FieldError
	Icon?: LucideIcon
}

export interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
}

export interface IAuth {
	type?: 'Login' | 'Register'
}

export interface IAuthFormState {
  email: string
  password: string
}

export interface IUser {
  username: string
  email: string
  confirmed: boolean
  role: string
  avatar: string
}

export type UserJwt = {
  user: IUser
  jwt: string
}

export type TypeError = {
  data: null
  error: {
    status: string
    name: string
    message: string
    details: {}
  }
}
