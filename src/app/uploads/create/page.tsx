import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderSearch } from "lucide-react";

export default function Create() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-10">
      <Navbar />
      <Header />

      <div className="flex items-center justify-center p-6 bg-zinc-900/20 border border-dashed border-zinc-800 my-60 mx-auto w-[32.5rem] h-52 rounded-[8px]">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-zinc-500">Drag videos here</p>
          <input type="file" hidden name="file" id="file" />
          <Label 
            htmlFor="file"
            className="text-xs font-medium text-zinc-50 px-2 py-1 flex items-center gap-1.5 rounded-xl bg-zinc-800 border-zinc-700 cursor-pointer"
          > <FolderSearch /> Select manually</Label>
        </div>
      </div>
    </main>
  );
}
