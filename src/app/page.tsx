import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  PlayCircle,
  Mic,
  Presentation,
} from "lucide-react";

import Footer from "@/components/footer";
import Slider from "@/components/Slider";
import YouTubeSection from "@/components/YoutubeSection";
import ReadMore from "@/components/ReadMore";
import { profileData } from "./profile/data";

/* ================= MINIMAL PREMIUM HEADER ================= */
const MinimalHeader = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
      <span className="font-serif text-lg font-semibold text-foreground">
        {profileData.personal.name}
      </span>

      <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
        {[
          ["About", "#about"],
          ["Expertise", "#expertise"],
          ["Journey", "#journey"],
          ["Academics", "#academics"],
          ["Videos", "#videos"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="hover:text-primary transition">
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

/* ================= SECTION WRAPPER ================= */
const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-16 md:py-20">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

/* ================= PAGE ================= */
export default function ProfilePage() {
  const sliderImages = [
    "https://drive.google.com/uc?id=15U1j4vZAyITdjzzJTlZjqAAY0C8pdj4U",
    "https://drive.google.com/uc?id=1LdzZkEyZUVkp91O6QP8loXs4Btk9lPmx",
    "https://drive.google.com/uc?id=1AN8col713JicGTgWee67NQqdKjEsF0GI",
    "https://drive.google.com/uc?id=1ocOjRddEmjM2K4op37jS3AOcB38q84Bn",
  ];

  return (
    <>
      <MinimalHeader />

      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Slider images={sliderImages} />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-20 container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src={profileData.personal.photoUrl}
              alt={profileData.personal.name}
              width={140}
              height={140}
              className="rounded-full border-4 border-white/30"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white">
              {profileData.personal.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/90">
              {profileData.personal.titles.join(" • ")}
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/85">
              <div className="flex flex-col sm:flex-row sm:gap-4 items-center md:items-start justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {profileData.contact.phone.join(" | ")}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profileData.contact.email}
                </div>
              </div>

              {profileData.contact.addresses.map((addr, i) => (
                <div key={i} className="flex items-start gap-2 justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>
                    {addr.location}
                    <span className="block text-xs text-white/70">{addr.timing}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
              >
                <Mail className="h-4 w-4" />
                Book Appointment
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition"
              >
                <PlayCircle className="h-4 w-4" />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <Section
        id="about"
        title="About Dr. Rohit Jain"
        subtitle="Senior surgical gastroenterologist with advanced clinical and academic expertise."
      >
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 rounded-2xl border bg-white p-8 shadow-sm text-muted-foreground leading-relaxed">
            <ReadMore text={profileData.about.bio} maxLength={600} />
          </div>
          <div className="space-y-4">
            {[
              "11+ Years of Surgical Experience",
              "10,000+ Endoscopic Procedures",
              "Advanced GI & Liver Surgeries",
              "National & International Publications",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border bg-muted/40 px-4 py-3 text-sm font-medium"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= EXPERTISE ================= */}
      <Section id="expertise" title="Areas of Expertise">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {profileData.skills.map((item) => (
            <div
              key={item.skill}
              className="rounded-2xl border bg-white p-6 hover:shadow-lg transition"
            >
              <item.icon className="h-6 w-6 text-primary mb-4" />
              <p className="font-medium">{item.skill}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= JOURNEY ================= */}
      <Section id="journey" title="Professional Journey">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-lg">
              <Briefcase className="text-primary" /> Clinical Experience
            </h3>
            <div className="space-y-6 border-l pl-6">
              {profileData.experience.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-primary" />
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} • {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-lg">
              <GraduationCap className="text-primary" /> Education & Training
            </h3>
            <div className="space-y-6 border-l pl-6">
              {profileData.education.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-primary/70" />
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} • {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ================= ACADEMICS ================= */}
      <Section id="academics" title="Academic & Research Work">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <BookOpen className="h-5 w-5 text-primary" />
              Publications
            </h4>
            <ul className="space-y-4">
              {profileData.publications.map((p, i) => (
                <li key={i}>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-muted-foreground italic">
                    {p.journal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <Award className="h-5 w-5 text-primary" />
              Research Projects
            </h4>
            <ul className="space-y-4">
              {profileData.research.map((r, i) => (
                <li key={i}>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.organization} • {r.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ================= REGISTRATION & MEMBERSHIP ================= */}
      <Section title="Registration Details & Memberships">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <Award className="h-5 w-5 text-primary" />
              Registration Details
            </h4>
            <ul className="space-y-2 text-sm">
              {profileData.registration.map((reg) => (
                <li key={reg.council}>
                  <span className="font-medium">{reg.council}: </span>
                  <span className="text-muted-foreground">{reg.number}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Memberships
            </h4>
            <ul className="space-y-2 text-sm">
              {profileData.memberships.map((mem, i) => (
                <li key={i} className="flex items-center gap-2">
                  <mem.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{mem.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ================= CONFERENCES & PAPERS ================= */}
      <Section title="Conferences Attended & Papers Presented">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <Mic className="h-5 w-5 text-primary" />
              Conferences Attended
            </h4>
            <ul className="space-y-2 text-sm">
              {profileData.conferences.map((conf, i) => (
                <li key={i} className="flex items-center gap-2">
                  <conf.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{conf.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <Presentation className="h-5 w-5 text-primary" />
              Papers Presented
            </h4>
            <ul className="space-y-4 text-sm">
              {profileData.papers.map((paper, i) => (
                <li key={i} className="flex flex-col">
                  <p className="font-medium text-foreground">{paper.type}</p>
                  <p className="text-muted-foreground">{paper.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ================= THESIS WORK ================= */}
      <Section title="Thesis Work">
        <div className="rounded-2xl border bg-white p-6">
          <ul className="space-y-4 text-sm">
            {profileData.thesis.map((thesis, i) => (
              <li key={i} className="flex flex-col">
                <p className="font-medium text-foreground">{thesis.degree}</p>
                <p className="text-muted-foreground">{thesis.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ================= VIDEOS ================= */}
      <Section
        id="videos"
        title="Patient Education"
        subtitle="Short videos to help patients understand procedures and conditions."
      >
        <div className="max-w-3xl">
          <YouTubeSection videoId="mZvWEr55d64" />
        </div>
      </Section>

      <Footer />
    </>
  );
}
