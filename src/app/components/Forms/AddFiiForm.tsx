'use client'

import { Segmentos, Tipos } from '@/app/consts'
import { useStore } from '@/app/store'
import { Fii } from '@/app/types/type'
import { SubmitHandler, useForm } from 'react-hook-form'

export const AddFiiForm = () => {
  const { addFii } = useStore()

  const { register, handleSubmit, watch, reset } = useForm<Fii>()
  const type = watch('tipo')

  const onSubmit: SubmitHandler<Fii> = (data) => {
    const newFii: Fii = {
      ticker: data.ticker,
      quantCotas: data.quantCotas,
      valorInvestido: data.valorInvestido,
      tipo: data.tipo,
      segmento: data.segmento
    }

    addFii(newFii)
    reset()
  }

  return (
    <form
      id="NewFiiForm"
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-3">
        <input
          className="w-[45%]"
          required
          placeholder="Ticker"
          {...register('ticker')}
        />

        <select className="w-full" required {...register('tipo')}>
          <option>Tipo</option>
          {Tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      {type === 'Tijolo' ? (
        <select required {...register('segmento')}>
          <option>Segmento</option>
          {Segmentos.map((segmento) => (
            <option key={segmento} value={segmento}>
              {segmento}
            </option>
          ))}
        </select>
      ) : (
        <select disabled {...register('segmento')}>
          <option>Segmento</option>
        </select>
      )}

      <div className="flex gap-3">
        <input
          className="w-full"
          type="number"
          required
          placeholder="Quant. cotas"
          {...register('quantCotas', {
            valueAsNumber: true
          })}
        />

        <input
          className="w-full"
          type="number"
          step=".01"
          required
          placeholder="Valor investido"
          {...register('valorInvestido', {
            valueAsNumber: true
          })}
        />
      </div>
    </form>
  )
}
