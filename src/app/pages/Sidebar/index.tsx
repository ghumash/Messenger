'use client'

import Image from 'next/image'
import { Sun } from 'lucide-react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import logo from '../../assets/img/logo.svg'
import { Configs } from '@/app/ts/configs'
import { MENU } from '@/app/ts/const'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

export function Sidebar() {
	const pathname = usePathname()

	return (
		<aside className={styles.sidebar}>
			<Link href={'/'}>
				<Image
					className={styles.logo}
					src={logo}
					priority
					alt={''}
					width={40}
					height={40}
				/>
			</Link>
			<div>
				{MENU.map((item, i) => (
					<Link href={item.url} key={i}>
						<item.icon
							size={Configs.iconSize}
							className={cn({
								[styles.icon]: true,
								[styles.active]: pathname === item.url
							})}
						/>
					</Link>
				))}
			</div>
			<Sun size={Configs.iconSize} className={styles.icon} />
		</aside>
	)
}
