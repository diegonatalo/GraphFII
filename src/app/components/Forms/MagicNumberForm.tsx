'use client'

import { TransformaEmReais } from '@/app/functions'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const MagicNumberForm = () => {
  const [magicNumber, setMagicNumber] = useState('')

  const { register, handleSubmit } = useForm<{
    objetivo: number
    rendimento: number
    preco: number
  }>()

  const onSubmit: SubmitHandler<{
    objetivo: number
    rendimento: number
    preco: number
  }> = (data) => {
    const quantCotas = Math.ceil(data.objetivo / data.rendimento)

    const resultado = `Você precisará de ${quantCotas.toLocaleString('pt-BR')} cotas (${TransformaEmReais(quantCotas * data.preco)})`

    setMagicNumber(resultado)
  }

  return (
    <form
      id="magic-number"
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="number"
        step=".01"
        placeholder="Objetivo mensal"
        required
        {...register('objetivo', {
          valueAsNumber: true
        })}
      />
      <input
        type="number"
        step=".01"
        placeholder="Rendimento por cota"
        required
        {...register('rendimento', {
          valueAsNumber: true
        })}
      />

      <input
        type="number"
        step=".01"
        placeholder="Preço da cota"
        required
        {...register('preco', {
          valueAsNumber: true
        })}
      />

      <button
        type="submit"
        className="w-full rounded-lg border border-emerald-500 bg-emerald-500/70 p-4 font-bold text-gray-200"
      >
        Calcular
      </button>

      {magicNumber !== '' && (
        <span className="my-8 text-center text-lg text-gray-300">
          {magicNumber}
        </span>
      )}
    </form>
  )
}
