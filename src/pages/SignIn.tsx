import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import SocialButtons from '../components/auth/SocialButtons'
import { type FieldErrors, validateEmail, validatePassword } from '../components/auth/validation'
import { Button } from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import useDocumentTitle from '../hooks/useDocumentTitle'

type Field = 'email' | 'password'

export default function SignIn() {
  useDocumentTitle('Sign In')
  const navigate = useNavigate()
  const [values, setValues] = useState<Record<Field, string>>({ email: '', password: '' })
  const [errors, setErrors] = useState<FieldErrors<Field>>({})

  const update = (field: Field) => (e: ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((errs) => ({ ...errs, [field]: undefined }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next: FieldErrors<Field> = {
      email: validateEmail(values.email),
      password: validatePassword(values.password, 1),
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    navigate('/')
  }

  return (
    <AuthLayout
      heading="Sign in with ease"
      intro="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      footer={
        <>
          New user?{' '}
          <Link to="/sign-up" className="text-brand hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField label="Email" type="email" name="email" autoComplete="email" placeholder="designer@example.com" value={values.email} onChange={update('email')} error={errors.email} />
        <TextField label="Password" type="password" name="password" autoComplete="current-password" placeholder="********" value={values.password} onChange={update('password')} error={errors.password} />
        <Button type="submit" className="mt-2 self-end">
          Sign In
        </Button>
      </form>

      <div className="mt-[62px] flex items-center gap-3 text-lg text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>
      <SocialButtons className="mt-10" />
    </AuthLayout>
  )
}
