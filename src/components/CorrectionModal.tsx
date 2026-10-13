'use client';

import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';

interface CorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  politicianId?: string;
  politicianName?: string;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  isOpen,
  onClose,
  politicianId,
  politicianName,
}) => {
  const { t, isTamil } = useLanguage();
  const { submitCorrection } = useStore();

  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<'Salary/Remuneration' | 'Constituency Info' | 'Election Data' | 'Biographical' | 'Other'>('Election Data');
  const [reportedClaim, setReportedClaim] = useState('');
  const [suggestedCorrection, setSuggestedCorrection] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !reportedClaim || !suggestedCorrection || !sourceUrl) {
      setErrorMsg(isTamil ? 'அனைத்து தேவையான புலங்களையும் நிரப்பவும்.' : 'Please fill all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitCorrection({
        politician_id: politicianId,
        politician_name: politicianName,
        user_email: email,
        category,
        reported_claim: reportedClaim,
        suggested_correction: suggestedCorrection,
        supporting_source_url: sourceUrl,
      });
      setSubmitted(true);
    } catch {
      setErrorMsg(isTamil ? 'பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.' : 'Submission error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-gradient-to-r from-[#073324] to-[#16654b] text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-base font-bold text-amber-300">
                {isTamil ? "தகவல் சரிபார்ப்பு & திருத்தப் படிவம்" : "Civic Accuracy & Correction Form"}
              </h3>
              {politicianName && (
                <p className="text-xs text-emerald-200">
                  {isTamil ? `பொருப்பாளர்: ${politicianName}` : `Representative: ${politicianName}`}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                {isTamil ? "உங்கள் திருத்தம் பதிவு செய்யப்பட்டது!" : "Correction Submitted for Verification!"}
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                {isTamil
                  ? "நன்றி. உங்கள் விண்ணப்பம் மற்றும் ஆதார இணைப்பு எங்கள் உண்மை சரிபார்ப்புக் குழுவால் ஆய்வு செய்யப்பட்டு அரசிதழுடன் ஒப்பிடப்படும்."
                  : "Thank you. Our verification desk will cross-examine your submission against official gazettes."}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-[#0d4a36] text-amber-300 text-xs font-semibold hover:bg-[#073324]"
              >
                {isTamil ? "மூடுக" : "Close"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {isTamil ? "உங்கள் மின்னஞ்சல் முகவரி" : "Your Email Address"} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="citizen@example.com"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {isTamil ? "திருத்தப் பிரிவு" : "Category"} *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                >
                  <option value="Election Data">{isTamil ? "தேர்தல் தரவு" : "Election Data"}</option>
                  <option value="Salary/Remuneration">{isTamil ? "சம்பளம் / படிகள்" : "Salary / Remuneration"}</option>
                  <option value="Constituency Info">{isTamil ? "தொகுதி விவரம்" : "Constituency Info"}</option>
                  <option value="Biographical">{isTamil ? "சுயவிவரம்" : "Biographical"}</option>
                  <option value="Other">{isTamil ? "மற்றவை" : "Other"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {isTamil ? "தளத்தில் உள்ள தற்போதைய தவறு" : "Current Claim on Portal"} *
                </label>
                <input
                  type="text"
                  required
                  value={reportedClaim}
                  onChange={(e) => setReportedClaim(e.target.value)}
                  placeholder={isTamil ? "எ.கா. 2021 வாக்குப்பதிவு வித்தியாசம்..." : "e.g., 2021 margin shown as..."}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {isTamil ? "சரியான தகவல்" : "Suggested Accurate Fact"} *
                </label>
                <textarea
                  rows={2}
                  required
                  value={suggestedCorrection}
                  onChange={(e) => setSuggestedCorrection(e.target.value)}
                  placeholder={isTamil ? "அதிகாரப்பூர்வ உண்மையான விபரம்..." : "Accurate verified figure or text..."}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {isTamil ? "அதிகாரப்பூர்வ ஆதார இணைய இணைப்பு (ECI / Gazette URL)" : "Official Citation URL (ECI, Gazette, Sansad)"} *
                </label>
                <input
                  type="url"
                  required
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="https://www.eci.gov.in/..."
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  {isTamil ? "ரத்து" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#0d4a36] text-amber-300 rounded-xl hover:bg-[#073324] disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (isTamil ? "அனுப்பப்படுகிறது..." : "Submitting...") : (isTamil ? "சமர்ப்பி" : "Submit")}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
