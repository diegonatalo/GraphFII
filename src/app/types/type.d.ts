type Investimento = {
  nome: string
  classe: 'Renda Fixa' | 'ETF' | 'FII' | 'Ação' | 'Cripto'
  valorInvestido: number
  quantCotas: number
}

export type Fii = Investimento & {
  tipo: 'Tijolo' | 'Papel' | 'Fundos de fundos' | 'Misto'
  segmento?:
    | 'Logístico'
    | 'Híbrido'
    | 'Renda Urbana'
    | 'Shooping'
    | 'Lajes Corporativas'
  diversificacaoCasoHibrido?: string[]
}

export type FiiAgrupado = {
  nome: string
  valorInvestido: number
}
