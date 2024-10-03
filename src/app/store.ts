import { create } from 'zustand'
import { Fii } from './type'

type Store = {
  fiis: Fii[]
  addFii: (fii: Fii) => void
  removeFii: (ticker: string) => void
}

export const useStore = create<Store>()((set) => ({
  fiis: JSON.parse(localStorage.getItem('fiis-web') || '[]'),
  addFii: (fii: Fii) =>
    set((state) => {
      const updatedItems = [...state.fiis, fii]
      localStorage.setItem('fiis-web', JSON.stringify(updatedItems))
      return { fiis: updatedItems }
    }),
  removeFii: (ticker: string) =>
    set((state) => {
      const updatedItems = state.fiis.filter((fii) => fii.ticker !== ticker)
      localStorage.setItem('fiis-web', JSON.stringify(updatedItems))
      return { fiis: updatedItems }
    })
}))
