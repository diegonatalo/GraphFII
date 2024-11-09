import { AllChart } from './components/Charts/AllChart'
import { SegmentChart } from './components/Charts/SegmentChart'
import { TypeChart } from './components/Charts/TypeChart'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-8 p-8">
      <div className="flex w-full flex-col gap-8">
        <AllChart />

        <TypeChart />

        <SegmentChart />
      </div>
    </main>
  )
}
