import { Calculator, ChartDonut, Wallet } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <nav className="flex min-h-screen w-max flex-col gap-3 bg-black px-4 py-8">
      <Link
        className="flex items-center gap-2 rounded-lg px-4 py-2 font-bold text-zinc-300 transition-colors hover:bg-zinc-900/50"
        href="/ativos"
      >
        <Wallet size={28} />
        Carteira
      </Link>
      <Link
        className="flex items-center gap-2 rounded-lg px-4 py-2 font-bold text-zinc-300 transition-colors hover:bg-zinc-900/50"
        href="/"
      >
        <ChartDonut size={28} />
        Diversificação
      </Link>
      <Link
        className="flex items-center gap-2 rounded-lg px-4 py-2 font-bold text-zinc-300 transition-colors hover:bg-zinc-900/50"
        href="/calcular"
      >
        <Calculator size={32} />
        Calcular
      </Link>
    </nav>
  )
}
