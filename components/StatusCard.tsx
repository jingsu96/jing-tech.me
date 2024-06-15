import React from 'react';
import { Check, Ban, CircleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  status: 'success' | 'error' | 'warning' | null;
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const StatusCard: React.FC = ({ status, title, content, className }: StatusCardProps) => {
  const getStatusIcon = (status: StatusCardProps['status']) => {
    switch (status) {
      case 'success':
        return <Check size={24} color="#5c73e7" />;
      case 'error':
        return <Ban size={24} color="#5c73e7" />;
      case 'warning':
        return <CircleAlert size={24} color="#5c73e7" />;
      default:
        return <CircleAlert size={24} color="#5c73e7" />;
    }
  };

  return (
    <aside
      className={cn(
        'transition-background duration-350 relative my-6 rounded-md border-l-4 border-[#5c73e7] bg-bg-alt p-4 ease-in-out',
        className
      )}
    >
      <div className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%] transform rounded-full border-border bg-bg-alt p-2 shadow-jt1">
        {getStatusIcon(status)}
      </div>
      <strong className="text-color-info mb-2 block text-lg font-medium">{title}</strong>
      <p className="text-color-info">{content}</p>
    </aside>
  );
};

export default StatusCard;
