import { Code2, ListVideo, Settings, Tags } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 mt-4 border-b border-zinc-800">
      <div className="container flex items-center gap-2">
        <Link
          href="/uploads"
          className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-100 font-medium text-xs gap-1.5 flex items-center transition hover:bg-zinc-900"
        >
          <ListVideo size={16} />
          Uploads
        </Link>

        <Link
          href="#"
          className="px-3 py-1.5 rounded-full text-zinc-100 font-medium text-xs gap-1.5 flex items-center transition hover:bg-zinc-900"
        >
          <Tags size={16} />
          Tags
        </Link>

        <Link
          href="#"
          className="px-3 py-1.5 rounded-full text-zinc-100 font-medium text-xs gap-1.5 flex items-center transition hover:bg-zinc-900"
        >
          <Settings size={16} />
          Settings
        </Link>

        <Link
          href="#"
          className="px-3 py-1.5 rounded-full text-zinc-100 font-medium text-xs gap-1.5 flex items-center transition hover:bg-zinc-900"
        >
          <Code2 size={16} />
          Developers
        </Link>
      </div>
    </header>
  );
}
