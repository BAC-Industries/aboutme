"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/use-auth';
import { generateTailoredAboutMe } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const originalAboutMe = "I'm Siddharth Bejadi, an aspiring AI engineer and full-stack developer passionate about creating scalable, production-ready intelligent systems that bridge technology and real-world impact. My focus is on AI agents, autonomous systems, and machine learning solutions optimized for performance and deployment.";

function AdminDashboard() {
  const { signOutUser } = useAuth();
  const [aboutMe, setAboutMe] = useState(originalAboutMe);
  const [jobRole, setJobRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();


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
    // Here you would typically save the 'aboutMe' content to your database.
    // For now, we'll just show a success message.
    console.log("Saving changes:", aboutMe);
    toast({
      title: 'Changes Saved!',
      description: 'Your "About Me" section has been updated locally.',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
              <CardDescription>Edit your portfolio content here.</CardDescription>
            </div>
            <Button onClick={signOutUser} variant="outline" className="mt-4 md:mt-0">
              Sign Out
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* About Me Section Editor */}
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
        </CardContent>
        <CardFooter>
            <Button onClick={handleSaveChanges} className="w-full md:w-auto">Save Changes</Button>
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

// We don't need to wrap the AdminPage in AuthGuard if the component itself handles both logged-in and logged-out states.
export default function AdminArea() {
  return <AdminPage />;
}
