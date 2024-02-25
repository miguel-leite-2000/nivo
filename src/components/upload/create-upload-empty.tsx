import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { FolderSearch } from "lucide-react";

interface Video {
  name: string;
  url: string;
}

type Props = {
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setVideos: (e: any) => void;
  videos: Video[];
  isDragging: boolean
}
export function CreateUploadEmpty({ onDragEnter, onDragLeave, onDrop, videos, setVideos, isDragging, onFileSelect }:Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  
  return (
    <div 
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`flex items-center justify-center p-6 border border-dashed border-zinc-800 my-60 mx-auto w-[32.5rem] h-52 rounded-[8px] ${isDragging ? 'border-teal-500' : 'border-zinc-800'}`}>
        <div className="flex flex-col gap-4">
          <input
            type="file"
            hidden
            name="file"
            id="file"
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
          {
            isDragging ? (
              <p className="text-sm text-teal-500">Drop the file here</p>
            ): (
              <>    
                <p className="text-sm text-zinc-500">Drag videos here</p>
                <Label
                  htmlFor="file"
                  className="text-xs font-medium text-zinc-50 px-2 py-1 flex items-center gap-1.5 rounded-xl bg-zinc-800 border-zinc-700 cursor-pointer"
                  onClick={selectFiles}
                >
                  {" "}
                  <FolderSearch size={16} /> Select manually
                </Label>
              </>
            )
          }
        </div>
      </div>
  )
}