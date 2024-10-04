'use client'

import { backgroundColor, borderColor } from '@/app/consts'
import { GenerateAllChartData, OrdenarArray } from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const AllChart = () => {
  const { fiis } = useStore()

  const fiisOrdenados = OrdenarArray(fiis)
  const { labels, data } = GenerateAllChartData(fiisOrdenados)

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
    <Doughnut
      data={chartData}
      options={{
        cutout: 70
      }}
    />
  )
}
