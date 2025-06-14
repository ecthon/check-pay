"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, MoreHorizontal, Paperclip, Square } from "lucide-react"

const accounts = [
  {
    id: 1,
    name: "Cartão NuBank 5463 Com o nome grande para testar o tamanho do texto",
    dueDate: "17/07/2025",
    status: "pending",
  },
  // {
  //   id: 2,
  //   name: "Cartão Itaú 1234",
  //   dueDate: "22/07/2025",
  //   status: "pending",
  // },
  // {
  //   id: 3,
  //   name: "Financiamento Imóvel",
  //   dueDate: "30/07/2025",
  //   status: "overdue",
  // },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[700px] mt-60 px-4 sm:px-0">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Minhas contas</h1>
          <p className="text-gray-400">Gerencie suas contas a pagar.</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-xs font-semibold text-zinc-500">
            Contas {accounts.length}/{accounts.length}
          </p>
        </div>
        <Button variant="ghost" className="h-[28px] cursor-pointer text-xs">
          Adicionar conta
        </Button>
      </div>

      {/* Header da tabela */}
      <div className="grid grid-cols-[40px_1fr_120px_auto] sm:grid-cols-[40px_180px_120px_1fr] items-center py-2 px-4 gap-4 text-xs font-semibold text-zinc-500 border-b">
        <div>#</div>
        <div>Nome</div>
        <div className="hidden sm:block">Data de vencimento</div>
      </div>

      <div className="flex flex-col">
        {accounts.map((account, index) => (
          <div key={account.id}>
            <Card className="hover:bg-accent rounded-sm shadow-none transition-colors duration-200 border-0 cursor-pointer py-0">
              <CardContent className="grid grid-cols-[40px_1fr_120px_auto] sm:grid-cols-[40px_180px_120px_1fr] items-center py-1 px-4 gap-4">
                <div className="flex items-center">
                  {/* <Button className="text-zinc-400 p-0 hover:text-zinc-600 cursor-pointer" variant="ghost">
                    <Square className="text-zinc-400 size-4" />
                  </Button> */}
                  <span className="text-xs font-semibold text-zinc-400 ml-2">0{account.id}</span>
                </div>

                <div className="truncate">
                  <CardTitle className="text-[13px] font-semibold truncate">{account.name}</CardTitle>
                </div>

                <div className="hidden sm:block">
                  <div className="flex items-center space-x-1 bg-emerald-200/50 px-2 py-0.5 rounded-full">
                    <span className="flex items-center justify-center relative size-2">
                      <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <p className="text-emerald-500 text-xs font-semibold">{account.dueDate}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-1">
                  <Button
                    variant="outline"
                    className="group flex h-[28px] text-xs cursor-pointer shadow-none bg-white hover:bg-white/95 text-zinc-600"
                  >
                    <Paperclip className="group-hover:text-orange-500" />
                    <span className="hidden sm:inline ml-1">Comprovante</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="group flex h-[28px] text-xs cursor-pointer shadow-none bg-white hover:bg-white/95 text-zinc-600"
                  >
                    <MoreHorizontal className="group-hover:text-orange-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            {index < accounts.length - 1 && <Separator orientation="horizontal" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[100px_1fr_150px_100px] w-full gap-4 px-4 py-2">
        <p className="bg-amber-600"></p>
        <p className="w-full">Nome</p>
        <p>Data de vencimento</p>
        <p className="col-span-1 text-transparent bg-orange-600">Ações</p>
      </div>
      
      {/* Content da tabela */}
      <div className="grid grid-cols-[100px_1fr_150px_100px] w-full gap-4 px-4 py-2">
        <div className="col-span-1 bg-amber-300 flex items-center gap-2">
          <Button className="flex cursor-pointer" variant="ghost">
            <Square className="text-zinc-400 size-4" />
          </Button>
          <p>01</p>
        </div>
        <p className="w-full">Cartão NuBank 5436</p>
        <p>17/08/2025</p>
        <p>Comprovante</p>  
      </div>
    </div>
  )
}
