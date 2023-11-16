import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Friends'
}

export default function Friends() {
	return <div className={'p-layout'}>Friends Page</div>
}