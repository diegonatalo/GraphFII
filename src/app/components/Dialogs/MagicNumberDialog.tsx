import { Calculator } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { MagicNumberForm } from '../Forms/MagicNumberForm'

export const MagicNumberDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-lg bg-orange-500 p-2 text-white opacity-90 transition-opacity hover:opacity-100">
        <Calculator size={44} weight="bold" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-lg bg-zinc-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex flex-col gap-1">
            <Dialog.Title className="text-xl font-bold text-zinc-300">
              Calculadora de número mágico
            </Dialog.Title>
            <Dialog.Description className="text-zinc-400">
              Para calcular o magic number, geralmente você define quanto quer
              receber por mês e divide esse valor pela média dos rendimentos
              mensais por cota do fundo. O resultado vai mostrar quantas cotas
              (e, consequentemente, quanto dinheiro) você precisaria investir
              para atingir esse objetivo de renda.
            </Dialog.Description>
          </div>

          <MagicNumberForm />

          <div className="flex gap-3">
            <button
              form="magic-number"
              type="submit"
              className="w-full rounded-lg border border-emerald-500 bg-emerald-500/70 p-4 font-bold text-zinc-200"
            >
              Calcular
            </button>
            <Dialog.Close className="w-full rounded-lg border border-zinc-700 bg-zinc-300 p-4 font-bold text-zinc-900">
              Cancelar
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
