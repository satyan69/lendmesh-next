'use server'

import { z } from 'zod'

const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
})

export async function subscribeToNewsletter(formData: FormData) {
  const validatedFields = newsletterSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phoneNumber: formData.get('phoneNumber'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, phoneNumber } = validatedFields.data
  const API_ENDPOINT = 'https://us-east4-lendmesh.cloudfunctions.net/contact-us-send-email';

  try {
    // Replace 'YOUR_NEWSLETTER_API_ENDPOINT' with the actual URL when you have it
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber }),
    })

    if (!response.ok) {
      throw new Error('Failed to subscribe to the newsletter')
    }

    return { success: true }
  } catch (error) {
    // console.error('Error subscribing to newsletter:', error)
    return { success: false, error: 'Failed to subscribe to the newsletter. Please try again.' }
  }
}

