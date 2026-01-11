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
import { profileData } from "./data";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <CardTitle className="flex items-center text-xl md:text-2xl text-primary-foreground-dark">
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
      <h3 className="font-semibold text-primary-foreground-dark">
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
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Personal Info) */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={profileData.personal.photoUrl}
                    alt={profileData.personal.name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover border-4 border-primary"
                    data-ai-hint="professional doctor portrait"
                  />
                </div>
                <h1 className="text-2xl font-bold text-primary-foreground-dark">
                  {profileData.personal.name}
                </h1>
                <p className="text-muted-foreground">
                  {profileData.personal.sex} | DOB: {profileData.personal.dob}
                </p>
              </CardContent>
            </Card>

            <Section icon={MapPin} title="Contact Information">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold flex items-center mb-1">
                    <MapPin className="mr-2 h-4 w-4" /> Address
                  </h4>
                  <p className="text-muted-foreground pl-6">
                    {profileData.contact.address}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center mb-1">
                    <Phone className="mr-2 h-4 w-4" /> Phone
                  </h4>
                  {profileData.contact.phone.map((p) => (
                    <p key={p} className="text-muted-foreground pl-6">
                      {p}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold flex items-center mb-1">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </h4>
                  <p className="text-muted-foreground pl-6">
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="hover:text-primary"
                    >
                      {profileData.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </Section>

            <Section icon={List} title="About Me">
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
            </Section>
          </div>

          {/* Right Column (Professional Details) */}
          <div className="lg:col-span-2 space-y-8">
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
                        <p className="font-semibold text-primary-foreground-dark">{item.type}</p>
                        <p className="text-muted-foreground">"{item.title}"</p>
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
                        <p className="font-semibold text-primary-foreground-dark">{item.title}</p>
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
                        <p className="font-semibold text-primary-foreground-dark">{item.name}</p>
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
                        <p className="font-semibold text-primary-foreground-dark">{item.degree}</p>
                        <p className="text-muted-foreground">"{item.title}"</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
