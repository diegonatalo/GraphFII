'use client'

import { borderColor } from '@/app/consts'
import { groupBySegment, TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const SegmentChart = () => {
  const { fiis } = useStore()

  const { labels, data } = groupBySegment(fiis)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Valor aplicado',
        data,
        backgroundColor: [
          '#ef4444',
          '#f43f5e',
          '#ec4899',
          '#d946ef',
          '#a855f7',
          '#8b5cf6',
          '#6366f1'
        ].reverse(),
        borderColor,
        borderWidth: 4
      }
    ]
  }

  return (
    <Doughnut
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
  )
}
