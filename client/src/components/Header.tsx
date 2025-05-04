import { useState } from 'react';
import { Link } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-[#1e293b]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="hover:text-[#10b981] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#10b981] transition-colors">About Us</a>
            <a 
              href="#contact" 
              className="bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-md transition-colors font-semibold"
            >
              Contact Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
