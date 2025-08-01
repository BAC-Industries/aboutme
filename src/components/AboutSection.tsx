import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

const technicalSkills = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Rust', 'C', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Django', 'Node.js', 'React'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NumPy', 'Pandas', 'OpenCV'],
  },
  {
    category: 'Data Science & Analysis',
    skills: ['Data preprocessing', 'Feature engineering', 'Model evaluation', 'Visualization (Matplotlib, Seaborn)'],
  },
  {
    category: 'Cloud & Deployment',
    skills: ['Google Cloud Platform (AI/ML services)', 'Docker', 'Kubernetes', 'CI/CD pipelines'],
  },
  {
    category: 'Networking & Security',
    skills: ['Network routing', 'Protocols', 'Cybersecurity fundamentals', 'Firewalls', 'VPNs'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Operating Systems',
    skills: ['Linux (Ubuntu, Debian)', 'Windows Server', 'macOS'],
  },
  {
    category: 'Robotics & Autonomous Systems',
    skills: ['Drone programming', 'AI agents', 'Sensor integration', 'Path planning algorithms'],
  },
  {
    category: 'Mathematics for AI',
    skills: ['Linear Algebra', 'Probability', 'Statistics', 'Calculus', 'Optimization methods'],
  },
];

const toolsAndPlatforms = [
  'Git/GitHub',
  'Jupyter Notebook',
  'VS Code',
  'Notion',
  'Figma',
  'Google Cloud AI services',
  'API integration',
  'REST & GraphQL',
  'Containerization and deployment using Docker and Kubernetes',
];

const softSkills = [
  { title: 'Leadership', description: 'Proven ability to lead teams and projects, demonstrated through university and extracurricular activities.' },
  { title: 'Teamwork & Collaboration', description: 'Working with developers, law students, and engineers in diverse projects' },
  { title: 'Communication', description: 'Translating technical concepts to non-technical stakeholders' },
  { title: 'Problem-Solving', description: 'Delivering solutions under tight deadlines and adapting to new technologies' },
  { title: 'Adaptability', description: 'Rapidly learning new domains (e.g., legal AI, healthcare AI, Web3)' },
  { title: 'Project Management', description: 'Planning workshops, milestone setting, coordinating teams' },
  { title: 'Time Management', description: 'Balancing coursework, hackathons, and research projects' },
  { title: 'Strategic Thinking', description: 'Chess and sports contributing to long-term planning and focus' },
];

const additionalCompetencies = [
  'Hackathon Experience: Building MVPs under time constraints and pressure',
  'Research & Writing: Drafting academic papers on AI agents and autonomous systems',
  'Testing & Optimization: Creating scalable, production-ready AI models',
  'Cross-Domain AI Applications: Implementing AI in law, healthcare, drones, and Web3',
];

export default function AboutSection() {
  return (
    <section id="skills" className="container mx-auto py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Skills Portfolio</h2>
        <p className="text-xl text-muted-foreground mt-3">A detailed overview of my technical and professional capabilities.</p>
      </div>

      <div className="space-y-16">
        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-headline mb-4">Technical Skills</h3>
            <p className="text-muted-foreground">A deep dive into the technologies I work with.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((section) => (
              <Card key={section.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-headline mb-4">Tools & Platforms</h3>
             <p className="text-muted-foreground">The ecosystem of tools I use to build, test, and deploy.</p>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 flex flex-wrap gap-3">
                {toolsAndPlatforms.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-base px-3 py-1">{tool}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-headline mb-4">Soft & Transferable Skills</h3>
             <p className="text-muted-foreground">The essential skills that drive successful projects and collaborations.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill) => (
               <div key={skill.title} className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                  <div className="bg-primary/20 text-accent p-3 rounded-full">
                     <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
        
        {/* Additional Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-headline mb-4">Additional Competencies</h3>
             <p className="text-muted-foreground">Unique experiences that enhance my profile.</p>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 space-y-4">
                {additionalCompetencies.map((comp) => (
                  <div key={comp} className="flex items-center gap-3">
                     <Rocket className="h-5 w-5 text-accent" />
                     <p className="text-muted-foreground">{comp}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
