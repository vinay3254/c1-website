import React from 'react';
import * as Icons from 'lucide-react';

export interface AppIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function AppIcon({ name, className = '', size = 20 }: AppIconProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}
