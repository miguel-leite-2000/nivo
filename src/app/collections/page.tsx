import { CreditCard } from "lucide-react";

import { Activities } from "@/components/activities";
import { Badge } from "@/components/badge";
import { Collection } from "@/components/collection";
import { Navbar } from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import { CreateCollection } from "@/components/create-collection";

export default function Collections() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-10">
      <Navbar />

      <div className="container mt-12 flex items-start gap-16 pb-24">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <h1 className="text-xl text-zinc-50 font-bold">Collections</h1>
            <CreateCollection />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Collection
              avatar="https://github.com/miguel-leite-2000.png"
              numberOfLastUploadedVideos="uploaded 3 videos an hour ago"
              quantity={232}
              storage={65}
              title="Ignite"
              user="Miguel Leite"
              href="/uploads"
            />
            <Collection
              avatar="https://github.com/miguel-leite-2000.png"
              numberOfLastUploadedVideos="uploaded 12 videos one day ago"
              quantity={102}
              storage={23}
              title="Explorer"
              user="Elias"
              href="/uploads"
            />
            <Collection
              avatar="https://github.com/miguel-leite-2000.png"
              numberOfLastUploadedVideos="uploaded 11 videos an hour ago"
              quantity={273}
              storage={56}
              title="Digital House"
              user="Sebastian"
              href="/uploads"
            />
            <Collection
              avatar="https://github.com/miguel-leite-2000.png"
              numberOfLastUploadedVideos="uploaded 5 videos one month ago"
              quantity={84}
              storage={42}
              title="Events"
              user="Vinicius"
              href="/uploads"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-zinc-300 font-medium text-sm">Recent activity</h2>

          <div className="flex flex-col gap-8">
            <Activities />

            <div className="w-full h-[1px] bg-zinc-900" />

            <div className="bg-zinc-900/20 border-[1px] border-zinc-800 pt-5 rounded-[8px]">
              <div className="flex flex-col gap-6 px-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <strong className="text-lg text-white font-semibold">
                      Usage
                    </strong>
                    <Badge variant="primary">PRO</Badge>
                  </div>
                  <button className="rounded-xl px-2 py-1 bg-zinc-800 border-[1px] border-zinc-700 text-zinc-50 text-xs flex items-center gap-1.5 transition hover:bg-zinc-900">
                    <CreditCard size={12} />
                    Manage plan
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-zinc-300 font-medium">
                      Storage amount
                    </h3>
                    <p className="text-xs text-zinc-300">
                      2TB <span className="text-zinc-500">/ 6TB</span>
                    </p>
                  </div>
                  <div className="bg-zinc-900 w-full h-2 rounded-[42px]">
                    <Progress
                      value={100}
                      className="w-[45%] h-2 bg-teal-400 rounded-[42px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-zinc-300 font-medium">
                      Monthly bandwidth
                    </h3>
                    <p className="text-xs text-zinc-300">
                      23TB <span className="text-zinc-500">/ 50TB</span>
                    </p>
                  </div>
                  <div className="bg-zinc-900 w-full h-2 rounded-[42px]">
                    <Progress
                      value={100}
                      className="w-[60%] h-2 bg-teal-400 rounded-[42px]"
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 px-5 bg-zinc-950 rounded-bl-[8px] rounded-br-[8px] mt-6">
                <p className="text-xs text-zinc-500">
                  Your next payment is on{" "}
                  <span className="text-zinc-300">April 7th</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
