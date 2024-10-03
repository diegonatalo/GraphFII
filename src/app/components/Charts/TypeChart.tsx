'use client'

import {
  GenerateTypeChartData,
  OrdenarArrayDeTipos,
  SepararArrayPorTipo
} from '@/app/functions'
import { useStore } from '@/app/store'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const TypeChart = () => {
  const { fiis } = useStore()

  const fiisSeparadosPorTipo = SepararArrayPorTipo(fiis)
  const fiisOrdenados = OrdenarArrayDeTipos(fiisSeparadosPorTipo)
  const { labels, data } = GenerateTypeChartData(fiisOrdenados)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Valor aplicado',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <div className="w-[400px] p-4">
      <Doughnut data={chartData} />
    </div>
  )
}
