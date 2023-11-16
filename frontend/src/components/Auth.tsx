'use client'

import { IAuth } from '@/ts/type'
import Field from '@/ui/Field'
import { AtSign, Lock } from 'lucide-react'
import { Button } from "@/ui/Button";

export function Auth({ type }: IAuth) {
	return (
		<div className={'flex w-screen h-screen'}>
			<form className={'m-auto block w-96 p-layout border-border border'}>
				<h1 className={'text-center'}>{type}</h1>
				<Field placeholder={'Email'} type={'email'} Icon={AtSign} />
				<Field placeholder={'Password'} type={'password'} Icon={Lock} />

				<Button isLoading={true}>{type}</Button>
			</form>
		</div>
	)
}
