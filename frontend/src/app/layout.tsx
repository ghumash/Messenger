import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../scss/globals.scss'
import React from 'react'
import LayoutClient from "@/layout/LayoutClient";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next Messenger',
	description: 'Best messenger for everyone',
	icons: ''
}

export const viewport: Viewport = {
	themeColor: '#0E0B18',
	colorScheme: 'dark'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	)
}
