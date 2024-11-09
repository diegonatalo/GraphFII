import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const MagicNumberForm = () => {
  const [magicNumber, setMagicNumber] = useState('')

  const { register, handleSubmit } = useForm<{
    objetivo: number
    rendimento: number
  }>()

  const onSubmit: SubmitHandler<{
    objetivo: number
    rendimento: number
  }> = (data) => {
    const result = `Você precisará de ${Math.ceil(data.objetivo / data.rendimento).toLocaleString('pt-BR')} cotas.`

    setMagicNumber(result)
  }

  return (
    <form
      id="magic-number"
      className="flex flex-col gap-3"
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

      {magicNumber !== '' && (
        <span className="my-2 text-center font-bold text-gray-300">
          {magicNumber}
        </span>
      )}
    </form>
  )
}
