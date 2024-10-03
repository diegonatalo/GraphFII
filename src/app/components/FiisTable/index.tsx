'use client'

import { useStore } from '@/app/store'
import { DeleteDialog } from '../Dialogs/deleteFii'

export const FiisTable = () => {
  const { fiis } = useStore()

  return (
    <table className="w-full max-w-[700px]">
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
  )
}
