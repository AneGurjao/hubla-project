import { DropzoneState } from "react-dropzone";
import { UploadIcon } from "../icons/UploadIcon";

interface InputProps {
  dropzone: DropzoneState;
}

export const Input = ({ dropzone }: InputProps) => {
  const { getInputProps, getRootProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`${isDragActive ? "border-green" : "border-gray"} bcg-green`}
    >
      <div className="content-file">
        <label htmlFor="dropzone-file">
          <UploadIcon className={`icon ${isDragActive ? "green" : "gray"}`} />
          {isDragActive ? (
            <p>Solte para adicionar</p>
          ) : (
            <p className="click-here" data-test-id="click-here">
              Clique para enviar <br />
              ou arraste aqui
            </p>
          )}
        </label>
        <input className="hidden" {...getInputProps()} data-test-id="file-input" />
      </div>
    </div>
  );
};
