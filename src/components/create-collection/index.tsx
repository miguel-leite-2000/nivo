"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ButtonAdd } from "../buttonAdd";
import { Check, Search } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

const members = [
  {
    id: "1",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Miguel Leite",
  },
  {
    id: "2",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Diego Fernandes",
  },
  {
    id: "3",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Wagner Coche",
  },
  {
    id: "4",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Elias Gabriel",
  },
  {
    id: "5",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Cleiton Souza",
  },
  {
    id: "6",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Joseph Oliveira",
  },
  {
    id: "7",
    avatar: "https://github.com/miguel-leite-2000.png",
    name: "Mayk Brito",
  },
];

export function CreateCollection() {
  const [checkEveryone, setCheckEveryone] = useState<boolean>(false);

  const handleCheck = (id: string) => {
    return checkEveryone && id !== "users";
  };

  const handleCheckEveryone = () => {
    setCheckEveryone(!checkEveryone);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <ButtonAdd>Create collection</ButtonAdd>
        </SheetTrigger>
        <SheetContent className="bg-zinc-950 text-zinc-300 border-l-zinc-900">
          <SheetHeader>
            <SheetTitle className="text-xl text-zinc-50 font-bold">
              Create collection
            </SheetTitle>
            <SheetDescription className="text-zinc-500 text-xs">
              You can use collections to create upload groups with custom
              settings.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-10 flex flex-col gap-6 mb-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <Label
                  htmlFor="name"
                  className="text-sm text-zinc-50 font-medium"
                >
                  Collection name
                </Label>
                <Input
                  name="name"
                  className="bg-zinc-900/20 border-zinc-800 rounded-[8px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="name"
                className="text-sm text-zinc-50 font-medium"
              >
                Members
              </Label>
              <p className="text-sm text-zinc-500">
                Choose who will be able to see this collection
              </p>

              <div>
                <div className="flex items-center gap-1.5 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-full px-3 w-44 overflow-hidden">
                  <Search size={16} />
                  <Input name="name" className="border-none" />
                </div>

                <div className="grid grid-cols-2 gap-5 mt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="users"
                      className="rounded text-zinc-800  checked:text-zinc-50 checked:bg-blue-500 checked:border-transparent"
                      onCheckedChange={handleCheckEveryone}
                    />
                    <Label
                      htmlFor="users"
                      className={`flex items-center gap-2.5 text-sm text-zinc-50 font-medium ${
                        checkEveryone ? "text-zinc-300" : ""
                      }`}
                    >
                      <Image
                        src="/rocketseat.png"
                        className="rounded-full"
                        alt="Logo rocketseat"
                        width={24}
                        height={24}
                      />
                      Everyone
                    </Label>
                  </div>

                  {members.map((item) => (
                    <div className="flex items-center space-x-2" key={item.id}>
                      <Checkbox
                        id={item.id}
                        value={item.id}
                        className="rounded text-zinc-800  checked:text-zinc-50 checked:bg-blue-500 checked:border-transparent"
                        disabled={checkEveryone}
                      />
                      <Label
                        htmlFor={item.id}
                        className="flex items-center gap-2.5 text-sm text-zinc-50 font-medium"
                      >
                        <Image
                          src={item.avatar}
                          className="rounded-full"
                          alt="Logo rocketseat"
                          width={24}
                          height={24}
                        />
                        {item.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
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
      </Sheet>
    </>
  );
}
