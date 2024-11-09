'use client'

import { backgroundColor3, borderColor } from '@/app/consts'
import { SepararArrayPorTipo, TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const TypeChart = () => {
  const { fiis, totalAmount } = useStore()

  const { labels, data } = SepararArrayPorTipo(fiis)

  const chartData = {
    options: {
      cutoutPercentage: 90
    },
    labels,
    datasets: [
      {
        label: '# do valor investido',
        data,
        backgroundColor: backgroundColor3,
        borderColor,
        borderWidth: 2
      }
    ]
  }

  return (
    <div className="flex w-full rounded-lg bg-gray-900/50 p-8">
      <div className="flex w-full items-center justify-center">
        <Doughnut
          className="max-h-[20rem] max-w-[20rem]"
          data={chartData}
          options={{
            cutout: 110,
            plugins: {
              tooltip: {
                position: 'average',
                callbacks: {
                  label: (item) => {
                    const somaTotal = data.reduce((acc, num) => acc + num, 0)
                    const percentual = ((item.raw as number) / somaTotal) * 100
                    return (
                      percentual.toFixed(2).toString().replace('.', ',') +
                      '%  |  ' +
                      TransformaEmReais(item.raw as number)
                    )
                  }
                }
              }
            }
          }}
        />
      </div>

      <div className="flex w-full flex-col justify-center">
        <h1 className="text-lg font-bold text-gray-200">
          Diversificação por tipo
        </h1>
        <table className="w-full font-bold text-gray-300">
          <tbody>
            {labels.map((item, i) => (
              <tr key={item}>
                <td className="w-[20%]">
                  <span>{item}</span>
                </td>
                <td className="flex items-center gap-2 p-3">
                  <div
                    className="h-4 rounded-lg"
                    style={{
                      width: `${(data[i] / totalAmount) * 90}%`,
                      backgroundColor: backgroundColor3[i]
                    }}
                  />
                  <span>
                    {((data[i] / totalAmount) * 100)
                      .toFixed(2)
                      .toString()
                      .replace('.', ',') +
                      '%  |  ' +
                      TransformaEmReais(data[i])}
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
