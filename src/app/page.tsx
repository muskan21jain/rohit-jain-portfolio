
import Image from "next/image";
import {
  User,
  MapPin,
  Phone,
  Mail,
  List,
  Briefcase,
  GraduationCap,
  Award,
  Mic,
  Presentation,
  FlaskConical,
  BookOpen,
  BookMarked,
  ShieldCheck,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profileData } from "./profile/data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Slider from "@/components/Slider";

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center text-xl md:text-2xl text-foreground">
        <Icon className="mr-3 h-6 w-6 text-primary" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const TimelineItem = ({
  item,
}: {
  item: {
    role?: string;
    degree?: string;
    institution: string;
    period: string;
    description?: string;
    icon: React.ElementType;
  };
}) => (
  <div className="flex gap-x-3">
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-border">
      <div className="relative z-10 size-7 flex justify-center items-center">
        <div className="size-7 rounded-full bg-secondary flex justify-center items-center">
          <item.icon className="h-4 w-4 text-primary" />
        </div>
      </div>
    </div>
    <div className="grow pt-1 pb-8">
      <h3 className="font-semibold text-foreground">
        {item.role || item.degree}
      </h3>
      <p className="text-sm text-muted-foreground">{item.institution}</p>
      <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
      {item.description && (
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
      )}
    </div>
  </div>
);

export default function ProfilePage() {
  const sliderImages = [
    "https://drive.google.com/uc?id=15U1j4vZAyITdjzzJTlZjqAAY0C8pdj4U",
    "https://drive.google.com/uc?id=1LdzZkEyZUVkp91O6QP8loXs4Btk9lPmx",
    "https://drive.google.com/uc?id=1K0VxSEZrabnktESKAgvNP9SzNe-t2G1g",
    "https://drive.google.com/uc?id=1ocOjRddEmjM2K4op37jS3AOcB38q84Bn",
  ];

  return (
    <>
      <Header />
      <Slider images={sliderImages} />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Column (Personal Info) */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left mb-6">
                    <div className="relative w-24 h-24 mb-16 md:mb-0 md:mr-4 flex-shrink-0">
                        <Image
                        src={profileData.personal.photoUrl}
                        alt={profileData.personal.name}
                        width={96}
                        height={96}
                        className="rounded-full object-cover border-4 border-primary"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-foreground">
                            {profileData.personal.name}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {profileData.personal.sex} | DOB: {profileData.personal.dob}
                        </p>
                        <div className="text-sm mt-2 space-y-1">
                            <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                                <a href={`mailto:${profileData.contact.email}`} className="hover:text-primary break-all">
                                    {profileData.contact.email}
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>{profileData.contact.phone.join(" | ")}</span>
                            </div>
                            <div className="flex items-start justify-center md:justify-start text-muted-foreground">
                                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{profileData.contact.address}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center"><List className="mr-2 h-5 w-5" />About Me</h3>
                  <p className="italic text-muted-foreground mb-4">
                    "{profileData.about.quote}"
                  </p>
                  <h4 className="font-semibold mb-2">Interested In:</h4>
                  <ul className="space-y-2 text-sm">
                    {profileData.about.interests.map((interest) => (
                      <li key={interest} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Right Column (Professional Details) */}
          <div className="lg:col-span-7 space-y-8">
            <Section icon={Briefcase} title="Work Experience">
              <div>
                {profileData.experience.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </Section>

            <Section icon={GraduationCap} title="Education">
              <div>
                {profileData.education.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </Section>

            <div className="grid md:grid-cols-2 gap-8">
              <Section icon={Award} title="Registration Details">
                <ul className="space-y-2 text-sm">
                  {profileData.registration.map((reg) => (
                    <li key={reg.council}>
                      <span className="font-semibold">{reg.council}: </span>
                      <span className="text-muted-foreground">{reg.number}</span>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section icon={Award} title="Memberships">
                <ul className="space-y-2 text-sm">
                  {profileData.memberships.map((mem, i) => (
                    <li key={i} className="flex items-center">
                      <mem.icon className="h-4 w-4 text-accent mr-2" />
                      <span className="text-muted-foreground">{mem.name}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
            
            <Section icon={ShieldCheck} title="Career Skills">
               <ul className="space-y-2 text-sm">
                 {profileData.skills.map((item) => (
                   <li key={item.skill} className="flex items-start">
                     <item.icon className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                     <span className="text-muted-foreground">{item.skill}</span>
                   </li>
                 ))}
               </ul>
            </Section>

            <Section icon={Mic} title="Conferences Attended">
              <ul className="space-y-3 text-sm">
                {profileData.conferences.map((item) => (
                  <li key={item.name} className="flex items-center">
                    <item.icon className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Section>
            
            <Section icon={Wrench} title="Workshops Attended">
              <ul className="space-y-3 text-sm">
                {profileData.workshops.map((item) => (
                  <li key={item.name} className="flex items-center">
                    <item.icon className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Section>
            
            <Section icon={Presentation} title="Papers Presented">
               <ul className="space-y-4 text-sm">
                {profileData.papers.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <item.icon className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">{item.type}</p>
                        <p className="text-muted-foreground">'{item.title}'</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={BookOpen} title="Publications">
              <ul className="space-y-4 text-sm">
                {profileData.publications.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <item.icon className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-muted-foreground italic">{item.journal}</p>
                        {item.pmid && <p className="text-xs text-muted-foreground">PMID: {item.pmid}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={FlaskConical} title="Research Projects">
              <ul className="space-y-4 text-sm">
                {profileData.research.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <item.icon className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                     <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-muted-foreground">{item.organization} {item.organization && '|'} {item.period}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
            
            <Section icon={BookMarked} title="Thesis Work">
              <ul className="space-y-4 text-sm">
                {profileData.thesis.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <item.icon className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">{item.degree}</p>
                        <p className="text-muted-foreground">'{item.title}'</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
