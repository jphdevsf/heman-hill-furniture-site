import { auth } from "@/auth"
import Header from "../../components/Header"
import SignIn from "./SignIn"
import UploadForm from "./UploadForm"

export default async function UploadPage() {
  const session = await auth()
  return (
    <>
      {!session ? (
        <SignIn />
      ) : (
        <>
          <Header>
            <nav aria-label="Main Navigation" className="block m-0 mb-8 md:mb-0 p-0">
              <a
                href="/"
                className="text-lg flex gap-4 font-light text-white border-b-2 border-b-black hover:cursor-pointer hover:border-b-white transition-all duration-300"
              >
                Back To Site
              </a>
            </nav>
          </Header>
          <UploadForm />
        </>
      )}
    </>
  )
}
