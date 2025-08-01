"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Code, Palette, Server, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { generateTailoredAboutMe } from '@/app/actions';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  jobRole: z.string().min(2, {
    message: "Job role must be at least 2 characters.",
  }),
});

const initialAboutMe = "I am a versatile full-stack developer with a keen eye for design and a passion for creating intuitive, dynamic user experiences. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I thrive in collaborative environments and am always eager to learn and adapt to new challenges and technologies to deliver high-quality, scalable solutions.";

const skills = [
  { icon: Code, title: 'Frontend', description: 'React, Next.js, Tailwind CSS, TypeScript' },
  { icon: Server, title: 'Backend', description: 'Node.js, Express, Firebase, PostgreSQL' },
  { icon: Palette, title: 'Design', description: 'Figma, UI/UX Principles, Prototyping' },
];

export default function AboutSection() {
  const [aboutMeText, setAboutMeText] = useState(initialAboutMe);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobRole: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await generateTailoredAboutMe({
        aboutMe: aboutMeText,
        jobRole: values.jobRole,
      });

      if (result.success && result.tailoredAboutMe) {
        setAboutMeText(result.tailoredAboutMe);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Failed to tailor 'About Me' section.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="about" className="container mx-auto py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2">My journey, skills, and what I can bring to your team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-accent" />
                Tailor My Bio with AI
              </CardTitle>
              <CardDescription>
                Enter a job role below to see how AI can customize my bio for a specific position.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-10 w-1/2" />
                </div>
              ) : (
                <Textarea
                  value={aboutMeText}
                  onChange={(e) => setAboutMeText(e.target.value)}
                  rows={8}
                  className="mb-4"
                  placeholder="My 'About Me' text..."
                />
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="jobRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Role</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'Frontend Developer'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isLoading ? 'Tailoring...' : 'Tailor with AI'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>My Skillset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-4">
                  <div className="bg-primary/20 text-accent p-3 rounded-full">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
