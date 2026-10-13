import React from 'react';
import { ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import { VerificationStatus } from '@/types';
import { useLanguage } from '@/lib/i18n';

interface VerificationBadgeProps {
  status: VerificationStatus;
  className?: string;
  showText?: boolean;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  status,
  className = '',
  showText = true,
}) => {
  const { t } = useLanguage();

  if (status === 'verified') {
    return (
      <span
        title={t.common.verified}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 ${className}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        {showText && <span>{t.common.verified}</span>}
      </span>
    );
  }

  if (status === 'pending') {
    return (
      <span
        title={t.common.verificationPending}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/80 ${className}`}
      >
        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
        {showText && <span>{t.common.verificationPending}</span>}
      </span>
    );
  }

  return (
    <span
      title={t.common.dataUnavailable}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 ${className}`}
    >
      <HelpCircle className="w-3.5 h-3.5 text-gray-500 shrink-0" />
      {showText && <span>{t.common.dataUnavailable}</span>}
    </span>
  );
};
