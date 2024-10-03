'use client'

import { useStore } from '@/app/store'
import { Fii } from '@/app/type'
import { SubmitHandler, useForm } from 'react-hook-form'

export const NewTickerForm = () => {
  const { addFii } = useStore()

  const { register, handleSubmit, watch, reset } = useForm<Fii>()
  const type = watch('type')

  const onSubmit: SubmitHandler<Fii> = (data) => {
    const newFii: Fii = {
      ticker: data.ticker,
      amount: data.amount,
      type: data.type,
      segment: data.segment
    }

    addFii(newFii)
    reset()
  }

  return (
    <form
      className="flex w-full max-w-[700px] gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input required placeholder="Ativo" {...register('ticker')} />

      <select required {...register('type')}>
        <option>Tipo</option>
        <option value="Tijolo">Tijolo</option>
        <option value="Papel">Papel</option>
      </select>

      {type === 'Tijolo' ? (
        <select required {...register('segment')}>
          <option>Segmento</option>
          <option value="Logístico">Logístico</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      ) : (
        <select disabled {...register('segment')}>
          <option>Segmento</option>
        </select>
      )}

      <input
        type="number"
        step=".01"
        required
        placeholder="Valor investido"
        {...register('amount', {
          valueAsNumber: true
        })}
      />

      <button
        className="rounded-lg border border-emerald-600 bg-emerald-600/70 p-3 font-bold text-zinc-300"
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  )
}
