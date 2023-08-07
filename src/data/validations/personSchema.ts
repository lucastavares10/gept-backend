import * as Yup from 'yup'

export const personValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
  isOwner: Yup.boolean().required('Titular? é obrigatório'),
  document: Yup.string().required('RG/CPF é obrigatório'),
  kin: Yup.string(),
  occupation: Yup.string(),
  wage: Yup.number(),
  wageSources: Yup.string(),
  nis: Yup.string(),
  schooling: Yup.string(),
  birthdate: Yup.date(),
  phone: Yup.string(),
  isWhatsApp: Yup.boolean(),
  phone_2: Yup.string(),
  isWhatsApp2: Yup.boolean(),
})
