import { Shield, Users, Medal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const volunteerRoles = [
  {
    title: "President of The Engineer's Guild",
    organization: 'Anglia Ruskin University, Cambridge Campus',
    date: 'Starting Feb 2025',
    description: 'Elected to lead the university\'s engineering society, focusing on fostering a community of innovation, organizing technical workshops, and connecting students with industry professionals.',
    icon: Shield,
  },
  {
    title: 'Student Mentor',
    organization: 'Gravity Zero',
    date: 'Ongoing',
    description: 'Guiding and supporting fellow students in their academic and personal growth. Providing mentorship in areas of computer science, AI, and project management.',
    icon: Users,
  },
];

export default function VolunteerSection() {
  return (
    <section 
      id="volunteer" 
      className="py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
      data-ai-hint="abstract network"
    >
      <div className="container mx-auto">
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline">Volunteer & Leadership</h2>
              <p className="text-xl text-muted-foreground mt-3">
                Engaging with the community and leading with passion.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
              {volunteerRoles.map((role) => (
                <Card key={role.title} className="transition-all duration-300 hover:shadow-xl hover:border-primary/50 bg-card/80">
                  <div className="flex flex-col sm:flex-row items-start p-6">
                    <div className="bg-primary/10 text-accent p-4 rounded-full mr-0 mb-4 sm:mr-6 sm:mb-0">
                      <role.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-headline mb-1">{role.title}</CardTitle>
                      <p className="font-semibold text-muted-foreground mb-2">{role.organization} - <span className="italic">{role.date}</span></p>
                      <CardDescription className="text-base text-card-foreground/90">{role.description}</CardDescription>
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
