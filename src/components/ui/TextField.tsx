import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { type ComponentProps, useId, useState } from 'react'

type TextFieldProps = ComponentProps<'input'> & { label: string; error?: string }

export default function TextField({ label, error, type = 'text', className, ...props }: TextFieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  const [revealed, setRevealed] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm text-ink">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={isPassword && revealed ? 'text' : type}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={clsx(
            'h-[52px] w-full rounded-xl border bg-white px-6 text-lg text-ink transition-colors outline-none placeholder:text-[#8a8a8f] focus:border-brand',
            isPassword && 'pr-14',
            error ? 'border-red-500' : 'border-line',
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((v) => !v)}
            aria-label={revealed ? 'Hide password' : 'Show password'}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer p-1 text-muted hover:text-ink"
          >
            {revealed ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
          </button>
        )}
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
