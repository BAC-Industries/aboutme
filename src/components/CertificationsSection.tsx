import { Award, BookOpenCheck, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const certifications = [
  {
    title: 'CS50\'s Introduction to Artificial Intelligence with Python',
    issuer: 'Harvard University (edX)',
    icon: GraduationCap,
  },
  {
    title: 'Computer Networking',
    issuer: 'IIT Bombay',
    icon: Award,
  },
    {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    icon: BookOpenCheck,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Certifications</h2>
          <p className="text-lg text-muted-foreground mt-2">
            My commitment to continuous learning and professional development.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/20 text-accent p-4 rounded-full">
                   <cert.icon className="h-8 w-8" />
                 </div>
                 <div>
                    <CardTitle className="text-xl font-headline">{cert.title}</CardTitle>
                    <CardDescription className="text-base">{cert.issuer}</CardDescription>
                 </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
