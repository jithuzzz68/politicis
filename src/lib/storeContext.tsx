'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Politician,
  PoliticalParty,
  District,
  Constituency,
  RemunerationRule,
  PublicRecordItem,
  TimelineEvent,
  CorrectionReport,
  AdminAuditLog,
} from '@/types';
import {
  POLITICIANS as INITIAL_POLITICIANS,
  POLITICAL_PARTIES as INITIAL_PARTIES,
  DISTRICTS as INITIAL_DISTRICTS,
  CONSTITUENCIES as INITIAL_CONSTITUENCIES,
  REMUNERATION_RULES as INITIAL_REMUNERATION,
  PUBLIC_RECORDS as INITIAL_RECORDS,
  TIMELINE_EVENTS as INITIAL_EVENTS,
} from '@/data/seedData';
import { isSupabaseConfigured, supabase } from './supabase';

interface StoreContextType {
  politicians: Politician[];
  parties: PoliticalParty[];
  districts: District[];
  constituencies: Constituency[];
  remunerationRules: Record<string, RemunerationRule>;
  publicRecords: PublicRecordItem[];
  timelineEvents: TimelineEvent[];
  correctionReports: CorrectionReport[];
  auditLogs: AdminAuditLog[];
  savedPoliticianIds: string[];
  isDemoMode: boolean;
  isAdminAuthenticated: boolean;
  adminUserEmail: string | null;
  toggleSavePolitician: (id: string) => void;
  isPoliticianSaved: (id: string) => boolean;
  submitCorrection: (report: Omit<CorrectionReport, 'id' | 'status' | 'submitted_at'>) => Promise<boolean>;
  loginAdmin: (email: string, pass: string) => Promise<boolean>;
  logoutAdmin: () => void;
  addPolitician: (politician: Politician) => void;
  updatePolitician: (politician: Politician) => void;
  archivePolitician: (id: string) => void;
  updateRemunerationRule: (rule: RemunerationRule) => void;
  addPublicRecord: (record: PublicRecordItem) => void;
  resolveCorrectionReport: (reportId: string, status: 'approved' | 'rejected', notes?: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [politicians, setPoliticians] = useState<Politician[]>(INITIAL_POLITICIANS);
  const [parties] = useState<PoliticalParty[]>(INITIAL_PARTIES);
  const [districts] = useState<District[]>(INITIAL_DISTRICTS);
  const [constituencies] = useState<Constituency[]>(INITIAL_CONSTITUENCIES);
  const [remunerationRules, setRemunerationRules] = useState<Record<string, RemunerationRule>>(INITIAL_REMUNERATION);
  const [publicRecords, setPublicRecords] = useState<PublicRecordItem[]>(INITIAL_RECORDS);
  const [timelineEvents] = useState<TimelineEvent[]>(INITIAL_EVENTS);
  const [savedPoliticianIds, setSavedPoliticianIds] = useState<string[]>([]);
  const [correctionReports, setCorrectionReports] = useState<CorrectionReport[]>([
    {
      id: "cr-sample-1",
      politician_id: "edappadi-k-palaniswami",
      politician_name: "Edappadi K. Palaniswami",
      user_email: "citizen.observer@arasiyalarivu.tn",
      category: "Election Data",
      reported_claim: "1989 Edappadi Assembly Election vote count clarification",
      suggested_correction: "Verify 1989 margin as per ECI statistical table 4",
      supporting_source_url: "https://www.eci.gov.in/",
      status: "pending",
      submitted_at: "2026-03-20T10:15:00Z"
    }
  ]);
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>([
    {
      id: "log-init-1",
      admin_email: "system.verifier@arasiyalarivu.tn.gov.in",
      action_type: "UPDATE_SALARY_RULE",
      target_id: "rem-mla-tn",
      details: "Verified statutory basic pay and constituency allowance against TN Act No. 12 of 2018",
      timestamp: "2026-04-01T09:00:00Z"
    }
  ]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminUserEmail, setAdminUserEmail] = useState<string | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const savedIds = localStorage.getItem('arasiyal_saved_politicians');
      if (savedIds) {
        setSavedPoliticianIds(JSON.parse(savedIds));
      }

      const storedPoliticians = localStorage.getItem('arasiyal_custom_politicians');
      if (storedPoliticians) {
        setPoliticians(JSON.parse(storedPoliticians));
      }

      const storedRecords = localStorage.getItem('arasiyal_custom_records');
      if (storedRecords) {
        setPublicRecords(JSON.parse(storedRecords));
      }

      const storedCorrections = localStorage.getItem('arasiyal_corrections');
      if (storedCorrections) {
        setCorrectionReports(JSON.parse(storedCorrections));
      }

      const storedAudit = localStorage.getItem('arasiyal_audit_logs');
      if (storedAudit) {
        setAuditLogs(JSON.parse(storedAudit));
      }

      const adminSession = localStorage.getItem('arasiyal_admin_session');
      if (adminSession) {
        const parsed = JSON.parse(adminSession);
        setIsAdminAuthenticated(true);
        setAdminUserEmail(parsed.email);
      }
    } catch {
      // Ignore parsing errors
    }
  }, []);

  const toggleSavePolitician = (id: string) => {
    setSavedPoliticianIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('arasiyal_saved_politicians', JSON.stringify(updated));
      return updated;
    });
  };

  const isPoliticianSaved = (id: string) => savedPoliticianIds.includes(id);

  const submitCorrection = async (
    report: Omit<CorrectionReport, 'id' | 'status' | 'submitted_at'>
  ): Promise<boolean> => {
    const newReport: CorrectionReport = {
      ...report,
      id: `cr-${Date.now()}`,
      status: 'pending',
      submitted_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('correction_reports').insert([newReport]);
      } catch {
        // Fall back to local store
      }
    }

    setCorrectionReports((prev) => {
      const updated = [newReport, ...prev];
      localStorage.setItem('arasiyal_corrections', JSON.stringify(updated));
      return updated;
    });

    return true;
  };

  const loginAdmin = async (email: string, pass: string): Promise<boolean> => {
    // If Supabase Auth is enabled
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
      if (!error && data.user) {
        setIsAdminAuthenticated(true);
        setAdminUserEmail(data.user.email || email);
        localStorage.setItem('arasiyal_admin_session', JSON.stringify({ email: data.user.email }));
        return true;
      }
    }

    // Demo admin credentials for immediate local testing
    if (email === 'admin@arasiyalarivu.tn.gov.in' && pass === 'admin123') {
      setIsAdminAuthenticated(true);
      setAdminUserEmail(email);
      localStorage.setItem('arasiyal_admin_session', JSON.stringify({ email }));
      return true;
    }

    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setAdminUserEmail(null);
    localStorage.removeItem('arasiyal_admin_session');
    if (isSupabaseConfigured && supabase) {
      supabase.auth.signOut().catch(() => {});
    }
  };

  const logAction = (action_type: AdminAuditLog['action_type'], target_id: string, details: string) => {
    const newLog: AdminAuditLog = {
      id: `log-${Date.now()}`,
      admin_email: adminUserEmail || 'admin@arasiyalarivu.tn.gov.in',
      action_type,
      target_id,
      details,
      timestamp: new Date().toISOString(),
    };
    setAuditLogs((prev) => {
      const updated = [newLog, ...prev];
      localStorage.setItem('arasiyal_audit_logs', JSON.stringify(updated));
      return updated;
    });
  };

  const addPolitician = (newPol: Politician) => {
    setPoliticians((prev) => {
      const updated = [newPol, ...prev];
      localStorage.setItem('arasiyal_custom_politicians', JSON.stringify(updated));
      return updated;
    });
    logAction('CREATE_POLITICIAN', newPol.id, `Added politician profile: ${newPol.name_en}`);
  };

  const updatePolitician = (updatedPol: Politician) => {
    setPoliticians((prev) => {
      const updated = prev.map((p) => (p.id === updatedPol.id ? updatedPol : p));
      localStorage.setItem('arasiyal_custom_politicians', JSON.stringify(updated));
      return updated;
    });
    logAction('UPDATE_POLITICIAN', updatedPol.id, `Updated details for: ${updatedPol.name_en}`);
  };

  const archivePolitician = (id: string) => {
    setPoliticians((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, is_current: false } : p));
      localStorage.setItem('arasiyal_custom_politicians', JSON.stringify(updated));
      return updated;
    });
    logAction('ARCHIVE_POLITICIAN', id, `Archived politician record ${id}`);
  };

  const updateRemunerationRule = (rule: RemunerationRule) => {
    setRemunerationRules((prev) => ({
      ...prev,
      [rule.id]: rule,
    }));
    logAction('UPDATE_SALARY_RULE', rule.id, `Updated remuneration rule for ${rule.position_name_en}`);
  };

  const addPublicRecord = (record: PublicRecordItem) => {
    setPublicRecords((prev) => {
      const updated = [record, ...prev];
      localStorage.setItem('arasiyal_custom_records', JSON.stringify(updated));
      return updated;
    });
    logAction('ADD_PUBLIC_RECORD', record.id, `Published public record: ${record.title_en}`);
  };

  const resolveCorrectionReport = (reportId: string, status: 'approved' | 'rejected', notes?: string) => {
    setCorrectionReports((prev) => {
      const updated = prev.map((cr) =>
        cr.id === reportId ? { ...cr, status, reviewed_at: new Date().toISOString(), admin_notes: notes } : cr
      );
      localStorage.setItem('arasiyal_corrections', JSON.stringify(updated));
      return updated;
    });
    logAction('RESOLVE_CORRECTION', reportId, `Marked correction report as ${status}`);
  };

  return (
    <StoreContext.Provider
      value={{
        politicians,
        parties,
        districts,
        constituencies,
        remunerationRules,
        publicRecords,
        timelineEvents,
        correctionReports,
        auditLogs,
        savedPoliticianIds,
        isDemoMode: !isSupabaseConfigured,
        isAdminAuthenticated,
        adminUserEmail,
        toggleSavePolitician,
        isPoliticianSaved,
        submitCorrection,
        loginAdmin,
        logoutAdmin,
        addPolitician,
        updatePolitician,
        archivePolitician,
        updateRemunerationRule,
        addPublicRecord,
        resolveCorrectionReport,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
