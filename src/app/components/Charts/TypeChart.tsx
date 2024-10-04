'use client'

import { borderColor } from '@/app/consts'
import {
  GenerateTypeChartData,
  OrdenarArrayDeTipos,
  SepararArrayPorTipo
} from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const TypeChart = () => {
  const { fiis } = useStore()

  const fiisSeparadosPorTipo = SepararArrayPorTipo(fiis)
  const fiisOrdenados = OrdenarArrayDeTipos(fiisSeparadosPorTipo)
  const { labels, data } = GenerateTypeChartData(fiisOrdenados)

  const chartData = {
    options: {
      cutoutPercentage: 80
    },
    labels,
    datasets: [
      {
        label: 'Valor aplicado',
        data,
        backgroundColor: ['#06b6d4', '#22c55e', '#f97316'],
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
