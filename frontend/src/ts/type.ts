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
