import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-1 items-end">
        <strong className="text-sm text-zinc-50 font-medium">
          Miguel Leite
        </strong>
        <p className="text-zinc-400 text-xs">miguelleite200leite@gmail.com</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="p-0 border-none flex items-center gap-3 text-zinc-600 hover:text-zinc-600"
          >
            <Avatar className="bg-zinc-100">
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 border-zinc-700 rounded bg-zinc-900 mr-2 mt-2 text-zinc-400">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="hover:bg-zinc-800 rounded cursor-pointer"
              asChild
            >
              <Link href="#">Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-zinc-800 rounded cursor-pointer"
              asChild
            >
              <Link href="#">Configurações</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-zinc-800 rounded cursor-pointer">
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
