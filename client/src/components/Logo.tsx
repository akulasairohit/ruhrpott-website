import { FC } from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const LogoSizes = {
  small: 'text-xl',
  medium: 'text-2xl',
  large: 'text-4xl',
};

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <div className="flex items-center">
      <span className={`font-bold ${LogoSizes[size]} text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600`}>
        Ruhrpott.ai
      </span>
    </div>
  );
};

export default Logo;
