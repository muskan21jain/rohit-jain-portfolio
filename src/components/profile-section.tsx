import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic } from "lucide-react";

export default function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic & Clinical Profile</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Dedicated to advancing medical knowledge and training the next generation of surgeons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Assistant Professor</CardTitle>
                  <CardDescription>Surgical Gastroenterology, KGMU</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As a faculty member at King George’s Medical University, Dr. Jain is actively involved in teaching and mentoring medical students and residents, shaping the future of surgical practice with a focus on evidence-based medicine and innovative techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mic className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Academic Contributions</CardTitle>
                  <CardDescription>Publications & Conferences</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dr. Jain contributes to the surgical community through research publications and presentations at national and international conferences. This section can be expanded to include a list of his key contributions. (Optional future expansion)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
