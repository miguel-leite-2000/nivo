import { ButtonAdd } from "@/components/buttonAdd";
import { FormTag } from "@/components/create-tag/form-tag";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FileDown,
  MoreHorizontal,
  Search,
  Tags,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Uploads() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-10">
      <Navbar />
      <Header />

      <section className="container mt-8">
        <div className="flex items-center gap-3">
          <h1 className="text-xl text-zinc-50 font-bold">Uploads</h1>
          <Link href="/uploads/create">
            <ButtonAdd>Upload video</ButtonAdd>
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 text-zinc-500 rounded-full border border-dashed border-zinc-700 bg-zinc-900/20 overflow-hidden">
              <Search size={16} />
              <Input
                placeholder="Search uploads"
                className="border-none text-sm py-1.5"
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button className="px-3 py-1.5 text-zinc-500 border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center gap-1.5 rounded-full transition hover:bg-zinc-900">
                  <Tags size={16} />
                  Tags
                </button>
              </SheetTrigger>
              <FormTag />
            </Sheet>
          </div>

          <button className="px-2.5 py-1.5 flex items-center gap-1.5 rounded-[6px] border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs transition hover:bg-zinc-950">
            <FileDown size={16} />
            Export
          </button>
        </div>

        <div className="mt-5">
          <Table className="border-zinc-800 border-t-[2px] border-b-[2px]">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow className="text-sm font-medium text-zinc-300 border-zinc-800">
                <TableHead className="flex items-center gap-5">
                  <Checkbox
                    id="video"
                    className="rounded text-zinc-800 checked:text-teal-500"
                  />
                  <Label htmlFor="video">Video</Label>
                </TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uploaded at</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-zinc-500 text-sm">
              <TableRow className="border-zinc-800">
                <TableCell className="flex items-center gap-5">
                  <Checkbox
                    id="video"
                    className="rounded text-zinc-800 checked:text-teal-500"
                  />
                  <div className="flex flex-col gap-1">
                    <strong className="text-sm font-medium text-zinc-300">
                      Criando seed com Drizzle
                    </strong>
                    <p className="text-zinc-500 text-xs">
                      faba4daa-f7ef-483f-82ab-20f05d3d0de1
                    </p>
                  </div>
                </TableCell>
                <TableCell>12:37</TableCell>
                <TableCell>90.73 MB</TableCell>
                <TableCell>
                  <div className="flex">
                    <div className="px-2 py-1 bg-teal-950 rounded-full text-teal-400 font-semibold text-[0.625rem]">
                      READY
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://github.com/miguel-leite-2000.png"
                      width={16}
                      height={16}
                      alt="Miguel Leite"
                      className="rounded-full"
                    />
                    7 days ago
                  </div>
                </TableCell>
                <TableCell>
                  <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                    <MoreHorizontal />
                  </button>
                </TableCell>
              </TableRow>

              <TableRow className="border-zinc-800">
                <TableCell className="flex items-center gap-5">
                  <Checkbox
                    id="video"
                    className="rounded text-zinc-800 checked:text-teal-500"
                  />
                  <div className="flex flex-col gap-1">
                    <strong className="text-sm font-medium text-zinc-300">
                      Criando seed com Drizzle
                    </strong>
                    <p className="text-zinc-500 text-xs">
                      faba4daa-f7ef-483f-82ab-20f05d3d0de1
                    </p>
                  </div>
                </TableCell>
                <TableCell>12:37</TableCell>
                <TableCell>90.73 MB</TableCell>
                <TableCell>
                  <div className="flex">
                    <div className="px-2 py-1 bg-yellow-950 rounded-full text-yellow-400 font-semibold text-[0.625rem] flex items-center gap-1">
                      PROCESSING
                      <Loading size="2" />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://github.com/miguel-leite-2000.png"
                      width={16}
                      height={16}
                      alt="Miguel Leite"
                      className="rounded-full"
                    />
                    7 days ago
                  </div>
                </TableCell>
                <TableCell>
                  <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                    <MoreHorizontal />
                  </button>
                </TableCell>
              </TableRow>

              <TableRow className="border-zinc-800">
                <TableCell className="flex items-center gap-5">
                  <Checkbox
                    id="video"
                    className="rounded text-zinc-800 checked:text-teal-500"
                  />
                  <div className="flex flex-col gap-1">
                    <strong className="text-sm font-medium text-zinc-300">
                      Criando seed com Drizzle
                    </strong>
                    <p className="text-zinc-500 text-xs">
                      faba4daa-f7ef-483f-82ab-20f05d3d0de1
                    </p>
                  </div>
                </TableCell>
                <TableCell>12:37</TableCell>
                <TableCell>90.73 MB</TableCell>
                <TableCell>
                  <div className="flex">
                    <div className="px-2 py-1 bg-red-950 rounded-full text-red-400 font-semibold text-[0.625rem]">
                      ERROR
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://github.com/miguel-leite-2000.png"
                      width={16}
                      height={16}
                      alt="Miguel Leite"
                      className="rounded-full"
                    />
                    7 days ago
                  </div>
                </TableCell>
                <TableCell>
                  <button className="px-1.5 py-1.5 rounded-[6px] text-zinc-300 border-[1px] border-zinc-800">
                    <MoreHorizontal />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex items-center justify-between text-zinc-500 text-sm p-4">
            <p>Showing 10 of 228 items</p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <p className="text-zinc-500 text-sm">Rows per page</p>
                <select className="bg-zinc-900/20 border border-zinc-800 rounded-[6px] py-1.5 px-3 selection:text-white text-zinc-600">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
              </div>
              <p>Page 1 of 11</p>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded-[6px] bg-zinc-900 text-zinc-300 border border-zinc-800 opacity-60">
                  <ChevronsLeft size={16} />
                </button>
                <button className="p-1.5 rounded-[6px] bg-zinc-900 text-zinc-300 border border-zinc-800 opacity-60">
                  <ChevronLeft size={16} />
                </button>

                <button className="p-1.5 rounded-[6px] bg-zinc-900 text-zinc-300 border border-zinc-800">
                  <ChevronRight size={16} />
                </button>
                <button className="p-1.5 rounded-[6px] bg-zinc-900 text-zinc-300 border border-zinc-800">
                  <ChevronsRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
