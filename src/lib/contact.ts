export interface ContactPayload {
  name: string
  email: string
  message: string
  company: string
}

export interface ContactResult {
  delivered: boolean
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function contactEndpoint(): string | undefined {
  const value = import.meta.env.VITE_CONTACT_ENDPOINT
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const name = payload.name.trim()
  const email = payload.email.trim()
  const message = payload.message.trim()

  if (!name || !emailPattern.test(email) || message.length < 8) {
    throw new Error('Enter your name, a valid email, and a message of at least a few words.')
  }

  if (payload.company.trim()) {
    return { delivered: false }
  }

  const endpoint = contactEndpoint()
  if (!endpoint) {
    return { delivered: false }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (!response.ok) {
    throw new Error('The message could not be sent. Try email instead.')
  }

  return { delivered: true }
}
