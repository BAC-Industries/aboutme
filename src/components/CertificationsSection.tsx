import { Award, BookOpenCheck, GraduationCap, Trophy, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const certifications = [
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: 'Harvard University',
    description: 'Covered search algorithms, reinforcement learning, natural language processing, and neural networks using TensorFlow and PyTorch. Built multiple AI models and optimized them for performance and scalability.',
    icon: GraduationCap,
  },
  {
    title: 'Demystifying Networking',
    issuer: 'IIT Bombay',
    description: 'Deepened understanding of network protocols, routing, and cybersecurity fundamentals; applied concepts to AI-powered distributed systems and cloud deployments.',
    icon: BookOpenCheck,
  },
  {
    title: 'AI & Machine Learning Essentials',
    issuer: 'Google Cloud Platform (Self-completed labs & exercises)',
    description: 'Hands-on experience deploying AI models on GCP, containerizing ML workflows, and testing production-like environments.',
    icon: Award,
  },
  {
    title: 'Drone & Robotics AI Systems (Self-Directed Research)',
    issuer: 'Ongoing Research Paper',
    description: 'Exploring the use of machine learning and AI agents in autonomous intelligent systems, drones, and robotics.',
    icon: FileText,
  },
];

export default function CertificationsSection() {
  return (
    <section 
      id="certifications" 
      className="py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
      data-ai-hint="abstract network"
    >
      <div className="container mx-auto">
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">Certifications & Courses</h2>
            <p className="text-xl text-muted-foreground mt-3">
              A testament to my dedication to continuous learning and skill development.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.title} className="transition-all duration-300 hover:shadow-xl hover:border-primary/50 bg-card/80">
                <div className="flex flex-col sm:flex-row items-start p-6">
                  <div className="bg-primary/10 text-accent p-4 rounded-full mr-0 mb-4 sm:mr-6 sm:mb-0">
                    <cert.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-headline mb-1">{cert.title}</CardTitle>
                    <p className="font-semibold text-muted-foreground mb-2">{cert.issuer}</p>
                    <CardDescription className="text-base text-card-foreground/90">{cert.description}</CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
