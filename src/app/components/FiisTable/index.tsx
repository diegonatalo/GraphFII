'use client'

import { TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { MagicWand } from '@phosphor-icons/react'
import { DeleteFiiDialog } from '../Dialogs/DeleteFiiDialog'
import { EditFiiDialog } from '../Dialogs/EditFiiDialog'

export const FiisTable = () => {
  const { fiis } = useStore()

  return (
    <>
      {fiis.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              <th>Ticker</th>
              <th>Tipo</th>
              <th>Segmento</th>
              <th>Valor investido</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {fiis.map((fii, i) => (
              <tr key={fii.ticker}>
                <td>{i + 1}</td>
                <td>
                  <a
                    className="underline"
                    href={`https://investidor10.com.br/fiis/${fii.ticker.toLowerCase()}/`}
                    target="_blank"
                  >
                    {fii.ticker}
                  </a>
                </td>
                <td>{fii.type}</td>
                <td>{fii.segment || '-'}</td>
                <td>{TransformaEmReais(fii.amount)}</td>
                <td className="flex items-center justify-center gap-4 border-none">
                  <EditFiiDialog fii={fii} />

                  <DeleteFiiDialog ticker={fii.ticker} />
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
