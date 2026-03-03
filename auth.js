import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ account }) {
      if (!account?.providerAccountId) return false
      const allowedUserIds = process.env.IMAGE_UPLOAD_ACCESS_GITHUB_USER_IDS?.split(",") || []
      const isAuthorized = allowedUserIds.includes(account.providerAccountId.toString())
      console.log("JPH ", { account, allowedUserIds, isAuthorized })
      if (!isAuthorized) return "/unauthorized" // Show custom "not authorized" page
      return true
    }
  }
})
