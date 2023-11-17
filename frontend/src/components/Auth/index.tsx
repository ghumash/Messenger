'use client'

import { IAuth } from '@/ts/type'
import Field from '@/ui/Field'
import { AtSign, Lock } from 'lucide-react'
import { Button } from "@/ui/Button"
import styles from './Auth.module.scss'

export function Auth({ type }: IAuth) {
	return (
		<div className={styles.root}>
			<form>
				<h1 className={''}>{type}</h1>
        <div className={styles.fields}>
          <Field placeholder={'Email'} type={'email'} Icon={AtSign} />
          <Field placeholder={'Password'} type={'password'} Icon={Lock} />
        </div>
        <div className={styles.buttons}>
          <Button isLoading={false}>{type}</Button>
        </div>
			</form>
		</div>
	)
}
