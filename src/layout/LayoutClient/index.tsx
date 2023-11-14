import type { PropsWithChildren } from 'react'
import styles from './LayoutClient.module.scss'
import Sidebar from '../Sidebar'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.layout}>
			<Sidebar />
			<section>{children}</section>
		</main>
	)
}