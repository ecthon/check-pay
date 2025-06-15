import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PaperclipIcon, Plus, Square } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col space-x-4 space-y-4 p-4 border rounded-lg bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Em aberto</h1>
        <Button className="group flex shrink-0 px-2 py-1 gap-1 text-xs h-[32px] cursor-pointer" variant="ghost">
          <Plus className="w-4 h-4" />
          Adicionar
        </Button>
      </div>

      <div className="flex flex-col w-[700px]">
        <Card className="flex justify-center w-full mx-auto p-0 text-[13px] rounded-none border-none shadow-none hover:bg-zinc-50 transition-colors duration-200">
          <CardContent className="py-1 px-4">
            <div className="hidden sm:flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Button className="group bg-transparent p-0 hover:bg-transparent shadow-none cursor-pointer" variant="ghost">
                    <Square className="size-4 text-muted-foreground bg-white group-hover:text-purple-600" />
                  </Button>
                  <h1 className="w-[220px] font-semibold truncate">Nome da Conta gramde pta teste com nome maior</h1>
                </div>
                <span className="px-2 text-[11px] rounded-full font-semibold bg-emerald-500/10 text-emerald-500">10/07/2025</span>
              </div>
              <Button className="group flex shrink-0 px-2 py-1 gap-1 text-xs h-[32px] hover:bg-white border bg-transparent shadow-none cursor-pointer transition-colors duration-200" variant="outline">
                <PaperclipIcon className="w-4 h-4 group-hover:text-purple-600" />
                Comprovante
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
