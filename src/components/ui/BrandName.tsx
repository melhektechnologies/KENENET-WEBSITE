import React from "react";

export interface BrandNameProps {
  short?: boolean;
  className?: string;
}

export const BrandName: React.FC<BrandNameProps> = ({ short = false, className }) => {
  return (
    <span className={className}>
      {short ? "Kenenét" : "Kenenét Consultancy"}
    </span>
  );
};

