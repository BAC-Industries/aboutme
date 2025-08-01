'use server';

import { tailorAboutMe, type TailorAboutMeInput } from '@/ai/flows/tailor-about-me';
import firebase_app from '@/lib/firebase';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function generateTailoredAboutMe(input: TailorAboutMeInput) {
  try {
    const result = await tailorAboutMe(input);
    return { success: true, tailoredAboutMe: result.tailoredAboutMe };
  } catch (error) {
    console.error('Error tailoring about me:', error);
    return { success: false, error: 'An unexpected error occurred while tailoring the bio.' };
  }
}

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  try {
    const db = getFirestore(firebase_app);

    // 1️⃣ Save to Firestore
    await addDoc(collection(db, 'messages'), {
      ...data,
      timestamp: serverTimestamp(),
    });

    // 2️⃣ Send email notification via Resend
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // This must be a verified domain on Resend
      to: ['siddharth200517@gmail.com'], // Replace with your email
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
