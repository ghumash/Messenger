'use client'

import type { PropsWithChildren } from 'react'
import styles from './LayoutClient.module.scss'
import { Sidebar } from '../Sidebar'
import {Toaster} from "react-hot-toast";
import MainProvider from "@/providers/MainProvider";

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<MainProvider>
			<main className={styles.layout}>
				<Sidebar />
				<section>{children}</section>
				<Toaster position={'top-right'}/>
			</main>
		</MainProvider>
	)
}
