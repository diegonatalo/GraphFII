'use client'

import { TransformaEmReais } from '@/app/functions'
import { useStore } from '@/app/store'
import { PiggyBank } from '@phosphor-icons/react'

export const Topbar = () => {
  const { totalAmount } = useStore()

  return (
    <div className="flex items-center justify-center gap-2 bg-black px-8 py-4 text-gray-300">
      <PiggyBank size={28} />
      Total investido:
      <span className="text-lg font-bold text-green-500">
        {TransformaEmReais(totalAmount)}
      </span>
    </div>
  )
}
