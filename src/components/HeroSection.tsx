import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Building Intelligent Systems for the Future
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm Siddharth Bejadi, an aspiring AI engineer and full-stack developer passionate about creating scalable, production-ready intelligent systems that bridge technology and real-world impact. My focus is on AI agents, autonomous systems, and machine learning solutions optimized for performance and deployment.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" download="SiddharthBejadi_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/50 shadow-lg">
            <AvatarImage src="https://placehold.co/400x400.png" alt="Siddharth Bejadi" data-ai-hint="professional portrait" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
