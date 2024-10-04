import toast from 'react-hot-toast'
import { create } from 'zustand'
import { Fii } from './type'

type Store = {
  fiis: Fii[]
  addFii: (fii: Fii) => void
  removeFii: (ticker: string) => void
}

const getInitialFiis = () => {
  if (typeof window !== 'undefined') {
    const storedFiis = localStorage.getItem('fiis-web')
    return JSON.parse(storedFiis || '[]')
  }
  return []
}

export const useStore = create<Store>()((set) => ({
  fiis: getInitialFiis(),
  addFii: (fii: Fii) =>
    set((state) => {
      try {
        const updatedItems = [...state.fiis, fii]
        localStorage.setItem('fiis-web', JSON.stringify(updatedItems))

        toast.success('Ativo adicionado com sucesso!')

        return { fiis: updatedItems }
      } catch {
        toast.error('Algo deu errado.')
        return { fiis: state.fiis }
      }
    }),
  removeFii: (ticker: string) =>
    set((state) => {
      try {
        const updatedItems = state.fiis.filter((fii) => fii.ticker !== ticker)
        localStorage.setItem('fiis-web', JSON.stringify(updatedItems))

        toast.success('Ativo excluído com sucesso!')

        return { fiis: updatedItems }
      } catch {
        toast.error('Algo deu errado.')
        return { fiis: state.fiis }
      }
    })
}))
