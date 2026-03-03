"use server"

import { signIn, signOut } from "@/auth"

export const login = async () => {
  "use server"

  await signIn("github", { redirectTo: "/admin/upload" })
}

export const logout = async () => {
  "use server"
  await signOut({ redirectTo: "/" })
}
