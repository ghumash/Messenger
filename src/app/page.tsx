import CurrentUser from '@/components/CurrentUser'
import ChatList from '@/components/ChatList'
import Chat from '@/components/Chat'

export default function Home() {
	return (
		<div>
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
