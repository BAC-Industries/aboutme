"use client";

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from './ui/skeleton';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to a login page if not authenticated and not loading.
      // The /admin page itself has the login form, so we can redirect there.
      router.push('/admin'); 
    }
  }, [user, loading, router]);

  if (loading || !user) {
    // Show a loading skeleton while checking auth state or if there's no user.
    // This prevents a flash of the protected content.
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="w-full max-w-md h-96" />
      </div>
    );
  }

  // If user is authenticated, render the children
  return <>{children}</>;
}
