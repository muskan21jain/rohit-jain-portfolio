import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dr. Rohit Jain</h3>
            <p className="text-muted-foreground">Gastrointestinal & HPB Surgeon</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" aria-label="LinkedIn Profile">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:contact@drrohitjain.com" aria-label="Email">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="tel:+910000000000" aria-label="Phone">
              <Phone className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Rohit Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
