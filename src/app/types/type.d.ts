import { Segmentos, TiposDeFiis } from '../consts'

type Investimento = {
  nome: string
  classe: 'Renda Fixa' | 'ETF' | 'FII' | 'Ação' | 'Cripto'
  valorInvestido: number
  quantCotas: number
}

export type Fii = Investimento & {
  tipo: (typeof TiposDeFiis)[number]
  segmento?: (typeof Segmentos)[number]
  diversificacaoCasoHibrido?: string[]
}

export type FiiAgrupado = {
  nome: string
  valorInvestido: number
}
