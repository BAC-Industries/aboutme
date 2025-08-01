'use server';

/**
 * @fileOverview A flow to tailor the 'About Me' section to a specific job role.
 *
 * - tailorAboutMe - A function that tailors the 'About Me' section based on the job role.
 * - TailorAboutMeInput - The input type for the tailorAboutMe function.
 * - TailorAboutMeOutput - The return type for the tailorAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorAboutMeInputSchema = z.object({
  aboutMe: z.string().describe('The original About Me section.'),
  jobRole: z.string().describe('The job role to tailor the About Me section to.'),
});
export type TailorAboutMeInput = z.infer<typeof TailorAboutMeInputSchema>;

const TailorAboutMeOutputSchema = z.object({
  tailoredAboutMe: z.string().describe('The tailored About Me section.'),
});
export type TailorAboutMeOutput = z.infer<typeof TailorAboutMeOutputSchema>;

export async function tailorAboutMe(input: TailorAboutMeInput): Promise<TailorAboutMeOutput> {
  return tailorAboutMeFlow(input);
}

const tailorAboutMePrompt = ai.definePrompt({
  name: 'tailorAboutMePrompt',
  input: {schema: TailorAboutMeInputSchema},
  output: {schema: TailorAboutMeOutputSchema},
  prompt: `You are an expert at tailoring About Me sections to specific job roles.

You will take the original About Me section and tailor it to the specified job role, highlighting the skills and experience that are most relevant to the job role.

Original About Me section: {{{aboutMe}}}

Job role: {{{jobRole}}}

Tailored About Me section:`,
});

const tailorAboutMeFlow = ai.defineFlow(
  {
    name: 'tailorAboutMeFlow',
    inputSchema: TailorAboutMeInputSchema,
    outputSchema: TailorAboutMeOutputSchema,
  },
  async input => {
    const {output} = await tailorAboutMePrompt(input);
    return output!;
  }
);
