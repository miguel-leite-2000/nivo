"use client";
import { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderSearch, MoreHorizontal, Tags, Upload } from "lucide-react";
import Image from "next/image";
import { Check, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  isDragging: boolean;
};

export function CreateUpload({
  onDragEnter,
  onDragLeave,
  onDrop,
  videos,
  setVideos,
  isDragging,
  onFileSelect,
}: Props) {
  const [selected, setSelected] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <main className="container mt-8 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-zinc-50 text-xl font-bold">New upload</h1>

        <div className="flex items-center gap-2.5">
          <button className="px-4 py-1.5 rounded-[6px] bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs flex items-center gap-1.5">
            <Wand2 size={16} />
            Generate AI titles
          </button>
          <span className="text-zinc-800">|</span>
          <div className="flex items-center gap-2.5">
            <button className="px-4 py-1.5 rounded-[6px] border border-zinc-800 text-zinc-500 text-xs">
              Clear all
            </button>
            <Button
              type="submit"
              className="w-auto h-auto rounded-[6px] bg-teal-400 text-xs text-teal-950 font-medium flex items-center gap-1.5 hover:bg-teal-500"
            >
              <Check size={16} />
              Upload all (6)
            </Button>
          </div>
        </div>
      </div>

      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`w-full h-36 mt-5 bg-zinc-900 text-zinc-500 py-2 border flex flex-col items-center justify-center rounded-[8px] ${
          isDragging ? "border-teal-500" : "border-zinc-800"
        }`}
      >
        <input
          type="file"
          hidden
          name="file"
          id="file"
          multiple
          ref={fileInputRef}
          // onChange={onFileSelect}
        />
        {isDragging ? (
          <p className="text-sm text-teal-500">Drop the file here</p>
        ) : (
          <>
            <Label
              htmlFor="file"
              className="text-sm font-semibold text-zinc-300 px-2 py-1 flex flex-col items-center gap-1.5 rounded-xl border-zinc-700 cursor-pointer"
              onClick={selectFiles}
            >
              {" "}
              <Upload size={20} /> Drag videos here
            </Label>
            <p className="text-sm text-zinc-500">Accept only MP4</p>
          </>
        )}
      </div>

      <div className="mt-5">
        <Table className="border-zinc-900 border-t-[2px] border-b-[2px] z-0">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="text-sm font-medium text-zinc-300 border-zinc-800">
              <TableHead>Video</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-zinc-500 text-sm z-0">
            <TableRow className="border-zinc-900">
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src="/thumbinail.png"
                    width={114}
                    height={64}
                    alt="thumbinail"
                    className="rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <strong className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800 rounded-[6px] font-normal text-white">
                      01-schema-de-links-de-autenticacao.mp4
                    </strong>
                    <div>
                      <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                        <Tags size={16} />
                        Tags
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="z-0">
                <Select value="PT">
                  <SelectTrigger className="w-[100px] border-zinc-800 rounded-[6px] text-zinc-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-zinc-500 px-1.5 bg-zinc-900 border-zinc-800 rounded">
                    <SelectItem value="EN">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="US" /> EN
                      </div>
                    </SelectItem>
                    <SelectItem value="PT">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="BR" /> PT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>12:37</TableCell>
              <TableCell>90.73 MB</TableCell>
              <TableCell>
                <div className="flex">
                  <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                    READY
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">
                <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                  <MoreHorizontal />
                </button>
              </TableCell>
            </TableRow>

            <TableRow className="border-zinc-900">
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src="/thumbinail.png"
                    width={114}
                    height={64}
                    alt="thumbinail"
                    className="rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <strong className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800 rounded-[6px] font-normal text-white">
                      01-schema-de-links-de-autenticacao.mp4
                    </strong>
                    <div>
                      <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                        <Tags size={16} />
                        Tags
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="z-0">
                <Select value="PT">
                  <SelectTrigger className="w-[100px] border-zinc-800 rounded-[6px] text-zinc-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-zinc-500 px-1.5 bg-zinc-900 border-zinc-800 rounded">
                    <SelectItem value="EN">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="US" /> EN
                      </div>
                    </SelectItem>
                    <SelectItem value="PT">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="BR" /> PT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>12:37</TableCell>
              <TableCell>90.73 MB</TableCell>
              <TableCell>
                <div className="flex">
                  <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                    READY
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">
                <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                  <MoreHorizontal />
                </button>
              </TableCell>
            </TableRow>

            <TableRow className="border-zinc-900">
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src="/thumbinail.png"
                    width={114}
                    height={64}
                    alt="thumbinail"
                    className="rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <strong className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800 rounded-[6px] font-normal text-white">
                      01-schema-de-links-de-autenticacao.mp4
                    </strong>
                    <div>
                      <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                        <Tags size={16} />
                        Tags
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="z-0">
                <Select value="PT">
                  <SelectTrigger className="w-[100px] border-zinc-800 rounded-[6px] text-zinc-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-zinc-500 px-1.5 bg-zinc-900 border-zinc-800 rounded">
                    <SelectItem value="EN">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="US" /> EN
                      </div>
                    </SelectItem>
                    <SelectItem value="PT">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="BR" /> PT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>12:37</TableCell>
              <TableCell>90.73 MB</TableCell>
              <TableCell>
                <div className="flex">
                  <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                    READY
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">
                <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                  <MoreHorizontal />
                </button>
              </TableCell>
            </TableRow>

            <TableRow className="border-zinc-900">
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src="/thumbinail.png"
                    width={114}
                    height={64}
                    alt="thumbinail"
                    className="rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <strong className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800 rounded-[6px] font-normal text-white">
                      01-schema-de-links-de-autenticacao.mp4
                    </strong>
                    <div>
                      <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                        <Tags size={16} />
                        Tags
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="z-0">
                <Select value="PT">
                  <SelectTrigger className="w-[100px] border-zinc-800 rounded-[6px] text-zinc-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-zinc-500 px-1.5 bg-zinc-900 border-zinc-800 rounded">
                    <SelectItem value="EN">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="US" /> EN
                      </div>
                    </SelectItem>
                    <SelectItem value="PT">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="BR" /> PT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>12:37</TableCell>
              <TableCell>90.73 MB</TableCell>
              <TableCell>
                <div className="flex">
                  <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                    READY
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">
                <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                  <MoreHorizontal />
                </button>
              </TableCell>
            </TableRow>

            <TableRow className="border-zinc-900">
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src="/thumbinail.png"
                    width={114}
                    height={64}
                    alt="thumbinail"
                    className="rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <strong className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800 rounded-[6px] font-normal text-white">
                      01-schema-de-links-de-autenticacao.mp4
                    </strong>
                    <div>
                      <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                        <Tags size={16} />
                        Tags
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="z-0">
                <Select value="PT">
                  <SelectTrigger className="w-[100px] border-zinc-800 rounded-[6px] text-zinc-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-zinc-500 px-1.5 bg-zinc-900 border-zinc-800 rounded">
                    <SelectItem value="EN">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="US" /> EN
                      </div>
                    </SelectItem>
                    <SelectItem value="PT">
                      <div className="flex items-center gap-1.5">
                        <ReactCountryFlag countryCode="BR" /> PT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>12:37</TableCell>
              <TableCell>90.73 MB</TableCell>
              <TableCell>
                <div className="flex">
                  <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                    READY
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">
                <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                  <MoreHorizontal />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex items-center justify-between text-zinc-500 text-sm p-4">
          <p>
            This upload will add{" "}
            <span className="text-zinc-300 font-medium">3GB</span> to your
            storage consumption.
          </p>
        </div>
      </div>
    </main>
  );
}
