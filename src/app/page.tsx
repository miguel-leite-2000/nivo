"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import Logo from "../../public/nivo.svg";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handle() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/collections");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-10 flex items-center justify-center">
      <Card className="w-[350px] border-zinc-900 rounded-[8px]">
        <CardHeader>
          <CardTitle className="text-xl text-zinc-50 font-bold">
            Sign In
          </CardTitle>
          <CardDescription className="text-zinc-500 text-sm">
            Enter your credentials to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 text-zinc-300">
              <div className="flex flex-col gap-2.5">
                <Label
                  htmlFor="email"
                  className="text-sm text-zinc-50 font-medium"
                >
                  E-mail
                </Label>
                <Input
                  name="email"
                  className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <Label
                  htmlFor="password"
                  className="text-sm text-zinc-50 font-medium"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center flex-col gap-5">
          <Button
            onClick={handle}
            className="px-3 py-1.5 rounded-[6px] w-full bg-zinc-200 text-zinc-800 font-medium flex items-center gap-1.5 hover:bg-zinc-300 disabled:bg-zinc-300"
            disabled={loading}
          >
            {loading ?? <Loading />}
            Sign In
          </Button>

          <Separator className="bg-zinc-900" />

          <Link href="/sign-up" className="w-full">
            <Button className="px-3 py-1.5 rounded-[6px] w-full bg-zinc-900 text-zinc-300 font-medium flex items-center gap-1.5 hover:bg-zinc-800 disabled:bg-zinc-800">
              Sign up
            </Button>
          </Link>

          <p className="text-zinc-500 text-sm">
            Forgot your password?{" "}
            <Link href="#" className="text-zinc-200 font-medium">
              Click here.
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
