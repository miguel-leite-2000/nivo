import { Plus } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonAdd(props: Props) {
  return (
    <button
      className="bg-teal-400 text-teal-950 text-xs px-2 py-1 rounded-xl flex gap-3 items-center justify-center font-medium transition hover:bg-teal-500"
      {...props}
    >
      <Plus size={12} />
      {props.children}
    </button>
  );
}
