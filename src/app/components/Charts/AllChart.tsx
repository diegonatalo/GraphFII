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

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Valor aplicado',
        data,
        backgroundColor,
        borderColor,
        borderWidth: 4
      }
    ]
  }

  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-zinc-900/50 p-8 pr-16">
      <div>
        <Doughnut
          className="w-[14rem]"
          data={chartData}
          options={{
            cutout: 80,
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

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-zinc-200">Total investido</h1>
        <span className="text-3xl text-zinc-300">
          {TransformaEmReais(totalAmount)}
        </span>
      </div>
    </div>
  )
}
