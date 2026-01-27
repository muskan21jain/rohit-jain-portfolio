import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Dr. Rohit Jain
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-semibold text-primary">
            Gastrointestinal & Hepato-pancreato-biliary (HPB) Surgeon
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            “Delivering expert care in complex gastrointestinal surgeries”
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" passHref>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Appointment
              </Button>
            </Link>
            <Link href="/#contact" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Me
                <MoveRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
    </section>
  );
}
