import { Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const newsItems = [
  {
    date: 'October 26, 2024',
    title: 'Speaking at AI Dev World 2024',
    description: 'I will be giving a talk on "The Future of Autonomous AI Agents" at the AI Dev World conference. Hope to see you there!',
  },
  {
    date: 'September 15, 2024',
    title: 'New Research Paper Published',
    description: 'My latest research on reinforcement learning for robotic pathfinding has been published in the Journal of AI Research.',
  },
  {
    date: 'August 1, 2024',
    title: 'Attending the International Conference on Machine Learning',
    description: 'Excited to be attending ICML this year to learn about the latest advancements in the field.',
  },
];

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
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
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
      </div>
    </section>
  );
}
