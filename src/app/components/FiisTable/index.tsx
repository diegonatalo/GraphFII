'use client'

import { useStore } from '@/app/store'
import { MagicWand } from '@phosphor-icons/react'
import { DeleteDialog } from '../Dialogs/deleteFii'

export const FiisTable = () => {
  const { fiis } = useStore()

  return (
    <>
      {fiis.length > 0 ? (
        <table className="w-full max-w-[800px]">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Tipo</th>
              <th>Segmento</th>
              <th>Valor investido</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {fiis.map((fii) => (
              <tr key={fii.ticker}>
                <td>{fii.ticker}</td>
                <td>{fii.type}</td>
                <td>{fii.segment || '-'}</td>
                <td>
                  {fii.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </td>
                <td className="flex items-center justify-center border-none">
                  <DeleteDialog ticker={fii.ticker} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <section className="flex w-full flex-col items-center gap-4">
          <MagicWand className="text-zinc-400" size={36} />
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-xl font-bold text-zinc-400">
              Você não têm nenhum ativo cadastrado!
            </h1>
            <p className="text-zinc-500">
              Tente adicionar um novo ativo e veja a mágica acontecer.
            </p>
          </div>
        </section>
      )}
    </>
  )
}
