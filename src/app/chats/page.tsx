import type { Metadata } from 'next'
import { CurrentUser } from '@/components/CurrentUser'
import { ChatList } from '@/components/ChatList'
import { Chat } from '@/components/Chat'
import styles from './chat.module.scss'

export const metadata: Metadata = {
	title: 'Chats'
}

export default function Chats() {
	return (
		<div className={styles.root}>
			<div>
				<CurrentUser />
				<ChatList />
			</div>
			<div>
				<Chat />
			</div>
		</div>
	)
}