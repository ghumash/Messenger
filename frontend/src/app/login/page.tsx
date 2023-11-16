import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/ts/seo.constants'
import { Auth } from '@/components/Auth'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default function Login() {
	return <Auth type={'Login'} />
}
