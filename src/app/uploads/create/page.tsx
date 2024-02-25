"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Label } from "@/components/ui/label";
import { FolderSearch } from "lucide-react";

interface Video {
  name: string;
  url: string;
}

export default function Create() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(function () {})

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function onFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files as FileList;
    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        if (files[index].type.split("/")[0] !== "image") continue;
        if (!videos.some((e: Video) => e.name === files[index].name)) {
          console.log(files.length)
          setVideos((prevVideos: Video[]) => [
            ...prevVideos,
            {
              name: files[index].name,
              url: URL.createObjectURL(files[index]),
            },
          ]);
        }
      }
    }
  }

  function onDragEnter(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      const isFile = event.dataTransfer.items[0].kind === 'file';
      console.log(isFile)
      console.log(videos)
      if (isFile) {
        setIsDragging(true);
      }
    }
  }

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files as FileList;
    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        if (files[index].type.split("/")[0]!== "image") continue;
        if (!videos.some((e: Video) => e.name === files[index].name)) {
          setVideos((prevVideos: Video[]) => [
          ...prevVideos,
            {
              name: files[index].name,
              url: URL.createObjectURL(files[index]),
            },
          ]);
        }
      }
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-10">
      <Navbar />
      <Header />

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
    </main>
  );
}
