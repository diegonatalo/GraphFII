'use client'

import { useStore } from '@/app/store'
import { Trash } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

type DeleteDialogProps = {
  ticker: string
}

export const DeleteDialog = ({ ticker }: DeleteDialogProps) => {
  const { removeFii } = useStore()

  return (
    <Dialog.Root>
      <Dialog.Trigger className="hover:text-red-600">
        <Trash size={24} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/70" /> 
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-16 rounded-lg bg-zinc-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="flex flex-col gap-1">
            <Dialog.Title className="text-xl font-bold text-zinc-300">
              Deletar ativo
            </Dialog.Title>
            <Dialog.Description className="text-zinc-400">
              Você têm certeza que deseja excluir esse ativo?
            </Dialog.Description>
          </div>

          <div className="flex gap-3">
            <button
              className="w-full rounded-lg border border-red-500 bg-red-500/70 p-4 font-bold text-zinc-300"
              onClick={() => removeFii(ticker)}
            >
              Deletar
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
