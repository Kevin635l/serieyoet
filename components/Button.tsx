import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ease-out transform active:scale-95";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 hover:scale-105",
    outline: "border border-neutral-600 text-neutral-300 hover:border-white hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ChevronRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;