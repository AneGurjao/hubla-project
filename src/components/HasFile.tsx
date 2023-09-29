import { CloseIcon } from "../icons/CloseIcon"
import { FileIcon } from "../icons/FileIcon"

interface HasFileProps {
    file?: File
    removeFile: () => void
}

export const HasFile = ({ file, removeFile }: HasFileProps) => {
    return (
      <div className="file">
        <div>
          <FileIcon />
          <span data-test-id="file-name">{file?.name}</span>
          <button onClick={removeFile}>
            <CloseIcon />
          </button>
        </div>
      </div>
    )
  }