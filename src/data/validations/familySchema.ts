import * as Yup from 'yup'

export const familyValidationSchema = Yup.object().shape({
  street: Yup.string().required('Rua é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  complement: Yup.string(),
  isRented: Yup.boolean().required('Alugado? é obrigatório'),
  rentPrice: Yup.number().required('Aluguel é obrigatório'),
})
