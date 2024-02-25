"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Label } from "@/components/ui/label";
import { FolderSearch } from "lucide-react";
import { CreateUploadEmpty } from "@/components/upload/create-upload-empty";
import { CreateUpload } from "@/components/upload/create-upload";

interface Video {
  name: string;
  url: string;
}

export default function Create() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      if (isFile) {
        setIsDragging(true);
      }
    }
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

      {/* <CreateUploadEmpty 
        isDragging={isDragging}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        setVideos={selectFiles}
        videos={videos}
        onFileSelect={onFileSelect}
      /> */}

      <CreateUpload 
        isDragging={isDragging}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        setVideos={selectFiles}
        videos={videos}
        onFileSelect={onFileSelect}
      />
    </main>
  );
}
