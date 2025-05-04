import { FC } from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  withText?: boolean;
}

const LogoSizes = {
  small: 'h-10 w-auto',
  medium: 'h-16 w-auto',
  large: 'h-28 w-auto',
};

const Logo: FC<LogoProps> = ({ size = 'medium', withText = true }) => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/attached_assets/logo-ruhrpott.png" 
        alt="Ruhrpott.ai Logo" 
        className={LogoSizes[size]}
      />
      {withText && (
        <span className={`font-bold ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          Ruhrpott.ai
        </span>
      )}
    </div>
  );
};

export default Logo;
