import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const anastomoses = [
  { name: "Esophago-colic (neck)", method: "Handsewn" },
  { name: "Anterior cologastric", method: "Handsewn" },
  { name: "Posterior RY Gastrojejunostomy", method: "Handsewn" },
  { name: "Jejuno-jejunostomy", method: "Stapled" },
  { name: "Side-to-side Colo-colic", method: "Stapled" },
];

export default function CaseStudySection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground-dark">Experience Highlight</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            A showcase of surgical precision and advanced techniques in a complex clinical scenario.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
          <CardHeader className="bg-secondary p-6">
            <CardTitle className="text-2xl font-semibold text-primary-foreground-dark">Complex Esophageal Surgery: Post-Corrosive Stricture</CardTitle>
            <CardDescription className="text-primary-foreground-dark/80">Case: Demeester Colonic Pull-Up Procedure</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-foreground-dark">Surgical Challenge</h4>
              <p className="text-muted-foreground leading-relaxed">
                The patient presented with a post-corrosive esophageal stricture, requiring a complex reconstructive procedure. A Demeester colonic pull-up was performed, utilizing a modified right colon based on the ascending branch of the left colic artery, routed retrosternally.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary-foreground-dark">Anastomoses Performed (Total 5)</h4>
              <ul className="space-y-3">
                {anastomoses.map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-3 rounded-md bg-secondary">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span className="text-primary-foreground-dark">{item.name}</span>
                    </div>
                    <Badge variant={item.method === 'Handsewn' ? 'default' : 'secondary'} className={item.method === 'Handsewn' ? 'bg-primary/20 text-primary border-primary/50' : 'bg-accent/20 text-accent border-accent/50'}>
                      {item.method}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-foreground-dark">Outcome</h4>
              <p className="text-muted-foreground leading-relaxed">
                The surgery was a success, demonstrating exceptional surgical precision and meticulous planning. The use of both handsewn and stapled techniques for the five anastomoses ensured a robust and successful reconstruction, restoring function for the patient.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
