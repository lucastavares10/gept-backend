import * as Yup from 'yup'

const personValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
  isOwner: Yup.boolean().required('Titular? é obrigatório'),
  document: Yup.string().required('RG/CPF é obrigatório'),
  kin: Yup.string().required('Parentesco é obrigatório'),
  occupation: Yup.string().required('Ocupação é obrigatório'),
  wage: Yup.number().required('Salario é obrigatório'),
  wageSources: Yup.string().required('Fonte salarial é obrigatório'),
  nis: Yup.string().required('Nis é obrigatório'),
  schooling: Yup.string().required('Escolaridade é obrigatório'),
  birthdate: Yup.date().required('Data de nascimento é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  isWhatsApp: Yup.boolean().required('WhatsApp é obrigatório'),
  phone_2: Yup.string(),
  isWhatsApp2: Yup.boolean(),
})

export const familyValidationSchema = Yup.object().shape({
  street: Yup.string().required('Rua é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  complement: Yup.string(),
  isRented: Yup.boolean().required('Alugado? é obrigatório'),
  rentPrice: Yup.number().required('Aluguel é obrigatório'),
  projects: Yup.array<string>(),
  persons: Yup.array()
    .of(personValidationSchema)
    .defined()
    .min(1, 'Pessoas da familía precisa ser preenchido')
    .required('Pessoas da familía é obrigatório'),
})
