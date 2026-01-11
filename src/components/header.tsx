"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Full Profile' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        // Navigate to home page if not already there, then scroll
        if (window.location.pathname !== '/') {
            window.location.href = `/${href.substring(1)}`;
        } else {
            const targetId = href.substring(2); // remove /#
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    if (href.startsWith('/#')) {
      return (
        <a href={href} onClick={(e) => handleLinkClick(e, href)}>
          <Button variant="ghost">{label}</Button>
        </a>
      );
    }
    return (
      <Link href={href} passHref>
        <Button variant="ghost">{label}</Button>
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
     if (href.startsWith('/#')) {
        return (
            <a href={href} className="text-lg" onClick={(e) => handleLinkClick(e, href)}>
                {label}
            </a>
        );
     }
     return (
        <Link href={href} className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            {label}
        </Link>
     )
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <HeartPulse className="h-7 w-7 text-primary" />
          <span>Dr. Rohit Jain</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label }) => (
            <NavLink key={label} href={href} label={label} />
          ))}
          <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')}>
             <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">Book Appointment</Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center gap-6 pt-10">
                {navLinks.map(({ href, label }) => (
                    <MobileNavLink key={label} href={href} label={label}/>
                ))}
                <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')}>
                    <Button className="w-full" size="lg">Book Appointment</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
