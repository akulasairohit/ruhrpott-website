import { FC } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="md:hidden pt-4 pb-3 border-t border-[#1e293b] mt-3">
      <nav className="flex flex-col space-y-3">
        <a 
          href="#services" 
          className="hover:bg-[#1e293b] px-3 py-2 rounded-md transition-colors"
          onClick={handleLinkClick}
        >
          Services
        </a>
        <a 
          href="#about" 
          className="hover:bg-[#1e293b] px-3 py-2 rounded-md transition-colors"
          onClick={handleLinkClick}
        >
          About Us
        </a>
        <a 
          href="#contact" 
          className="bg-[#10b981] hover:bg-[#059669] text-white px-3 py-2 rounded-md transition-colors font-semibold text-center"
          onClick={handleLinkClick}
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
