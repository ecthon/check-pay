import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PaperclipIcon, Square } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col w-[700px]">
      <Card className="flex justify-center w-full mt-40 mx-auto p-0 text-[13px] shadow-none border border-muted rounded-[6px]">
        <CardContent className="py-1 px-4">
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-muted-foreground" />
                <h1 className="w-[220px] font-semibold truncate">Nome da Conta gramde pta teste com nome maior</h1>
              </div>
              <span className="px-2 text-[11px] font-semibold rounded-full bg-green-200">10/07/2025</span>
            </div>
            <Button className="flex shrink-0 h-[28px] px-2 py-1 gap-1 text-xs shadow-none cursor-pointer" variant="outline">
              <PaperclipIcon className="w-4 h-4" />
              Comprovante
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
