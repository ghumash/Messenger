'use client'

import {IAuth, IAuthFormState} from '@/ts/type'
import Field from '@/ui/Field'
import { AtSign, Lock } from 'lucide-react'
import { Button } from "@/ui/Button"
import styles from './Auth.module.scss'
import {useRouter} from "next/router";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {signIn} from "next-auth/react";
import {getRandomFullName} from "@/utils";

export function Auth({ type }: IAuth) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm<IAuthFormState>({
    mode: 'onChange',
  })

  const { push } = useRouter()

  const onSubmit: SubmitHandler<IAuthFormState> = async data => {
    setIsLoading(true)
    const response = await signIn(
      'credentials',
      type === 'Login'
        ? {
          redirect: false,
          ...data,
        }
        : {
          redirect: false,
          username: getRandomFullName(),
          ...data,
        }
    )

    if (response?.error) {
      toast.error(response.error)
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    push('/')
  }



	return (
		<div className={styles.root}>
			<form
        onSubmit={handleSubmit(onSubmit)}
      >
				<h1 className={''}>{type}</h1>
        <div className={styles.fields}>
          <Field
            {...register('email', {
              required: true,
            })}
            placeholder='Enter email'
            type='email'
            Icon={AtSign}
          />
          <Field
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length 6 symbols!',
              },
            })}
            placeholder='Enter password'
            type='password'
            Icon={Lock}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type='submit'
          >
            {type}
          </Button>
        </div>
			</form>
		</div>
	)
}
