"use client"

import { login } from "../../lib/actions/auth"

const SignIn = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <button
        type="button"
        onClick={() => login()}
        className="bg-purple-950 text-white p-4 hover:cursor-pointer"
      >
        Sign in with GitHub to continue
      </button>
    </div>
  )
}

export default SignIn
