"use client";

import Image from "next/image";
import Logo from "../../public/nivo.svg";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  function handle() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/collections")
    }, 2000)

  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-10">
      <div className="mx-auto mt-56 w-[25rem] flex flex-col gap-8">
        <Image src={Logo} alt="Logo Nivo" />
        <h1 className="text-xl font-bold text-zinc-50">
          Redefining video content
        </h1>
        <p className="text-base text-zinc-300">
          <span className="font-medium text-zinc-100">
            Nivo offers a comprehensive video solution tailored for online
            content creators,{" "}
          </span>
          emphasizing seamless developer integration, transparent pricing, and
          exceptional user experience.
        </p>
        <Button
          onClick={handle}
          className="px-3 py-1.5 rounded-[6px] bg-zinc-200 text-zinc-800 font-medium flex items-center gap-1.5 hover:bg-zinc-300 disabled:bg-zinc-300"
          disabled={loading}
        >
          { loading ? <Loading />: <Github size={16} />}
          Entrar com github
        </Button>
      </div>
    </main>
  );
}
