'use client'

import { AllChart } from './components/Charts/AllChart'
import { SegmentChart } from './components/Charts/SegmentChart'
import { TypeChart } from './components/Charts/TypeChart'
import { AddFiiDialog } from './components/Dialogs/AddFiiDialog'
import { FiisTable } from './components/FiisTable'

export default function Home() {
  return (
    <main className="mx-auto flex w-max flex-col items-center gap-8 p-16">
      <div className="grid grid-cols-3 gap-8">
        <AllChart />

        <TypeChart />

        <SegmentChart />
      </div>

      <div className="flex w-full justify-center">
        <FiisTable />
      </div>

      <AddFiiDialog />
    </main>
  )
}
