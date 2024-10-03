export type Fii = {
  ticker: string
  amount: number
  type: 'Tijolo' | 'Papel' | 'Fundos de fundos'
  segment?: 'Shooping' | 'Híbrido' | 'Logístico'
}

export type FiiAgrupado = {
  ticker: string
  amount: number
}
