import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import { type FieldErrors, validateEmail, validateName, validatePassword } from '../components/auth/validation'
import { Button } from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import useDocumentTitle from '../hooks/useDocumentTitle'

type Field = 'name' | 'email' | 'password'

export default function SignUp() {
  useDocumentTitle('Create an Account')
  const [values, setValues] = useState<Record<Field, string>>({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState<FieldErrors<Field>>({})
  const [done, setDone] = useState(false)

  const update = (field: Field) => (e: ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((errs) => ({ ...errs, [field]: undefined }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next: FieldErrors<Field> = {
      name: validateName(values.name),
      email: validateEmail(values.email),
      password: validatePassword(values.password),
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    setDone(true)
  }

  return (
    <AuthLayout
      heading="Sign up and come in"
      intro="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to <br />
          ByteSpace
        </>
      }
      footer={
        <>
          Already have an account?{' '}
          <Link to="/sign-in" className="text-brand hover:underline">
            Login
          </Link>
        </>
      }
    >
      {done ? (
        <div role="status" className="rounded-xl bg-lime/30 p-6 text-ink">
          <p className="font-display text-xl font-semibold">You're in, {values.name.split(' ')[0]}!</p>
          <p className="mt-2 text-muted">
            Your account has been created. <Link to="/" className="text-brand hover:underline">Start exploring courses</Link>.
          </p>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" value={values.name} onChange={update('name')} error={errors.name} />
          <TextField label="Email" type="email" name="email" autoComplete="email" placeholder="designer@example.com" value={values.email} onChange={update('email')} error={errors.email} />
          <TextField label="Password" type="password" name="password" autoComplete="new-password" placeholder="********" value={values.password} onChange={update('password')} error={errors.password} />
          <Button type="submit" className="mt-2 self-end">
            Continue
          </Button>
        </form>
      )}
    </AuthLayout>
  )
}
