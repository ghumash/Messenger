import CurrentUser from "@/app/components/CurrentUser";
import ChatList from "@/app/components/ChatList";
import Chat from "@/app/components/Chat";

export default function Home() {
	return (
		<div>
			<div>
				<CurrentUser/>
				<ChatList/>
			</div>
			<div>
				<Chat/>
			</div>
		</div>
	)
}