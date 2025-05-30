import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b]">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="small" />
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering sustainable IT solutions powered by clean wind energy from the heart of the Ruhr region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-[#10b981] transition-colors">Manufacturing AI</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#10b981] transition-colors">Secure Cloud Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#10b981] transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#10b981] transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#10b981] transition-colors">Green IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#10b981] transition-colors">About Us</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#10b981] transition-colors">Our History</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#10b981] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">Innovation Hub</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#10b981] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#10b981] transition-colors">Imprint</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ruhrpott.ai — All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              From coal mining heritage to <span className="text-green-500">zero-carbon AI</span> — Transforming the Ruhr region
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
