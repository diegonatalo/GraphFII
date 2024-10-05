import toast from 'react-hot-toast'
import { create } from 'zustand'
import { Fii } from './type'

type Store = {
  fiis: Fii[]
  totalAmount: number
  addFii: (fii: Fii) => void
  removeFii: (ticker: string) => void
  editFii: (ticker: string, fii: Fii) => void
}

const getInitialFiis = () => {
  if (typeof window !== 'undefined') {
    const storedFiis = localStorage.getItem('fiis-web')
    return JSON.parse(storedFiis || '[]')
  }
  return []
}

const calculateTotalAmount = (fiis: Fii[]) => {
  return fiis.reduce((sum, fii) => sum + fii.amount, 0)
}

export const useStore = create<Store>()((set) => ({
  fiis: getInitialFiis(),
  totalAmount: calculateTotalAmount(getInitialFiis()),
  addFii: (fii: Fii) =>
    set((state) => {
      try {
        const updatedItems = [...state.fiis, fii]
        localStorage.setItem('fiis-web', JSON.stringify(updatedItems))

        toast.success('Ativo adicionado com sucesso!', {
          style: {
            background: '#022c22',
            border: '1px solid #10b981',
            padding: '16px',
            color: '#FFF'
          },
          iconTheme: {
            primary: '#10b981',
            secondary: '#FFF'
          }
        })

        return {
          fiis: updatedItems,
          totalAmount: calculateTotalAmount(updatedItems)
        }
      } catch {
        toast.error('Algo deu errado.', {
          style: {
            background: '#450a0a',
            border: '1px solid #ef4444',
            padding: '16px',
            color: '#ffffff'
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff'
          }
        })

        return { fiis: state.fiis, totalAmount: state.totalAmount }
      }
    }),
  removeFii: (ticker: string) =>
    set((state) => {
      try {
        const updatedItems = state.fiis.filter((fii) => fii.ticker !== ticker)
        localStorage.setItem('fiis-web', JSON.stringify(updatedItems))

        toast.success('Ativo excluído com sucesso!', {
          style: {
            background: '#022c22',
            border: '1px solid #10b981',
            padding: '16px',
            color: '#ffffff'
          },
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff'
          }
        })

        return {
          fiis: updatedItems,
          totalAmount: calculateTotalAmount(updatedItems)
        }
      } catch {
        toast.error('Algo deu errado.', {
          style: {
            background: '#450a0a',
            border: '1px solid #ef4444',
            padding: '16px',
            color: '#ffffff'
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff'
          }
        })

        return { fiis: state.fiis, totalAmount: state.totalAmount }
      }
    }),
  editFii: (ticker: string, updatedFii: Fii) =>
    set((state) => {
      try {
        const updatedItems = state.fiis.map((fii) =>
          fii.ticker === ticker ? { ...fii, ...updatedFii } : fii
        )
        localStorage.setItem('fiis-web', JSON.stringify(updatedItems))

        toast.success('Ativo editado com sucesso!', {
          style: {
            background: '#022c22',
            border: '1px solid #10b981',
            padding: '16px',
            color: '#ffffff'
          },
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff'
          }
        })

        return {
          fiis: updatedItems,
          totalAmount: calculateTotalAmount(updatedItems)
        }
      } catch {
        toast.error('Algo deu errado.', {
          style: {
            background: '#450a0a',
            border: '1px solid #ef4444',
            padding: '16px',
            color: '#ffffff'
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff'
          }
        })

        return { fiis: state.fiis, totalAmount: state.totalAmount }
      }
    })
}))
