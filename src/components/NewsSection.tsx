import { Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const newsItems: any[] = [];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">News & Updates</h2>
          <p className="text-xl text-muted-foreground mt-3">
            Stay up to date with my latest activities and events.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
            {newsItems.map((item) => (
              <Card key={item.title} className="transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="flex items-start p-6">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <CardTitle className="text-xl font-headline mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/80">{item.description}</CardDescription>
                  </div>
                </div>
              </Card>
            ))}
            </div>
          ) : (
            <Card className="text-center">
              <CardContent className="p-10">
                <p className="text-muted-foreground">No news to display at the moment. Please check back later!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
