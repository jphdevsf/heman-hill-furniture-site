"use client"

import { logout } from "../../lib/actions/auth"

const SignOut = () => {
  return (
    <button
      type="button"
      onClick={() => logout()}
      className="text-lg flex gap-4 font-light text-white border-b-2 border-b-black hover:cursor-pointer hover:border-b-white transition-all duration-300"
    >
      Sign Out
    </button>
  )
}

export default SignOut
