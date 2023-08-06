import * as Yup from 'yup'

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export const projectValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  daysOfWork: Yup.array()
    .of(
      Yup.string().test(
        'valid',
        'Valor não permitido para dias de trabalho',
        (val) => {
          if (val) return daysOfWeek.includes(val)
          return false
        }
      )
    )
    .defined()
    .required()
    .min(1, 'Dias de trabalho precisa ser preenchido')
    .required('Dias de trabalho é obrigatório'),
})
