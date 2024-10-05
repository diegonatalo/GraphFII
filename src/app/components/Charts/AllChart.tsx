'use client'

import { backgroundColor, borderColor } from '@/app/consts'
import {
  GenerateAllChartData,
  OrdenarArray,
  TransformaEmReais
} from '@/app/functions'
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
        cutout: 90,
        plugins: {
          tooltip: {
            position: 'average',
            callbacks: {
              label: (item) => {
                const somaTotal = data.reduce((acc, num) => acc + num, 0)
                const percentual =
                  (parseFloat(item.formattedValue) / somaTotal) * 100
                return (
                  percentual.toFixed(2).toString() +
                  '% do valor investido: ' +
                  TransformaEmReais(
                    parseFloat(item.formattedValue.replace(',', '.'))
                  )
                )
              }
            }
          }
        }
      }}
    />
  )
}
