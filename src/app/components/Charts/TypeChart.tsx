'use client'

import { bg2, borderColor } from '@/app/consts'
import { SepararArrayPorTipo, TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const TypeChart = () => {
  const { fiis, totalAmount } = useStore()
  const { labels, data } = SepararArrayPorTipo(fiis)

  const percentuais = data.map(
    (item) =>
      ((item / totalAmount) * 100).toFixed(2).toString().replace('.', ',') + '%'
  )

  const chartData = {
    options: {
      cutoutPercentage: 90
    },
    labels,
    datasets: [
      {
        label: '# do valor investido',
        data,
        backgroundColor: bg2,
        borderWidth: 2,
        borderColor
      }
    ]
  }

  return (
    <div className="flex w-full rounded-lg bg-zinc-900/50 p-8">
      <div className="flex w-full justify-center">
        <Doughnut
          className="max-h-[20rem] max-w-[20rem]"
          data={chartData}
          options={{
            cutout: 110,
            plugins: {
              tooltip: {
                position: 'average',
                callbacks: {
                  label: (item) =>
                    percentuais[item.dataIndex] +
                    ' (' +
                    TransformaEmReais(item.raw as number) +
                    ')'
                }
              }
            }
          }}
        />
      </div>

      <div className="flex w-full flex-col justify-center gap-4">
        <h1 className="text-lg font-bold text-zinc-200">
          Diversificação por tipo
        </h1>
        <table className="w-full font-bold text-zinc-300">
          <tbody>
            {labels.map((item, i) => (
              <tr key={item} className="hover:bg-zinc-800/50">
                <td className="w-[20%] px-4 py-2">
                  <span>{item}</span>
                </td>
                <td className="flex items-center gap-2 py-2">
                  <div
                    className="h-4 rounded-lg"
                    style={{
                      width: `${(data[i] / totalAmount) * 90}%`,
                      backgroundColor: bg2[i]
                    }}
                  />
                  <span>
                    {percentuais[i] + ' (' + TransformaEmReais(data[i]) + ')'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
