import { Segmentos, Tipos } from '../consts'

type Investimento = {
  nome: string
  classe: 'Renda Fixa' | 'ETF' | 'FII' | 'Ação' | 'Cripto'
  valorInvestido: number
  quantCotas: number
}

export type Fii = Investimento & {
  tipo: (typeof Tipos)[number]
  segmento?: (typeof Segmentos)[number]
}

export type FiiAgrupado = {
  nome: string
  valorInvestido: number
}
