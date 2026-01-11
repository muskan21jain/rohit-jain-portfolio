import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">About Dr. Jain</h2>
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg border-none">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="https://drive.google.com/uc?id=12hfAzCuk25QXne1eF3w5sfqHU1HWX9Ri"
                alt="Dr. Rohit Jain"
                width={400}
                height={500}
                className="object-cover h-full w-full"
                data-ai-hint="professional doctor portrait"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">A Commitment to Surgical Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Dr. Rohit Jain is a trusted and highly skilled GI surgeon dedicated to providing state-of-the-art surgical care. With a foundation built on rigorous training and a passion for tackling complex cases, he has established himself as a respected figure in the field of surgical gastroenterology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p>King George’s Medical University (KGMU), Lucknow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Current Position</h4>
                      <p>Assistant Professor – Surgical Gastroenterology (SGE), KGMU</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
