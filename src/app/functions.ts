import { Fii, FiiAgrupado } from './types/type'

function OrdenarFiis(data: Fii[] | FiiAgrupado[]) {
  return data.sort((a, b) => b.valorInvestido - a.valorInvestido)
}

function FormatarFiis(array: Fii[] | FiiAgrupado[]) {
  const labels = array.map((item) => item.ticker)
  const data = array.map((item) => item.valorInvestido)

  return { labels, data }
}

export const GenerateChartData = (fiis: Fii[]) => {
  const fiisOrdenados = OrdenarFiis(fiis)

  return FormatarFiis(fiisOrdenados)
}

export function SepararArrayPorTipo(data: Fii[]) {
  const arraySeparado = data.reduce<FiiAgrupado[]>((acc, fii) => {
    const { tipo, valorInvestido } = fii

    const itemExistente = acc.find((item) => item.ticker === tipo)

    if (itemExistente) {
      itemExistente.valorInvestido += valorInvestido
    } else {
      acc.push({ ticker: tipo, valorInvestido })
    }

    return acc
  }, [])

  const arrayOrdenado = OrdenarFiis(arraySeparado)

  return FormatarFiis(arrayOrdenado)
}

export function groupBySegment(fiis: Fii[]) {
  const arraySeparado = fiis
    .filter((fii) => fii.segmento)
    .reduce((acc, fii) => {
      const existingSegment = acc.find((item) => item.ticker === fii.segmento)

      if (existingSegment) {
        existingSegment.valorInvestido += fii.valorInvestido
      } else {
        acc.push({
          ticker: fii.segmento!,
          valorInvestido: fii.valorInvestido
        })
      }

      return acc
    }, [] as FiiAgrupado[])

  const arrayOrdenado = OrdenarFiis(arraySeparado)

  return FormatarFiis(arrayOrdenado)
}

export const TransformaEmReais = (valor: number) => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
