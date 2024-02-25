"use client";
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
import { Check } from "lucide-react";
import { FormTag } from "./form-tag";

export function CreateTag() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <ButtonAdd>Create tag</ButtonAdd>
        </SheetTrigger>
        <FormTag />
      </Sheet>
    </>
  );
}
