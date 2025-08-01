import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  return (
    <section 
      className="w-full py-24 md:py-32 lg:py-40 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
      data-ai-hint="abstract background"
    >
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg">
          <div className="flex justify-center w-full md:hidden">
            <Avatar className="h-48 w-48 border-4 border-primary/50 shadow-lg mb-4">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGZ8lmjCQThig/profile-displayphoto-shrink_400_400/B56ZZaGH2zGQAk-/0/1745268277858?e=1756944000&v=beta&t=Smg7D3AUSZ1cfYbuCbnZI9JUFPfTwP_DmNas7lHDRsU" alt="Siddharth Bejadi"/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Building Intelligent Systems for the Future
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm Siddharth Bejadi, an aspiring AI engineer and full-stack developer passionate about creating scalable, production-ready intelligent systems that bridge technology and real-world impact. My focus is on AI agents, autonomous systems, and machine learning solutions optimized for performance and deployment.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/50 shadow-lg">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGZ8lmjCQThig/profile-displayphoto-shrink_400_400/B56ZZaGH2zGQAk-/0/1745268277858?e=1756944000&v=beta&t=Smg7D3AUSZ1cfYbuCbnZI9JUFPfTwP_DmNas7lHDRsU" alt="Siddharth Bejadi"/>
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
