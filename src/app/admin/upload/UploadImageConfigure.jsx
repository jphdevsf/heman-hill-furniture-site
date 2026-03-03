import Image from "next/image"

const UploadImageConfigure = props => {
  const { file: fileObj, index, files, onUpdate } = props
  if (!fileObj?.file) return null
  const url = URL.createObjectURL(fileObj.file)

  const handleAltUpdate = e => {
    const updated = [...files]
    updated[index].alt = e.target.value
    onUpdate(updated)
  }

  const handleTagUpdate = e => {
    const updated = [...files]
    updated[index].tag = e.target.checked
    onUpdate(updated)
  }

  return (
    <li className="flex flex-col border-b-2 border-b-gray-700 pb-4">
      <div className="relative aspect-square overflow-hidden rounded-sm border border-zinc-700">
        <Image
          src={url}
          alt={fileObj.file.name}
          width={50}
          height={50}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-zinc-300 px-2 py-1 truncate">
          {fileObj.file.name}
        </div>
      </div>
      {/* Alt text */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          Alt Text (optional)
          <input
            type="text"
            placeholder="Describe the image…"
            value={files[index].alt}
            onChange={handleAltUpdate}
            className="w-full rounded-md bg-zinc-900 border border-zinc-700 my-2 px-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
      </div>

      {/* Checkbox */}
      <label className="flex items-center space-x-3 text-zinc-300">
        <span className="text-sm my-2">Add “gallery” tag</span>
        <input
          type="checkbox"
          checked={files[index].tag}
          onChange={handleTagUpdate}
          className="h-4 w-4 rounded border-zinc-600 bg-zinc-900 text-indigo-500 focus:ring-indigo-500"
        />
      </label>
    </li>
  )
}

export default UploadImageConfigure
