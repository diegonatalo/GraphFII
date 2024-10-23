'use client'

import { Fii } from '@/app/@types/type'
import { Segmentos, TiposDeFiis } from '@/app/consts'
import { useStore } from '@/app/store'
import { SubmitHandler, useForm } from 'react-hook-form'

export const AddFiiForm = () => {
  const { addFii } = useStore()

  const { register, handleSubmit, watch, reset } = useForm<Fii>()
  const type = watch('tipo')

  const onSubmit: SubmitHandler<Fii> = (data) => {
    const newFii: Fii = {
      nome: data.nome,
      classe: 'FII',
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
      <input required placeholder="Ticker" {...register('nome')} />

      <select required {...register('tipo')}>
        <option>Tipo</option>
        {TiposDeFiis.map((tipo) => (
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
        step=".01"
        required
        placeholder="Valor investido"
        {...register('valorInvestido', {
          valueAsNumber: true
        })}
      />
    </form>
  )
}
