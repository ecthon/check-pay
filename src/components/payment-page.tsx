import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { PaymentCard } from "./payment-card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

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

export function PaymentPage() {
    return(
        <div className="flex flex-col w-[700px] mx-auto mt-10 space-y-4">
            <Dialog>
              <div className="flex w-full item-center justify-between">
                  <h1 className="text-2xl font-bold">Junho</h1>
                  <DialogTrigger asChild>
                    <Button variant={"ghost"} className="cursor-pointer bg-zinc-100">
                        <Plus/>
                        Adiocionar
                    </Button>
                  </DialogTrigger>
              </div>
              <form>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Nova conta</DialogTitle>
                    <DialogDescription>
                      Adicione uma nova conta para acompanhamento.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Título</Label>
                      <Input id="name-1" name="name" defaultValue="Cartão Bank" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username-1">Username</Label>
                      <Input id="username-1" name="username" defaultValue="@peduarte" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Cadastrar</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
            <div className="space-x-4 space-y-4 p-1 border rounded-lg">
                {cardsData.map((card) => (
                    <PaymentCard key={card.id} {...card} />
                ))}
            </div>

        </div>
    )
}