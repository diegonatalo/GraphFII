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
      precoMedio: data.precoMedio,
      valorInvestido: data.precoMedio * data.quantCotas,
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
      <input required placeholder="Ticker" {...register('ticker')} />

      <select required {...register('tipo')}>
        <option>Tipo</option>
        {Tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

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

      <input
        type="number"
        required
        placeholder="Quant. cotas"
        {...register('quantCotas', {
          valueAsNumber: true
        })}
      />

      <input
        type="number"
        step=".01"
        required
        placeholder="Preço Médio"
        {...register('precoMedio', {
          valueAsNumber: true
        })}
      />
    </form>
  )
}
