import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id
      }
      return session
    },
    authorized({ auth, request }) {
      const isAdminPage = request.nextUrl.pathname.startsWith("/admin/upload")

      if (!isAdminPage) {
        return true
      }

      if (!auth?.user?.id) {
        return false
      }

      const allowedUserIds = process.env.ALLOWED_GITHUB_USER_IDS?.split(",") || []
      return allowedUserIds.includes(auth.user.id.toString())
    }
  }
})
