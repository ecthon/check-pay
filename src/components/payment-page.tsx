import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { PaymentCard } from "./payment-card";

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
            <div className="flex w-full item-center justify-between">
                <h1 className="text-2xl font-bold">Junho</h1>
                <Button variant={"ghost"} className="cursor-pointer">
                    <Plus/>
                    Adiocionar
                </Button>
            </div>
            <div className="space-x-4 space-y-4 p-1 border rounded-lg">
                {cardsData.map((card) => (
                    <PaymentCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}