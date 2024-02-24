'use client'
import { Plus } from "lucide-react";
import { forwardRef } from "react";
import { Button, ButtonProps } from "../ui/button";

type Props = ButtonProps;

// eslint-disable-next-line react/display-name
const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button {...props} ref={ref} />;
});

export function ButtonAdd(props: Props) {
  return (
    <ButtonComponent
      className="bg-teal-400 h-auto w-auto text-teal-950 text-xs px-2 py-1 rounded-xl flex gap-3 items-center justify-center font-medium transition hover:bg-teal-500"
      {...props}
    >
      <Plus size={12} />
      {props.children}
    </ButtonComponent>
  );
}
