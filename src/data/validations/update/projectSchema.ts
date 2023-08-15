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

export const updateProjectValidationSchema = Yup.object().shape({
  name: Yup.string(),
  description: Yup.string(),
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
    .min(1, 'Dias de trabalho precisa ser preenchido'),
})
