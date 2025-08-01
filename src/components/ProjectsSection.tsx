import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a modern UI, product management, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online store',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    link: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    image: 'https://placehold.co/600x400.png',
    hint: 'dashboard app',
    tags: ['React', 'Firebase', 'Node.js', 'Material UI'],
    link: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A clean, responsive blog built with a headless CMS for easy content management and optimal performance.',
    image: 'https://placehold.co/600x400.png',
    hint: 'minimalist blog',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Work</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href={project.link}>
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
