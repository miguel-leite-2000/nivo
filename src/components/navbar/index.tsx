import Image from "next/image";
import Logo from "../../../public/logo.svg"
import LogoRocketseat from "../../../public/rocketseat.png"
import { Badge } from "../badge";

export function Navbar() {
  return (
    <nav className="container">
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo Nivo" />
          <Badge variant="secondary">BETA</Badge>
        </div>
        <span className="text-zinc-800">/</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src={LogoRocketseat} alt="Logo Nivo" className="rounded-full" />
            <strong className="text-sm text-zinc-100">Rocketseat</strong>
          </div>
          <Badge variant="primary">PRO</Badge>
        </div>
      </div>
    </nav>
  )
}