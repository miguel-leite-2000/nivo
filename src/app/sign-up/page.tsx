"use client";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import Image from "next/image";
import Logo from "../../public/nivo.svg";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToastAction } from "@/components/ui/toast";

const FormSchema = z.object({
  company: z.string().nonempty({
    message: "Company is required",
  }),
  domain: z.string().nonempty({
    message: "Company is required",
  }),
  name: z.string().nonempty({
    message: "Company is required",
  }),
  email: z
    .string()
    .email({
      message: "Email is invalid",
    })
    .nonempty({
      message: "E-mail is required",
    }),
  password: z.string().nonempty({
    message: "Password is required",
  }),
  passwordConfirm: z.string().nonempty({
    message: "Password confirm is required",
  }),
});

export default function SignUp() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      company: "",
      domain: "",
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      className: "border-green-700 rounded-[8px] text-zinc-300 bg-green-800",
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-10 flex items-center justify-center">
      <Card className="w-[550px] border-zinc-900 rounded-[8px]">
        <CardHeader>
          <CardTitle className="text-xl text-zinc-50 font-bold">
            Sign Up
          </CardTitle>
          <CardDescription className="text-zinc-500 text-sm">
            Register your company to have access to the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4 text-zinc-300"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        Company
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        Domain
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        Full name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm text-zinc-50 font-medium mb-2.5">
                        Confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="bg-zinc-900/20 border-zinc-900 rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-0" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="px-3 py-1.5 mt-2 rounded-[6px] w-full bg-zinc-200 text-zinc-800 font-medium flex items-center gap-1.5 hover:bg-zinc-300 disabled:bg-zinc-300"
                disabled={loading}
              >
                {loading ?? <Loading />}
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex items-center justify-center flex-col gap-5">
          <Separator className="bg-zinc-900" />

          <Link href="/" className="w-full">
            <Button className="px-3 py-1.5 rounded-[6px] w-full bg-zinc-900 text-zinc-300 font-medium flex items-center gap-1.5 hover:bg-zinc-800 disabled:bg-zinc-800">
              Sign In
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
