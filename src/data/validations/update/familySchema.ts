import * as Yup from 'yup'

const personValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  isOwner: Yup.boolean(),
  document: Yup.string(),
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

export const updateFamilyValidationSchema = Yup.object().shape({
  street: Yup.string(),
  number: Yup.string(),
  neighborhood: Yup.string(),
  complement: Yup.string(),
  isRented: Yup.boolean(),
  rentPrice: Yup.number(),
  projects: Yup.array<string>(),
  persons: Yup.array().of(personValidationSchema),
})
