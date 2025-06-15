import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MoreHorizontal, PaperclipIcon, Plus, Square } from "lucide-react"

const cardsData = [
  {
    id: 1,
    nome: "Nome da Conta grande para teste com nome maior",
    data: "10/07/2025",
    status: "pendente",
  },
  {
    id: 2,
    nome: "Conta de Energia Elétrica - Residencial",
    data: "15/07/2025",
    status: "vencendo",
  },
  {
    id: 3,
    nome: "Financiamento Imobiliário - Apartamento",
    data: "05/07/2025",
    status: "vencido",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-[700px] space-x-4 space-y-4 p-1 border rounded-lg">
      {cardsData.map((card) => (
        <Card key={card.id} className="flex justify-center w-full mx-auto p-0 text-[13px] rounded-[6px] border-none shadow-none hover:bg-zinc-50 transition-colors duration-200">
          <CardContent className="py-1 px-4">
            <div className="hidden sm:flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Button className="group bg-transparent p-0 hover:bg-transparent shadow-none cursor-pointer" variant="ghost">
                    <Square className="size-4 text-muted-foreground rounded-xs bg-white group-hover:text-purple-600" />
                  </Button>
                  <h1 className="w-[220px] font-semibold truncate">{card.nome}</h1>
                </div>
                <span className="px-2 text-[11px] rounded-full font-semibold bg-emerald-500/10 text-emerald-500">{card.data}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button className="group flex shrink-0 px-2 py-1 gap-1 text-xs h-[32px] hover:bg-white border bg-transparent shadow-none cursor-pointer transition-colors duration-200" variant="outline">
                  <PaperclipIcon className="w-4 h-4 group-hover:text-purple-600" />
                  Comprovante
                </Button>
                <Button className="group flex shrink-0 px-2 py-1 gap-1 text-xs h-[32px] hover:bg-zinc-200 bg-transparent shadow-none cursor-pointer transition-colors duration-200" variant="ghost">
                  <MoreHorizontal className="w-4 h-4 group-hover:text-zinc-800" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {/* </div> */}
    </div>
  )
}
