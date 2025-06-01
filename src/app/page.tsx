import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Circle, MoreHorizontal, Paperclip } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-[700px] mt-60">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Minhas contas</h1>
          <p className="text-gray-600">
            Gerencie suas contas a pagar.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-xs font-semibold text-zinc-500">Contas 3/3</p>
        </div>
        <Button variant="ghost" className="h-8 cursor-pointer text-xs">
          Adicionar conta
        </Button>
      </div>

      <div className="flex flex-col space-y-0.5">
        <Card className="flex justify-center rounded-md shadow-none py-0.5 hover:bg-zinc-50 transition-colors duration-200">
          <CardContent className="flex justify-between items-center px-0.5">
            <div className="flex items-center space-x-2">
              <Button className="group bg-transparent border-none p-0 cursor-pointer hover:bg-transparent shadow-none">
                <Circle size={16} className="text-gray-400 group-hover:text-orange-500" />
              </Button>
              <CardTitle
                className="text-[13px] font-semibold min-w-[180px] truncate"
              >
                Cartão NuBank 5463
              </CardTitle>
            </div>

            <div className="flex items-center justify-center font-semibold space-x-1 text-xs">
              <p className="text-zinc-500 font-semibold">Vencimento</p>
              <div className="flex items-center space-x-1 bg-emerald-200/50 px-2 py-0.5 rounded-full">
                <span className="flex items-center justify-center relative size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                </span>
                <p className="text-emerald-950">17/07/2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-0.5">
              <Button variant="outline" className="group flex h-8 text-xs cursor-pointer bg-white hover:bg-white/95 text-zinc-600">
                <Paperclip className="group-hover:text-orange-500" />
                Comprovante
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" className="flex h-8 cursor-pointer">
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="cursor-pointer text-xs">Detalhes</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Editar</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Deletar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
        <Card className="flex justify-center rounded-md shadow-none py-0.5 hover:bg-zinc-50 transition-colors duration-200">
          <CardContent className="flex justify-between items-center px-0.5">
            <div className="flex items-center space-x-2">
              <Button className="group bg-transparent border-none p-0 cursor-pointer hover:bg-transparent shadow-none">
                <Circle size={16} className="text-gray-400 group-hover:text-orange-500" />
              </Button>
              <CardTitle
                className="text-[13px] font-semibold min-w-[180px] truncate"
              >
                Cartão Amazon
              </CardTitle>
            </div>

            <div className="flex items-center justify-center font-semibold space-x-1 text-xs">
              <p className="text-zinc-500 font-semibold">Vencimento</p>
              <div className="flex items-center space-x-1 bg-emerald-200/50 px-2 py-0.5 rounded-full">
                <span className="flex items-center justify-center relative size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                </span>
                <p className="text-emerald-950">25/07/2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-0.5">
              <Button variant="outline" className="group flex h-8 text-xs cursor-pointer bg-white hover:bg-white/95 text-zinc-600">
                <Paperclip className="group-hover:text-orange-500" />
                Comprovante
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" className="flex h-8 cursor-pointer">
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="cursor-pointer text-xs">Detalhes</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Editar</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Deletar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
        <Card className="flex justify-center rounded-md shadow-none py-0.5 hover:bg-zinc-50 transition-colors duration-200">
          <CardContent className="flex justify-between items-center px-0.5">
            <div className="flex items-center space-x-2">
              <Button className="group bg-transparent border-none p-0 cursor-pointer hover:bg-transparent shadow-none">
                <Circle size={16} className="text-gray-400 group-hover:text-orange-500" />
              </Button>
              <CardTitle
                className="text-[13px] font-semibold min-w-[180px] truncate"
              >
                Cartão Inter
              </CardTitle>
            </div>

            <div className="flex items-center justify-center font-semibold space-x-1 text-xs">
              <p className="text-zinc-500 font-semibold">Vencimento</p>
              <div className="flex items-center space-x-1 bg-emerald-200/50 px-2 py-0.5 rounded-full">
                <span className="flex items-center justify-center relative size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                </span>
                <p className="text-emerald-950">17/07/2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-0.5">
              <Button variant="outline" className="group flex h-8 text-xs cursor-pointer bg-white hover:bg-white/95 text-zinc-600">
                <Paperclip className="group-hover:text-orange-500" />
                Comprovante
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" className="flex h-8 cursor-pointer">
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="cursor-pointer text-xs">Detalhes</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Editar</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-xs">Deletar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
