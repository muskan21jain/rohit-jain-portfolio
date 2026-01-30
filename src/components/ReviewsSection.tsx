"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

const ReviewProfileSlider = () => {
    const slides = [
      {
        type: "video",
        title: "Patient Video Testimonial",
        name: "Verified Patient",
        role: "Post Surgery Recovery",
        text:
          "Doctor explained the procedure clearly and made us very comfortable. The surgery and recovery went smoothly. We are very thankful for the care and guidance.",
        videoId: "mExBu4AD3MI", // your youtube id
      },
      {
        type: "image",
        title: "Patient Experience",
        name: "Family Feedback",
        role: "GI Treatment",
        text:
          "Professional, calm and highly knowledgeable. We received excellent treatment and follow-up support. Highly recommended for gastrointestinal care.",
      },
    ];
  
    const [index, setIndex] = useState(0);
  
    const next = () => setIndex((p) => (p + 1) % slides.length);
    const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);
  
    /* auto slide */
    useEffect(() => {
      const t = setInterval(next, 6000);
      return () => clearInterval(t);
    }, []);
  
    const slide = slides[index];
  
    return (
      <section className="py-20 bg-gradient-to-b from-muted/40 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
  
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Patient Review Profiles
            </h2>
            <p className="mt-2 text-muted-foreground">
              Real feedback and recovery experiences
            </p>
          </div>
  
          {/* Slider Card */}
          <div className="relative rounded-3xl border bg-white shadow-lg overflow-hidden">
  
            <div className="grid md:grid-cols-2">
  
              {/* LEFT — MEDIA */}
              <div className="relative min-h-[260px] md:min-h-[380px] bg-black">
  
                {slide.type === "video" ? (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${slide.videoId}/hqdefault.jpg`}
                      alt="video review"
                      fill
                      className="object-cover"
                    />
  
                    <a
                      href={`https://www.youtube.com/watch?v=${slide.videoId}`}
                      target="_blank"
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                    >
                      <PlayCircle className="h-16 w-16 text-white drop-shadow-xl" />
                    </a>
                  </>
                ) : (
                  <Image
                    src={"https://drive.google.com/uc?id=1krVHVcrfBMHKaxy3kqUMb488Gsa6Jrk4"}
                    alt="patient"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
  
              {/* RIGHT — TEXT */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
  
                <span className="text-primary text-sm font-medium">
                  {slide.title}
                </span>
  
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  “{slide.text}”
                </p>
  
                <div className="mt-6">
                  <p className="font-semibold text-foreground">
                    {slide.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {slide.role}
                  </p>
                </div>
  
              </div>
            </div>
  
            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>
  
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
  
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ReviewProfileSlider;