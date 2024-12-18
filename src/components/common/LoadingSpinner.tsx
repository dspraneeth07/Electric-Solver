import React from 'react';
import { Loader2 } from 'lucide-react';
import { getLoadingAnimation } from '../../utils/animations';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  return (
    <Loader2 
      className={`${sizeClasses[size]} ${getLoadingAnimation('pulse')} ${className}`}
    />
  );
}