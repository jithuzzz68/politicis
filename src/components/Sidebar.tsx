'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Vote,
  Building2,
  Crown,
  Coins,
  Scale,
  History,
  MapPin,
  FileText,
  Bookmark,
  Info,
  Shield,
  X,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function SidebarInner({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t, isTamil } = useLanguage();
  const { savedPoliticianIds } = useStore();

  const navItems = [
    { href: '/', label: t.nav.home, icon: Home },
    { href: '/politicians', label: t.nav.politicians, icon: Users },
    { href: '/mlas', label: t.nav.mlas, icon: Vote, badge: '234' },
    { href: '/mps', label: t.nav.mps, icon: Building2, badge: '57' },
    { href: '/ministers', label: t.nav.ministers, icon: Crown },
    { href: '/salary', label: t.nav.salary, icon: Coins },
    { href: '/powers', label: t.nav.powers, icon: Scale },
    { href: '/history', label: t.nav.history, icon: History },
    { href: '/districts', label: t.nav.districts, icon: MapPin, badge: '38' },
    { href: '/records', label: t.nav.records, icon: FileText },
    { href: '/saved', label: t.nav.saved, icon: Bookmark, badge: savedPoliticianIds.length > 0 ? `${savedPoliticianIds.length}` : undefined },
    { href: '/about', label: t.nav.about, icon: Info },
    { href: '/admin', label: t.nav.admin, icon: Shield },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#082b1f] text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header inside sidebar for mobile */}
        <div className="flex items-center justify-between p-4 border-b border-emerald-800/60 lg:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-amber-300">அரசியல் அறிவு</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
            {isTamil ? "முக்கிய பிரிவுகள்" : "Main Navigation"}
          </div>

          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-800/90 to-emerald-700/80 text-amber-300 shadow-sm border border-emerald-600/40'
                    : 'text-emerald-100/90 hover:bg-emerald-900/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-amber-300' : 'text-emerald-300/80 group-hover:text-amber-300'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-amber-400 text-emerald-950'
                        : 'bg-emerald-900/80 text-emerald-300 border border-emerald-700/50'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Trust & Neutrality Card */}
        <div className="p-3 m-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isTamil ? "அரசியல் நடுநிலைமை" : "100% Non-Partisan"}</span>
          </div>
          <p className="text-emerald-200/80 text-[11px] leading-relaxed">
            {isTamil
              ? "தேர்தல் ஆணையம் & சட்டப்பேரவை பதிவுகளின் அதிகாரப்பூர்வ ஆவணங்கள் மட்டுமே."
              : "Verified strictly via ECI & Legislative Gazettes without political bias."}
          </p>
        </div>
      </aside>
    </>
  );
}

export const Sidebar: React.FC<SidebarProps> = (props) => (
  <Suspense fallback={null}>
    <SidebarInner {...props} />
  </Suspense>
);
