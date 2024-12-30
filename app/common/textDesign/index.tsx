import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  theme?: 'dark' | 'light'; 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children , theme = 'light' }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className={`${theme === 'dark' ? 'bg-white' : 'bg-black'} w-7 md:w-11 h-[3px] rounded-lg`}></div>
      <p className="text-crimson font-semibold text-[12px] md:text-[18px]">{children}</p>
      <div className={`${theme === 'dark' ? 'bg-white' : 'bg-black'} w-7 md:w-11 h-[3px] rounded-lg`}></div>
    </div>
  );
};

export default SectionTitle;
