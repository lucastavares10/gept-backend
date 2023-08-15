import * as Yup from 'yup'

export const updateWorkerValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  password: Yup.string().min(6).max(30),
  birthdate: Yup.date(),
  position: Yup.mixed().oneOf([
    'president',
    'vice-president',
    'secretary',
    'treasurer',
    'worker',
  ] as const),
  accessLevel: Yup.mixed().oneOf([
    'administrator',
    'visitor',
    'maintainer',
  ] as const),
  phone: Yup.string(),
  isWhatsApp: Yup.boolean(),
  street: Yup.string(),
  number: Yup.string(),
  neighborhood: Yup.string(),
  city: Yup.string(),
  postalCode: Yup.string().length(8),
  projects: Yup.array<string>(),
})
