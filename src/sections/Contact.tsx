import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile.ts'
import { submitContact } from '../lib/contact.ts'
import { Section } from '../components/Section.tsx'

const fieldClass =
  'mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-3 text-ink outline-none transition-colors focus:border-brass'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setStatus('')
    setPending(true)

    try {
      const result = await submitContact({ name, email, message, company })
      setStatus(
        result.delivered
          ? 'Message sent. Thank you.'
          : 'Nothing was sent. Add VITE_CONTACT_ENDPOINT when you want this form to deliver email, or use the address above.',
      )
      if (result.delivered) {
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'The message could not be sent.')
    } finally {
      setPending(false)
    }
  }

  return (
    <Section
      id="contact"
      titleId="contact-title"
      index="09"
      title="Contact"
      intro={profile.contactIntro}
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">Phone</p>
            <a className="mt-1 inline-block text-lg text-ink hover:text-brass" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">Email</p>
            <a className="mt-1 inline-block text-lg text-ink hover:text-brass" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">LinkedIn</p>
            <a
              className="mt-1 inline-block break-all text-ink hover:text-brass"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.linkedin.replace('https://', '')}
            </a>
          </div>
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">GitHub</p>
            <a
              className="mt-1 inline-block break-all text-ink hover:text-brass"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.github.replace('https://', '')}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="relative rounded-3xl border border-line bg-elevated p-5 backdrop-blur-md sm:p-7">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="contact-email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="contact-message" className="text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              maxLength={2000}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={fieldClass}
            />
          </div>

          {error ? (
            <p role="alert" className="mt-4 text-sm text-brass">
              {error}
            </p>
          ) : null}
          {status ? (
            <p role="status" className="mt-4 text-sm text-muted">
              {status}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
          >
            {pending ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </Section>
  )
}
