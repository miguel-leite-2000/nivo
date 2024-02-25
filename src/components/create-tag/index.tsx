"use client";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ButtonAdd } from "../buttonAdd";
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
