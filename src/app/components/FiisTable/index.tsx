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
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400"></th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Ticker
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Tipo
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Segmento
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Quant. cotas
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Valor investido
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400">
                Preço médio
              </th>
              <th className="sticky top-0 bg-gray-950 p-4 text-gray-400"></th>
            </tr>
          </thead>

          <tbody>
            {fiis.map((fii, i) => (
              <tr key={fii.nome} className="hover:bg-gray-900">
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {i + 1}
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  <a
                    href={`https://investidor10.com.br/fiis/${fii.nome.toLowerCase()}/`}
                    target="_blank"
                  >
                    {fii.nome}
                  </a>
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {fii.tipo}
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {fii.segmento || '-'}
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {fii.quantCotas}
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {TransformaEmReais(fii.valorInvestido)}
                </td>
                <td className="border-t border-gray-800 p-4 text-center text-gray-200">
                  {TransformaEmReais(fii.valorInvestido / fii.quantCotas)}
                </td>
                <td className="flex items-center justify-center gap-4 border-t border-gray-800 p-4 text-center text-gray-200">
                  <EditFiiDialog fii={fii} />

                  <DeleteFiiDialog ticker={fii.nome} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <section className="flex w-full flex-col items-center gap-4">
          <MagicWand className="text-gray-400" size={36} />
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-xl font-bold text-gray-400">
              Você não têm nenhum ativo cadastrado!
            </h1>
            <p className="text-gray-500">
              Tente adicionar um novo ativo e veja a mágica acontecer.
            </p>
          </div>
        </section>
      )}
    </>
  )
}
