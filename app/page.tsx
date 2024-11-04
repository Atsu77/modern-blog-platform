import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Newspaper, Tags, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Monochrome
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          A modern blogging platform for sharing your thoughts with the world.
          Write, read, and connect with fellow writers.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/posts">
              Start Reading <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/register">Join Now</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <Card className="p-6">
          <Newspaper className="mb-4 h-12 w-12" />
          <h2 className="mb-2 text-xl font-semibold">Write Stories</h2>
          <p className="mb-4 text-muted-foreground">
            Share your thoughts with Markdown support and a beautiful editor
            experience.
          </p>
        </Card>

        <Card className="p-6">
          <Tags className="mb-4 h-12 w-12" />
          <h2 className="mb-2 text-xl font-semibold">Organize Content</h2>
          <p className="mb-4 text-muted-foreground">
            Keep your content organized with categories and tags.
          </p>
        </Card>

        <Card className="p-6">
          <Users className="mb-4 h-12 w-12" />
          <h2 className="mb-2 text-xl font-semibold">Build Community</h2>
          <p className="mb-4 text-muted-foreground">
            Engage with readers through comments and discussions.
          </p>
        </Card>
      </section>
    </div>
  );
}