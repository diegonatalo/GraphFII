'use client'

import { Seguimentos, TiposDeFiis } from '@/app/consts'
import { useStore } from '@/app/store'
import { Fii } from '@/app/type'
import { Plus } from '@phosphor-icons/react'
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
    <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input required placeholder="Ativo" {...register('ticker')} />

      <select required {...register('type')}>
        <option>Tipo</option>
        {TiposDeFiis.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      {type === 'Tijolo' ? (
        <select required {...register('segment')}>
          <option>Segmento</option>
          {Seguimentos.map((segmento) => (
            <option key={segmento} value={segmento}>
              {segmento}
            </option>
          ))}
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
        <Plus size={24} weight="bold" />
      </button>
    </form>
  )
}
