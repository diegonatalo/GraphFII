'use client'

import { borderColor } from '@/app/consts'
import {
  GenerateTypeChartData,
  OrdenarArrayDeTipos,
  SepararArrayPorTipo,
  TransformaEmReais
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
        label: '# do valor investido',
        data,
        backgroundColor: ['#0ea5e9', '#22c55e', '#f97316'],
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
