"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/use-auth';
import { generateTailoredAboutMe } from '@/app/actions';
import { Loader2, PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';


const originalAboutMe = "I'm Siddharth Bejadi, an aspiring AI engineer and full-stack developer passionate about creating scalable, production-ready intelligent systems that bridge technology and real-world impact. My focus is on AI agents, autonomous systems, and machine learning solutions optimized for performance and deployment.";

// Mock data - in a real app, this would come from a database
const initialSkills = [
  { category: 'Programming Languages', skills: ['Python', 'Rust', 'C', 'C++', 'Java', 'JavaScript'] },
  { category: 'Web Development', skills: ['HTML', 'CSS', 'Django', 'Node.js', 'React'] },
];
const initialCerts = [
    { title: "CS50's Introduction to Artificial Intelligence with Python", issuer: 'Harvard University', description: 'Covered search algorithms...' },
    { title: 'Demystifying Networking', issuer: 'IIT Bombay', description: 'Deepened understanding of network protocols...' },
];


function AdminDashboard() {
  const { signOutUser } = useAuth();
  const [aboutMe, setAboutMe] = useState(originalAboutMe);
  const [jobRole, setJobRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // State for skills and certs
  const [skills, setSkills] = useState(initialSkills);
  const [certifications, setCertifications] = useState(initialCerts);

  const handleTailorBio = async () => {
    if (!jobRole) {
      toast({
        title: 'Job Role Required',
        description: 'Please enter a job role to tailor the bio.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await generateTailoredAboutMe({ aboutMe: originalAboutMe, jobRole });
      if (result.success && result.tailoredAboutMe) {
        setAboutMe(result.tailoredAboutMe);
        toast({
          title: 'Bio Tailored!',
          description: `Your "About Me" section has been updated for the ${jobRole} role.`,
        });
      } else {
        throw new Error(result.error || 'Failed to tailor bio.');
      }
    } catch (error: any) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveChanges = () => {
    // This would save all changes (aboutMe, skills, certs) to a database
    console.log("Saving changes:", { aboutMe, skills, certifications });
    toast({
      title: 'Changes Saved!',
      description: 'Your portfolio content has been updated locally.',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
              <CardDescription>Edit your portfolio content here. Click "Save Changes" at the bottom to apply.</CardDescription>
            </div>
            <Button onClick={signOutUser} variant="outline" className="mt-4 md:mt-0">
              Sign Out
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="certs">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="pt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">About Me Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="about-me">Main Bio</Label>
                  <Textarea
                    id="about-me"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                    rows={6}
                    className="text-base"
                  />
                </div>
                <div className="p-4 border rounded-lg bg-secondary/50 space-y-3">
                   <h4 className="font-semibold text-sm">✨ AI-Powered Tailoring</h4>
                   <p className="text-sm text-muted-foreground">
                     Enter a job role below (e.g., "AI Research Scientist") and the AI will rewrite your bio to highlight the most relevant skills.
                   </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      id="job-role"
                      placeholder="Enter job role..."
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                    />
                    <Button onClick={handleTailorBio} disabled={isLoading} className="sm:w-auto w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Tailoring...
                        </>
                      ) : (
                        'Tailor with AI'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="pt-6">
               <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Skills Portfolio</h3>
                  <Button variant="outline"><PlusCircle className="mr-2"/> Add Skill Category</Button>
                </div>
                 {skills.map((cat, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="text-lg">{cat.category}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </CardContent>
                    </Card>
                 ))}
               </div>
            </TabsContent>
            <TabsContent value="certs" className="pt-6">
               <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Courses & Certifications</h3>
                    <Button variant="outline"><PlusCircle className="mr-2" /> Add Certification</Button>
                </div>
                {certifications.map((cert, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </CardContent>
                    </Card>
                ))}
               </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
            <Button onClick={handleSaveChanges} className="w-full md:w-auto ml-auto">Save All Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


function AdminPage() {
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
      console.error(err);
    }
  };

  if (user) {
    return <AdminDashboard />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin panel.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AdminArea() {
  return <AdminPage />;
}
