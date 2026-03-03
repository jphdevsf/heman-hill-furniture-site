"use client"

import { useState } from "react"
import UploadImageConfigure from "./UploadImageConfigure"

const UploadForm = () => {
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState("")

  function handleFileChange(e) {
    const selected = Array.from(e.target.files || [])

    const mapped = selected.map(file => ({
      file,
      alt: "",
      tag: true,
      preview: URL.createObjectURL(file)
    }))
    setFiles(mapped)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!files.length) return

    const form = new FormData()
    files.forEach(({ file, alt, tag }) => {
      form.append("files", file)
      form.append("alts", alt)
      form.append("tags", tag ? "on" : "off")
    })

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: form
    })

    const json = await res.json()

    setStatus(json.success ? "Uploaded!" : "Error uploading")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-3xl mx-4 md:mx-auto bg-black text-white p-8 rounded-xl space-y-6 border border-zinc-800 shadow-xl"
    >
      {/* File input */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          Upload Images
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-zinc-300 file:bg-zinc-800 file:text-zinc-200 my-2 file:px-4 file:py-2 file:rounded-md file:border-0 file:cursor-pointer hover:file:bg-zinc-700"
          />
        </label>
      </div>
      {files.length > 0 && (
        <ul className="flex flex-col gap-8">
          {files.map((file, i) => (
            <UploadImageConfigure file={file} index={i} key={i} files={files} onUpdate={setFiles} />
          ))}
        </ul>
      )}
      <button
        type="submit"
        className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium text-white"
      >
        Upload
      </button>
      {status && <p className="text-sm text-indigo-400 pt-2">{status}</p>}
    </form>
  )
}

export default UploadForm
