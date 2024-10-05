import { Fii, FiiAgrupado } from './type'

function OrdenarFiis(data: Fii[] | FiiAgrupado[]) {
  return data.sort((a, b) => b.amount - a.amount)
}

function FormatarFiis(array: Fii[] | FiiAgrupado[]) {
  const labels = array.map((item) => item.ticker)
  const data = array.map((item) => item.amount)

  return { labels, data }
}

export const GenerateChartData = (fiis: Fii[]) => {
  const fiisOrdenados = OrdenarFiis(fiis)

  return FormatarFiis(fiisOrdenados)
}

export function SepararArrayPorTipo(data: Fii[]) {
  const arraySeparado = data.reduce<FiiAgrupado[]>((acc, fii) => {
    const { type, amount } = fii

    const itemExistente = acc.find((item) => item.ticker === type)

    if (itemExistente) {
      itemExistente.amount += amount
    } else {
      acc.push({ ticker: type, amount })
    }

    return acc
  }, [])

  const arrayOrdenado = OrdenarFiis(arraySeparado)

  return FormatarFiis(arrayOrdenado)
}

export function groupBySegment(fiis: Fii[]) {
  const arraySeparado = fiis
    .filter((fii) => fii.segment)
    .reduce((acc, fii) => {
      const existingSegment = acc.find((item) => item.ticker === fii.segment)

      if (existingSegment) {
        existingSegment.amount += fii.amount
      } else {
        acc.push({
          ticker: fii.segment!,
          amount: fii.amount
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
