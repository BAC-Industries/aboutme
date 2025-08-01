'use server';

import { tailorAboutMe, type TailorAboutMeInput } from '@/ai/flows/tailor-about-me';

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
