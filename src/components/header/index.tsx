import { Code2, ListVideo, Settings, Tags } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="py-4 mt-4 border-b border-zinc-800">
      <div className="container flex items-center gap-2">
        <NavLink
          href="/uploads"
        >
          <ListVideo size={16} />
          Uploads
        </NavLink>

        <NavLink
          href="/tags"
        >
          <Tags size={16} />
          Tags
        </NavLink>

        <NavLink
          href="#"
        >
          <Settings size={16} />
          Settings
        </NavLink>

        <NavLink
          href="#"
        >
          <Code2 size={16} />
          Developers
        </NavLink>
      </div>
    </header>
  );
}
