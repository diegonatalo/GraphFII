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
        <table className="relative w-full">
          <thead>
            <tr>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400"></th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Ticker
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Tipo
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Segmento
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Quant. cotas
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Valor investido
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400">
                Preço médio
              </th>
              <th className="sticky top-0 bg-zinc-950 p-4 text-zinc-400"></th>
            </tr>
          </thead>

          <tbody>
            {fiis.map((fii, i) => (
              <tr key={fii.ticker} className="hover:bg-zinc-900">
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {i + 1}
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  <a
                    href={`https://investidor10.com.br/fiis/${fii.ticker.toLowerCase()}/`}
                    target="_blank"
                  >
                    {fii.ticker}
                  </a>
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {fii.tipo}
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {fii.segmento || '-'}
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {fii.quantCotas}
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {TransformaEmReais(fii.valorInvestido)}
                </td>
                <td className="border-t border-zinc-800 p-4 text-center text-zinc-200">
                  {TransformaEmReais(fii.valorInvestido / fii.quantCotas)}
                </td>
                <td className="flex items-center justify-center gap-4 border-t border-zinc-800 p-4 text-center text-zinc-200">
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
