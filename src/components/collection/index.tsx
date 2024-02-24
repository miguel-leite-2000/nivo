import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  quantity: number;
  storage: number;
  user: string;
  avatar: string;
  numberOfLastUploadedVideos: string;
}

export function Collection({ numberOfLastUploadedVideos, quantity, storage, title, user, avatar } : Props) {
  return (
    <div className="rounded-[8px] border-zinc-800 border-[1px] bg-zinc-900/20 pt-5">
      <div className="flex justify-between items-start px-5">
        <div className="flex flex-col gap-2.5 pt-5 pb-10">
          <strong className="font-semibold text-lg text-zinc-50">{title}</strong>
          <div className="flex items-center gap-1.5">
            <p className="text-xs text-zinc-500">{quantity} videos</p>
            <div className="w-1 h-1 rounded-full bg-zinc-600" />
            <p className="text-xs text-zinc-500">{storage}GB storage</p>
          </div>
        </div>

        <button className="px-2 py-1.5 rounded text-zinc-300 border-[1px] border-zinc-800">
          <MoreHorizontal />
        </button>
      </div>

      <div className="px-5 py-4 bg-zinc-950 border-t-[1px] border-zinc-800 rounded-bl-[8px] rounded-br-[8px]">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            className="w-4 h-4 rounded-full"
            alt="Photo Miguel Leite"
            width={16}
            height={16}
          />
          <p className="text-xs text-zinc-500">
            <span className="text-zinc-100">{user}</span> { numberOfLastUploadedVideos }
          </p>
        </div>
      </div>
    </div>
  );
}
