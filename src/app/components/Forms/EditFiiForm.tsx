'use client'

import { Segmentos, Tipos } from '@/app/consts'
import { useStore } from '@/app/store'
import { Fii } from '@/app/types/type'
import { SubmitHandler, useForm } from 'react-hook-form'

type EditFiiFormProps = {
  fii: Fii
}

export const EditFiiForm = ({ fii }: EditFiiFormProps) => {
  const { editFii } = useStore()

  const { register, handleSubmit, watch } = useForm<Fii>()
  const type = watch('tipo', fii.tipo)

  const onSubmit: SubmitHandler<Fii> = (data) => {
    const newFii: Fii = {
      nome: data.nome,
      classe: 'FII',
      quantCotas: data.quantCotas,
      valorInvestido: data.valorInvestido,
      tipo: data.tipo,
      segmento: data.segmento
    }

    editFii(fii.nome, newFii)
  }

  return (
    <form
      id="NewFiiForm"
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        required
        placeholder="Ticker"
        {...register('nome')}
        defaultValue={fii.nome}
      />

      <select required {...register('tipo')}>
        <option>Tipo</option>
        {Tipos.map((tipo) => (
          <option key={tipo} value={tipo} selected={fii.tipo === tipo}>
            {tipo}
          </option>
        ))}
      </select>

      {type === 'Tijolo' ? (
        <select required {...register('segmento')}>
          <option>Segmento</option>
          {Segmentos.map((segmento) => (
            <option
              key={segmento}
              value={segmento}
              selected={fii.segmento === segmento}
            >
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
        defaultValue={fii.quantCotas}
      />

      <input
        type="number"
        step=".01"
        required
        placeholder="Valor investido"
        {...register('valorInvestido', {
          valueAsNumber: true
        })}
        defaultValue={fii.valorInvestido}
      />
    </form>
  )
}
