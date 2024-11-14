'use client'

import { backgroundColor, borderColor } from '@/app/consts'
import { GenerateChartData, TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const AllChart = () => {
  const { fiis, totalAmount } = useStore()
  const { labels, data } = GenerateChartData(fiis)

  const percentuais = data.map(
    (item) =>
      ((item / totalAmount) * 100).toFixed(2).toString().replace('.', ',') + '%'
  )

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Valor aplicado',
        data,
        backgroundColor,
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

      <div className="flex w-full flex-col justify-center gap-1">
        <h1 className="text-xl font-bold text-gray-200">Ranking de posições</h1>
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
                      backgroundColor: backgroundColor[i]
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
