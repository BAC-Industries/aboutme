'use server';

import { tailorAboutMe, type TailorAboutMeInput } from '@/ai/flows/tailor-about-me';
import firebase_app from '@/lib/firebase';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function generateTailoredAboutMe(input: TailorAboutMeInput) {
  try {
    const result = await tailorAboutMe(input);
    return { success: true, tailoredAboutMe: result.tailoredAboutMe };
  } catch (error) {
    console.error('Error tailoring about me:', error);
    // It's better not to expose raw error messages to the client.
    return { success: false, error: 'An unexpected error occurred while tailoring the bio.' };
  }
}

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  try {
    const db = getFirestore(firebase_app);
    await addDoc(collection(db, 'messages'), {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
