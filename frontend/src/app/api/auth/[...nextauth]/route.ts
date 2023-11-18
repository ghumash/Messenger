import NextAuth from 'next-auth/next'
import { nextAuthOptions } from "@/app/lib/next-auth.lib";

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }
