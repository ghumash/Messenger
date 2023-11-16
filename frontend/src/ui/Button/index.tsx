import { IButton } from '@/ts/type'
import { Loader } from '../Loader'
import styles from './Button.module.scss'

export function Button({ isLoading, children }: IButton) {
	return (
		<button className={styles.button}>
			{isLoading ? <Loader /> : children}
		</button>
	)
}