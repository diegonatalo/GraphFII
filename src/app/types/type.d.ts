import { Segmentos, Tipos } from '../consts'

export type Fii = {
  ticker: string
  tipo: (typeof Tipos)[number]
  segmento?: (typeof Segmentos)[number]
  quantCotas: number
  precoMedio: number
  valorInvestido: number
}

export type FiiAgrupado = {
  ticker: string
  valorInvestido: number
}
