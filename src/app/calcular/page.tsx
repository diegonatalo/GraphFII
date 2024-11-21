import { MagicNumberForm } from '../components/Forms/MagicNumberForm'

export default function CalcularPage() {
  return (
    <main className="mx-auto flex w-full max-w-[600px] flex-col gap-8 p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-gray-300">
          Calculadora de número mágico
        </h1>
        <p className="text-gray-400">
          Para calcular o magic number, geralmente você define quanto quer
          receber por mês e divide esse valor pela média dos rendimentos mensais
          por cota do fundo. O resultado vai mostrar quantas cotas (e,
          consequentemente, quanto dinheiro) você precisaria investir para
          atingir esse objetivo de renda.
        </p>
      </div>

      <MagicNumberForm />
    </main>
  )
}
