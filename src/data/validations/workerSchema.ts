import * as Yup from 'yup'

export const workerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatório').min(6).max(30),
  birthdate: Yup.date().required('Data de nascimento é obrigatório'),
  position: Yup.mixed()
    .oneOf([
      'president',
      'vice-president',
      'secretary',
      'treasurer',
      'worker',
    ] as const)
    .required('Cargo é obrigatório'),
  accessLevel: Yup.mixed()
    .oneOf(['administrator', 'visitor', 'maintainer'] as const)
    .required('Nível de acesso é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  isWhatsApp: Yup.boolean().required('WhatsApp é obrigatório'),
  street: Yup.string().required('Rua é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  postalCode: Yup.string().required('CEP é obrigatório').length(8),
  projects: Yup.array<string>(),
})
