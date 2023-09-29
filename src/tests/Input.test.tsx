import { fireEvent, render } from "@testing-library/react"
// import { Input } from "../components/Input"

import { useDropzone } from "react-dropzone";

// describe('File input upload', () => {
//     it('should display the selected file name', async () => {
//         const { getByTestId } = render(<Input dropzone />)

//         const fileInput = getByTestId('click-here');
//         const file = new File(['test file content'], 'sales.txt', {
//             type: 'text/plain',
//         });
//         fireEvent.change(fileInput, { target: { files: [file] } });
//     })
// })

function mockData(files: File[]) {
    return {
      dataTransfer: {
        files,
        items: files.map((file) => ({
          kind: 'file',
          type: file.type,
          getAsFile: () => file,
        })),
        types: ['Files'],
      },
    };
  }
  
  const Test = ({ fn }: { fn: VoidFunction }) => {
    const { getInputProps, getRootProps } = useDropzone({
      onDrop: fn,
    });
    return (
      <div role="presentation" {...getRootProps}>
        <input {...getInputProps} />
      </div>
    );
  };
  
  it('should trigger onDrop fn', async () => {
    // const user = MouseEvent;
    const mockFn = vi.fn();
    render(<Test fn={mockFn} />);
  
    const file = new File(['test1,test2'], 'test.csv', { type: 'text/csv' });
    const dropzone = screen.getByRole('presentation');
    const data = mockData([file]);
  
    fireEvent.drop(dropzone, data);
  
    expect(mockFn).toBeCalled();
  });