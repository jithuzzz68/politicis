'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Shield, LogIn, LogOut, Users, Coins, FileText, CheckCircle2, AlertTriangle, Clock,
  Plus, Edit, Archive, History as HistoryIcon, Eye, UserCheck
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { VerificationBadge } from '@/components/VerificationBadge';

export default function AdminPage() {
  const { isTamil } = useLanguage();
  const {
    isAdminAuthenticated, adminUserEmail, loginAdmin, logoutAdmin,
    politicians, correctionReports, auditLogs, publicRecords,
    resolveCorrectionReport, isDemoMode
  } = useStore();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'corrections' | 'audit'>('overview');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    const success = await loginAdmin(loginEmail, loginPass);
    if (!success) {
      setLoginError(isTamil ? 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்' : 'Invalid credentials');
    }
    setIsLoggingIn(false);
  };

  const pendingCorrections = correctionReports.filter((c) => c.status === 'pending');

  // ── LOGIN WALL ──────────────────────────────────────────────────────────────
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-[#0d4a36] text-amber-300 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-extrabold text-[#073324] font-serif">
              {isTamil ? "நிர்வாகக் குழு உள்நுழைவு" : "Admin Dashboard"}
            </h1>
            <p className="text-xs text-gray-500">
              {isTamil ? "அங்கீகரிக்கப்பட்ட நிர்வாகிகள் மட்டும் அணுக முடியும்." : "Authorized administrators only."}
            </p>
          </div>

          {isDemoMode && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <p className="font-bold">{isTamil ? "சோதனை நுழைவுத் தகவல்கள் (Demo Mode):" : "Demo Credentials:"}</p>
              <p>Email: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200">admin@arasiyalarivu.tn.gov.in</code></p>
              <p>Password: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200">admin123</code></p>
            </div>
          )}

          <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            {loginError && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isTamil ? "நிர்வாக மின்னஞ்சல்" : "Admin Email"}
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@arasiyalarivu.tn.gov.in"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isTamil ? "கடவுச்சொல்" : "Password"}
              </label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-2.5 bg-[#0d4a36] hover:bg-[#073324] text-amber-300 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <LogIn className="w-4 h-4" />
              <span>{isLoggingIn ? (isTamil ? 'சரிபார்க்கிறது...' : 'Authenticating...') : (isTamil ? 'உள்நுழைக' : 'Sign In')}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── ADMIN DASHBOARD ─────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-5 md:p-6 rounded-2xl flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-950" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold font-serif">
              {isTamil ? "நிர்வாக நடுத்தளம்" : "Admin Control Panel"}
            </h1>
            <p className="text-xs text-emerald-200">
              {isTamil ? "உள்நுழைந்தவர்:" : "Logged in as:"} <span className="font-bold text-amber-300">{adminUserEmail}</span>
              {isDemoMode && <span className="ml-2 text-amber-400">[Demo Mode]</span>}
            </p>
          </div>
        </div>
        <button
          onClick={logoutAdmin}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/60 text-emerald-200 rounded-xl text-xs font-semibold hover:bg-emerald-900 border border-emerald-700"
        >
          <LogOut className="w-4 h-4" />
          <span>{isTamil ? "வெளியேறு" : "Sign Out"}</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs text-center">
          <span className="text-2xl font-bold text-emerald-900">{politicians.length}</span>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{isTamil ? "பிரதிநிதி பதிவுகள்" : "Politician Records"}</span>
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs text-center">
          <span className="text-2xl font-bold text-amber-700">{pendingCorrections.length}</span>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{isTamil ? "நிலுவைத் திருத்தங்கள்" : "Pending Reviews"}</span>
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs text-center">
          <span className="text-2xl font-bold text-blue-900">{publicRecords.length}</span>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <FileText className="w-3.5 h-3.5" />
            <span>{isTamil ? "பொது ஆவணங்கள்" : "Public Records"}</span>
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs text-center">
          <span className="text-2xl font-bold text-emerald-800">{auditLogs.length}</span>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <HistoryIcon className="w-3.5 h-3.5" />
            <span>{isTamil ? "தணிக்கை பதிவுகள்" : "Audit Log Entries"}</span>
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-200 pb-0">
        {[
          { id: 'overview', label: isTamil ? 'கண்ணோட்டம்' : 'Overview', icon: Eye },
          { id: 'corrections', label: `${isTamil ? 'திருத்தங்கள்' : 'Corrections'} (${pendingCorrections.length})`, icon: AlertTriangle },
          { id: 'audit', label: isTamil ? 'தணிக்கை பதிவு' : 'Audit Log', icon: HistoryIcon },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === id
                ? 'border-[#0d4a36] text-[#073324]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
            <h2 className="text-base font-bold text-gray-900 font-serif">
              {isTamil ? "அரசியல்வாதி பதிவுகள்" : "Politician Records Overview"}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2.5 text-left text-gray-600 font-semibold">{isTamil ? "பெயர்" : "Name"}</th>
                    <th className="px-4 py-2.5 text-left text-gray-600 font-semibold">{isTamil ? "பதவி" : "Position"}</th>
                    <th className="px-4 py-2.5 text-left text-gray-600 font-semibold">{isTamil ? "கட்சி" : "Party"}</th>
                    <th className="px-4 py-2.5 text-left text-gray-600 font-semibold">{isTamil ? "நிலை" : "Status"}</th>
                    <th className="px-4 py-2.5 text-left text-gray-600 font-semibold">{isTamil ? "சரிபார்ப்பு" : "Verified"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {politicians.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/50">
                      <td className="px-4 py-2.5 font-semibold text-gray-900">{p.name_en}</td>
                      <td className="px-4 py-2.5 text-gray-600">{p.type}</td>
                      <td className="px-4 py-2.5">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: p.party_color }}>
                          {p.party_abbr}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.is_current ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'}`}>
                          {p.is_current ? (isTamil ? 'தற்போதைய' : 'Current') : (isTamil ? 'முன்னாள்' : 'Former')}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <VerificationBadge status={p.verification_status} showText={false} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Corrections Tab */}
      {activeTab === 'corrections' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 font-serif">
            {isTamil ? "திருத்தக் கோரிக்கைகள்" : "Citizen Correction Requests"}
          </h2>
          {correctionReports.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center text-xs text-gray-500">
              {isTamil ? "இதுவரை கோரிக்கைகள் இல்லை" : "No correction requests yet"}
            </div>
          ) : (
            <div className="space-y-3">
              {correctionReports.map((cr) => (
                <div key={cr.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        cr.status === 'pending' ? 'bg-amber-100 text-amber-900' :
                        cr.status === 'approved' ? 'bg-emerald-100 text-emerald-900' :
                        'bg-red-100 text-red-900'
                      }`}>
                        {cr.status.toUpperCase()}
                      </span>
                      <span className="text-xs font-semibold text-gray-700">{cr.category}</span>
                    </div>
                    <span className="text-[11px] text-gray-400">{cr.submitted_at.split('T')[0]} • {cr.user_email}</span>
                  </div>

                  {cr.politician_name && (
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">{isTamil ? "பிரதிநிதி:" : "Representative:"}</span> {cr.politician_name}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <span className="font-bold text-red-900 block mb-1">{isTamil ? "தெரிவிக்கப்பட்ட தவறு:" : "Reported Claim:"}</span>
                      <span className="text-red-800">{cr.reported_claim}</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                      <span className="font-bold text-emerald-900 block mb-1">{isTamil ? "சரியான தகவல்:" : "Suggested Correction:"}</span>
                      <span className="text-emerald-800">{cr.suggested_correction}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-blue-700">
                    <span className="font-semibold">{isTamil ? "ஆதார URL:" : "Source URL:"}</span>{' '}
                    <a href={cr.supporting_source_url} target="_blank" rel="noopener noreferrer" className="underline">{cr.supporting_source_url}</a>
                  </p>

                  {cr.status === 'pending' && (
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => resolveCorrectionReport(cr.id, 'approved', 'Verified and updated in database.')}
                        className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isTamil ? "ஒப்புக்கொள்" : "Approve"}</span>
                      </button>
                      <button
                        onClick={() => resolveCorrectionReport(cr.id, 'rejected', 'Could not verify against official sources.')}
                        className="px-3 py-1.5 bg-red-100 text-red-800 border border-red-200 rounded-lg text-xs font-semibold hover:bg-red-200"
                      >
                        {isTamil ? "நிராகரி" : "Reject"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Audit Log Tab */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 font-serif">
            {isTamil ? "தணிக்கை நடவடிக்கை பதிவுகள்" : "Administrator Audit Logs"}
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">{isTamil ? "நேரம்" : "Timestamp"}</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">{isTamil ? "நிர்வாகி" : "Admin"}</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">{isTamil ? "நடவடிக்கை" : "Action"}</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">{isTamil ? "விவரம்" : "Details"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-2.5 text-gray-500 font-mono text-[11px]">{log.timestamp.split('T')[0]}</td>
                    <td className="px-4 py-2.5 text-gray-700 font-semibold">{log.admin_email}</td>
                    <td className="px-4 py-2.5">
                      <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-mono font-bold">
                        {log.action_type}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-gray-600 max-w-xs truncate">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
