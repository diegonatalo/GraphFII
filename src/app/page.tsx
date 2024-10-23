'use client'

import { AllChart } from './components/Charts/AllChart'
import { SegmentChart } from './components/Charts/SegmentChart'
import { TypeChart } from './components/Charts/TypeChart'
import { AddFiiDialog } from './components/Dialogs/AddFiiDialog'
import { FiisTable } from './components/FiisTable'

export default function Home() {
  return (
    <main className="flex w-full gap-8 p-8">
      <div className="grid w-full grid-cols-2 gap-4">
        <AllChart />

        <TypeChart />

        <SegmentChart />
      </div>

      <div className="flex w-full gap-8">
        <FiisTable />
      </div>

      <AddFiiDialog />
    </main>
  )
}
