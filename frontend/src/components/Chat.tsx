import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chat'
}

export function Chat() {
	return <div className={'p-layout'}>Chat Page</div>
}

