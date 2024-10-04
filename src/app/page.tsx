'use client'

import { AllChart } from './components/Charts/AllChart'
import { SegmentChart } from './components/Charts/SegmentChart'
import { TypeChart } from './components/Charts/TypeChart'
import { AddFiiDialog } from './components/Dialogs/AddFiiDialog'
import { FiisTable } from './components/FiisTable'
import { useStore } from './store'

export default function Home() {
  const { totalAmount } = useStore()

  return (
    <main className="flex w-full flex-col items-center gap-8 p-8">
      <div className="grid w-max grid-cols-3 gap-4">
        <div className="flex items-center gap-4 rounded-lg bg-zinc-900 p-4 pr-8">
          <div className="w-[250px] p-4">
            <AllChart />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-zinc-200">Total investido</h1>
            <span className="text-3xl text-zinc-300">
              {totalAmount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-zinc-900 p-4 pr-8">
          <div className="w-[250px] p-4">
            <TypeChart />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-zinc-200">Diversificação</h1>
            <span className="text-2xl text-zinc-300">por tipo</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-zinc-900 p-4 pr-8">
          <div className="w-[250px] p-4">
            <SegmentChart />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-zinc-200">Diversificação</h1>
            <span className="text-2xl text-zinc-300">por segmento</span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-8">
        <FiisTable />
      </div>

      <AddFiiDialog />
    </main>
  )
}
