'use client'

import { Fii } from '@/app/types/type'
import { NotePencil } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { EditFiiForm } from '../Forms/EditFiiForm'

type EditFiiDialogProps = {
  fii: Fii
}

export const EditFiiDialog = ({ fii }: EditFiiDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="hover:text-amber-600">
        <NotePencil size={24} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-lg bg-zinc-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex flex-col gap-1">
            <Dialog.Title className="text-xl font-bold text-zinc-300">
              Editar ativo
            </Dialog.Title>
            <Dialog.Description className="text-zinc-400">
              Modifique os campos que julgar necessário.
            </Dialog.Description>
          </div>

          <EditFiiForm fii={fii} />

          <div className="flex gap-3">
            <button
              form="NewFiiForm"
              type="submit"
              className="w-full rounded-lg border border-emerald-500 bg-emerald-500/70 p-4 font-bold text-zinc-200"
            >
              Editar
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
