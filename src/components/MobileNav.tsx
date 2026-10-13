'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Vote, Coins, Menu } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface MobileNavProps {
  onOpenSidebar: () => void;
}

function MobileNavInner({ onOpenSidebar }: MobileNavProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const items = [
    { href: '/', label: t.nav.home, icon: Home },
    { href: '/politicians', label: t.nav.politicians, icon: Users },
    { href: '/mlas', label: t.nav.mlas, icon: Vote },
    { href: '/salary', label: t.nav.salary, icon: Coins },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-emerald-900/10 shadow-lg px-2 py-1">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'text-[#073324] font-bold'
                  : 'text-gray-500 hover:text-emerald-800'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-[#0d4a36]' : 'text-gray-400'}`} />
              <span className="text-[10px] truncate max-w-[64px]">{item.label}</span>
            </Link>
          );
        })}

        {/* Menu drawer trigger */}
        <button
          onClick={onOpenSidebar}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-lg text-xs font-medium text-gray-500 hover:text-emerald-800"
        >
          <Menu className="w-5 h-5 mb-1 text-gray-400" />
          <span className="text-[10px]">{t.common.learnMore}</span>
        </button>
      </div>
    </nav>
  );
}

export const MobileNav: React.FC<MobileNavProps> = (props) => (
  <Suspense fallback={null}>
    <MobileNavInner {...props} />
  </Suspense>
);
