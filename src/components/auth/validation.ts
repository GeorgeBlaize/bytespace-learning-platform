export type FieldErrors<T extends string> = Partial<Record<T, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(value: string) {
  if (!value.trim()) return 'Email is required'
  if (!EMAIL_RE.test(value)) return 'Enter a valid email address'
}

export function validatePassword(value: string, minLength = 8) {
  if (!value) return 'Password is required'
  if (value.length < minLength) return `Password must be at least ${minLength} characters`
}

export function validateName(value: string) {
  if (!value.trim()) return 'Full name is required'
}
