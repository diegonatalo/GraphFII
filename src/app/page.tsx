import { AllChart } from './components/Charts/AllChart'
import { SegmentChart } from './components/Charts/SegmentChart'
import { TypeChart } from './components/Charts/TypeChart'
import { FiisTable } from './components/FiisTable'
import { NewTickerForm } from './components/NewTickerForm'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full justify-center gap-8">
        <TypeChart />

        <AllChart />

        <SegmentChart />
      </div>

      <NewTickerForm />

      <FiisTable />
    </main>
  )
}
