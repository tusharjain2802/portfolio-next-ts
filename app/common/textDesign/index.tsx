import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="bg-black w-11 h-[3px] rounded-lg"></div>
      <p className="text-crimson font-semibold text-[18px]">{children}</p>
      <div className="bg-black w-11 h-[3px] rounded-lg"></div>
    </div>
  );
};

export default SectionTitle;
