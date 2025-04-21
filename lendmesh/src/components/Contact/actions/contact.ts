'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  contact: z.string().min(1, 'Contact is required'),
  message: z.string().min(1, 'Message is required'),
  recaptcha: z.string().min(1, 'reCAPTCHA verification failed'),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    contact: formData.get('contact'),
    message: formData.get('message'),
    recaptcha: formData.get('recaptcha'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  const { recaptcha, ...rest } = validatedFields.data

  // Verify reCAPTCHA
  const recaptchaVerification = await verifyRecaptcha(recaptcha)
  if (!recaptchaVerification.success) {
    return { success: false, error: 'reCAPTCHA verification failed' }
  }

  // Process the form submission
  // console.log('Submitting form:', rest)

  const API_ENDPOINT = 'https://us-east4-lendmesh.cloudfunctions.net/contact-us-send-email';

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    })

    if (!response.ok) {
      throw new Error('Failed to submit the form')
    }

    return { success: true }
  } catch (error) {
    // console.error('Error submitting form:', error)
    return { success: false, error: 'Failed to submit the form. Please try again.' }
  }
}

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  })

  const result = await response.json()
  return result
}
