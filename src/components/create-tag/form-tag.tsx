import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Check } from "lucide-react";

export function FormTag() {
  return (
    <SheetContent className="bg-zinc-950 text-zinc-300 border-l-zinc-900">
      <SheetHeader>
        <SheetTitle className="text-xl text-zinc-50 font-bold">
          Create tag
        </SheetTitle>
        <SheetDescription className="text-zinc-500 text-sm">
          Tags can be used to group videos about similar concepts
        </SheetDescription>
      </SheetHeader>
      <div className="mt-10 flex flex-col gap-6 mb-6">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="name" className="text-sm text-zinc-50 font-medium">
            Collection name
          </Label>
          <Input
            name="name"
            className="bg-zinc-900/20 border-zinc-800 rounded-[8px]"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <Label htmlFor="slug" className="text-sm text-zinc-50 font-medium">
            Slug
          </Label>
          <Input
            id="slug"
            name="slug"
            className="bg-zinc-900/20 border-zinc-800 rounded-[8px]"
          />
        </div>
      </div>
      <SheetFooter>
        <SheetClose
          asChild
          className="w-auto h-auto rounded-[6px] border border-zinc-800 text-xs text-zinc-500 font-medium"
        >
          <Button>Cancel</Button>
        </SheetClose>

        <Button
          type="submit"
          className="w-auto h-auto rounded-[6px] bg-teal-400 text-xs text-teal-950 font-medium flex items-center gap-1.5 hover:bg-teal-500"
        >
          <Check size={16} />
          Save
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
