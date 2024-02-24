import { Clapperboard, Plug } from "lucide-react";

type Props = {
  type: "video" | "webhook",
  user: string;
  collection?: string;
  time: string;
  quantityVideos?: number;
}

export function ActivityItem({ collection, time, type, user, quantityVideos } : Props) {
  return (
    <div className="flex items-start justify-between gap-5 py-3 px-3 rounded hover:bg-zinc-900 cursor-pointer">
      <div className="flex items-start gap-3 text-zinc-500">
        {type === "video" ? <Clapperboard size={16} /> : <Plug size={16} />}
        {type === "video" ? (
          <strong className="text-wrap text-sm font-normal">
            <span className="text-zinc-100">{user} </span>
            uploaded {quantityVideos} new <br /> videos to
            <span className="text-zinc-100"> {collection}</span>
          </strong>
        ): (
          <strong className="text-wrap text-sm font-normal">
            <span className="text-zinc-100">{user} </span>
            created a new <br /> webhook
          </strong>
        )}
      </div>
      <p className="text-zinc-500 text-xs">{time}</p>
    </div>
  );
}
