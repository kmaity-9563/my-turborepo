import NextAuth from "next-auth/next";
import  authOptions  from '../../../lib/auth'
// import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth(authOptions)

// testing
export { handler as GET, handler as POST }
