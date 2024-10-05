import { Fii, FiiAgrupado } from './type'

export function SepararArrayPorTipo(data: Fii[]): FiiAgrupado[] {
  return data.reduce<FiiAgrupado[]>((acc, fii) => {
    const { type, amount } = fii

    const itemExistente = acc.find((item) => item.ticker === type)

    if (itemExistente) {
      itemExistente.amount += amount
    } else {
      acc.push({ ticker: type, amount })
    }

    return acc
  }, [])
}

export function groupBySegment(fiis: Fii[]): FiiAgrupado[] {
  return fiis
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
}

export function OrdenarArrayDeTipos(data: FiiAgrupado[]) {
  return data.sort((a, b) => b.amount - a.amount)
}

export function OrdenarArray(data: Fii[]) {
  return data.sort((a, b) => b.amount - a.amount)
}

export function GenerateAllChartData(array: Fii[]) {
  const labels = array.map((item) => item.ticker)
  const data = array.map((item) => item.amount)

  return { labels, data }
}

export function GenerateTypeChartData(array: FiiAgrupado[]) {
  const labels = array.map((item) => item.ticker)
  const data = array.map((item) => item.amount)

  return { labels, data }
}

export const TransformaEmReais = (valor: number) => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
