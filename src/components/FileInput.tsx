import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { HasFile } from "./HasFile";
import { Input } from "./Input";


export default function FileInput () {
  const [file, setFile] = useState<File | null>(null)

  const removeFile = useCallback(() => {
    setFile(null)
  }, [])

  const onDrop = useCallback((files: File[]) => {
     setFile(files[0])
  },[])

  const dropzone = useDropzone({
    onDrop,
    accept: {
    }
  })

  return (
    <>
      <Input dropzone={dropzone}/>
      {file && (
        <HasFile file={file} removeFile={removeFile} />
      )}
    </>
  )
}



