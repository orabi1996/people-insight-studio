import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Users,
  LogOut,
  Globe,
  Bell,
  Search,
  Settings,
  Sliders,
  List,
  Megaphone,
  FileText,
  ClipboardCheck,
  TrendingUp,
  Shield,
  LayoutGrid,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الموارد البشرية | لوحة التحكم التنفيذية" },
      {
        name: "description",
        content:
          "نظام إدارة الموارد البشرية: إحصائيات القوى العاملة، حالات الموظفين، الحضور والانصراف اليومي، وتوزيع المستويات والقطاعات والجنسيات.",
      },
      { property: "og:title", content: "الموارد البشرية" },
      {
        property: "og:description",
        content: "رؤية موحدة وشاملة للحضور، الأقسام، المستويات الوظيفية، القطاعات، والطلبات المعلقة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Navigation items matching the reference design
const SUB_NAV = [
  { id: "settings", label: "إعدادات النظام", icon: Settings },
  { id: "personnel_ops", label: "عمليات شئون الموظفين", icon: Sliders },
  { id: "regulations", label: "اللوائح", icon: List },
  { id: "requests", label: "الطلبات", icon: Megaphone },
  { id: "reports", label: "التقارير", icon: FileText },
  { id: "approvals", label: "طلبات الاعتماد", icon: ClipboardCheck },
  { id: "performance", label: "تقييم الأداء", icon: TrendingUp },
  { id: "permissions", label: "الصلاحيات", icon: Shield },
  { id: "tasks", label: "إدارة المهام", icon: LayoutGrid },
];

// Attendance Today Data (Explicit Employee Counts)
const ATTENDANCE_TODAY = {
  present: 2185,
  absent: 75,
  late: 62,
  early: 28,
  totalScheduled: 2350,
  presentRate: "93.0%",
};

// Employment Status KPIs
const STATUS_KPIS = [
  {
    tone: "blue",
    icon: "👥",
    label: "إجمالي القوة العاملة",
    value: "2,350",
    delta: "↗ 8.4%",
    note: "مقارنة بالشهر السابق",
  },
  {
    tone: "green",
    icon: "✓",
    label: "الموظفون المفعلون",
    value: "2,240",
    delta: "95.3%",
    note: "على رأس العمل حالياً",
  },
  {
    tone: "rose",
    icon: "✕",
    label: "منتهي خدماتهم",
    value: "85",
    delta: "3.6%",
    note: "خلال السنة الحالية",
  },
  {
    tone: "amber",
    icon: "⚠",
    label: "موقوفون من المسيرات",
    value: "25",
    delta: "1.1%",
    note: "يتطلب مراجعة فورية",
  },
  {
    tone: "violet",
    icon: "📋",
    label: "الطلبات المعلقة",
    value: "42",
    delta: "معلق",
    note: "بانتظار الاعتماد",
  },
];

// Job Levels Distribution
const JOB_LEVELS = [
  { name: "إدارة عليا وتنفيذية", value: 120, pct: "5.1%", color: "#3f8cff" },
  { name: "إدارة وسطى وقيادي", value: 280, pct: "11.9%", color: "#19a7bd" },
  { name: "إشرافي ورؤساء أقسام", value: 450, pct: "19.1%", color: "#7b61d1" },
  { name: "تخصصي وأخصائيين", value: 720, pct: "30.6%", color: "#26a879" },
  { name: "تشغيلي ودعم ومساندة", value: 780, pct: "33.2%", color: "#efaa33" },
];

// Job Categories Distribution
const JOB_CATEGORIES = [
  { name: "تعليمي / أكاديمي", value: 1120, pct: "47.7%", color: "#3f8cff" },
  { name: "إداري ومالي", value: 540, pct: "23.0%", color: "#19a7bd" },
  { name: "خدمات ومساندة", value: 400, pct: "17.0%", color: "#efaa33" },
  { name: "تقني وهندسي", value: 290, pct: "12.3%", color: "#7b61d1" },
];

// Job Sectors Distribution
const JOB_SECTORS = [
  { name: "قطاع التعليم والمدارس", value: 1260, pct: "53.6%", classCode: "a" },
  { name: "قطاع العمليات والمساندة", value: 510, pct: "21.7%", classCode: "b" },
  { name: "قطاع الشؤون الإدارية والمالية", value: 380, pct: "16.2%", classCode: "c" },
  { name: "قطاع التحول الرقمي والتقنية", value: 200, pct: "8.5%", classCode: "d" },
];

// Nationalities Distribution & Saudization
const NATIONALITIES = [
  { name: "سعودي (نسبة التوطين)", value: 1450, pct: "61.7%", color: "#26a879" },
  { name: "مصري", value: 410, pct: "17.4%", color: "#3f8cff" },
  { name: "أردني", value: 190, pct: "8.1%", color: "#19a7bd" },
  { name: "هندي", value: 140, pct: "6.0%", color: "#7b61d1" },
  { name: "سوري", value: 90, pct: "3.8%", color: "#efaa33" },
  { name: "أخرى", value: 70, pct: "3.0%", color: "#75869a" },
];

// Pending Requests Breakdown
const PENDING_REQUESTS = [
  {
    type: "طلبات إجازات",
    count: 18,
    desc: "إجازات سنوية، مرضية، واضطرارية",
    icon: "✈",
    action: "مراجعة",
  },
  {
    type: "سلف وقروض مالية",
    count: 9,
    desc: "طلبات قروض وسلف بانتظار الاعتماد المالي",
    icon: "💰",
    action: "مراجعة",
  },
  {
    type: "استئذان وتأخير",
    count: 8,
    desc: "طلبات خروج مؤقت وإذن تأخير صباحي",
    icon: "⏱",
    action: "مراجعة",
  },
  {
    type: "خطابات تعريف وتعديل",
    count: 7,
    desc: "خطابات موجهة للبنوك والجهات الرسمية",
    icon: "📄",
    action: "مراجعة",
  },
];

// Department Ranking
const RANKS = [
  { name: "الخدمات المساندة", value: 1261 },
  { name: "هيئة التدريس", value: 890 },
  { name: "الإدارة العامة", value: 665 },
  { name: "الدعم الفني", value: 230 },
  { name: "إدارة المراحل", value: 180 },
  { name: "الصيانة والتشغيل", value: 140 },
  { name: "الموارد البشرية", value: 125 },
  { name: "السكرتارية", value: 110 },
];

// Educational Stages
const STAGES = [
  { name: "الثانوية", value: 1980 },
  { name: "المتوسطة", value: 1040 },
  { name: "الابتدائية", value: 760 },
  { name: "العالمي", value: 340 },
  { name: "المصري", value: 210 },
  { name: "الحضانة", value: 165 },
];

// Detailed Table Rows
const INITIAL_ROWS = [
  {
    branch: "الإدارة العامة",
    dept: "الإدارة العامة",
    sector: "قطاع الشؤون الإدارية والمالية",
    level: "إدارة عليا",
    category: "إداري ومالي",
    nationality: "سعودي",
    gender: "ذكر",
    status: "مفعل",
    attendance: "حاضر",
    count: "35",
  },
  {
    branch: "المرحلة الثانوية",
    dept: "هيئة التدريس",
    sector: "قطاع التعليم والمدارس",
    level: "تخصصي",
    category: "تعليمي / أكاديمي",
    nationality: "سعودي",
    gender: "أنثى",
    status: "مفعل",
    attendance: "حاضر",
    count: "140",
  },
  {
    branch: "المرحلة المتوسطة",
    dept: "هيئة التدريس",
    sector: "قطاع التعليم والمدارس",
    level: "تخصصي",
    category: "تعليمي / أكاديمي",
    nationality: "مصري",
    gender: "ذكر",
    status: "مفعل",
    attendance: "متأخر",
    count: "85",
  },
  {
    branch: "الإدارة العامة",
    dept: "الخدمات المساندة",
    sector: "قطاع العمليات والمساندة",
    level: "تشغيلي ودعم",
    category: "خدمات ومساندة",
    nationality: "هندي",
    gender: "ذكر",
    status: "مفعل",
    attendance: "حاضر",
    count: "120",
  },
  {
    branch: "المرحلة الابتدائية",
    dept: "هيئة التدريس",
    sector: "قطاع التعليم والمدارس",
    level: "إشرافي",
    category: "تعليمي / أكاديمي",
    nationality: "أردني",
    gender: "أنثى",
    status: "مفعل",
    attendance: "حاضر",
    count: "65",
  },
  {
    branch: "الإدارة العامة",
    dept: "الدعم الفني",
    sector: "قطاع التحول الرقمي والتقنية",
    level: "تخصصي",
    category: "تقني وهندسي",
    nationality: "سعودي",
    gender: "ذكر",
    status: "مفعل",
    attendance: "حاضر",
    count: "45",
  },
  {
    branch: "الإدارة العامة",
    dept: "الموارد البشرية",
    sector: "قطاع الشؤون الإدارية والمالية",
    level: "إدارة وسطى",
    category: "إداري ومالي",
    nationality: "سعودي",
    gender: "أنثى",
    status: "مفعل",
    attendance: "حاضر",
    count: "28",
  },
  {
    branch: "الخدمات المساندة",
    dept: "الصيانة والتشغيل",
    sector: "قطاع العمليات والمساندة",
    level: "تشغيلي ودعم",
    category: "خدمات ومساندة",
    nationality: "مصري",
    gender: "ذكر",
    status: "موقوف من المسير",
    attendance: "غائب",
    count: "12",
  },
  {
    branch: "المرحلة الثانوية",
    dept: "الإدارة المدرسية",
    sector: "قطاع التعليم والمدارس",
    level: "إدارة عليا",
    category: "إداري ومالي",
    nationality: "سعودي",
    gender: "ذكر",
    status: "منتهي الخدمة",
    attendance: "غائب",
    count: "8",
  },
  {
    branch: "المرحلة المتوسطة",
    dept: "الخدمات المساندة",
    sector: "قطاع العمليات والمساندة",
    level: "تشغيلي ودعم",
    category: "خدمات ومساندة",
    nationality: "هندي",
    gender: "ذكر",
    status: "مفعل",
    attendance: "انصراف مبكر",
    count: "14",
  },
];

const FILTERS_CONFIG = [
  { key: "branch", label: "الفرع", options: ["الكل", "الإدارة العامة", "المرحلة الثانوية", "المرحلة المتوسطة", "المرحلة الابتدائية", "الخدمات المساندة"] },
  { key: "dept", label: "القسم", options: ["الكل", "هيئة التدريس", "الخدمات المساندة", "الإدارة العامة", "الدعم الفني", "الموارد البشرية", "الصيانة والتشغيل"] },
  { key: "sector", label: "القطاع", options: ["الكل", "قطاع التعليم والمدارس", "قطاع العمليات والمساندة", "قطاع الشؤون الإدارية والمالية", "قطاع التحول الرقمي والتقنية"] },
  { key: "level", label: "المستوى الوظيفي", options: ["الكل", "إدارة عليا", "إدارة وسطى", "إشرافي", "تخصصي", "تشغيلي ودعم"] },
  { key: "category", label: "الفئة الوظيفية", options: ["الكل", "تعليمي / أكاديمي", "إداري ومالي", "خدمات ومساندة", "تقني وهندسي"] },
  { key: "nationality", label: "الجنسية", options: ["الكل", "سعودي", "مصري", "أردني", "هندي"] },
  { key: "status", label: "الحالة الوظيفية", options: ["الكل", "مفعل", "منتهي الخدمة", "موقوف من المسير"] },
  { key: "attendance", label: "حالة الحضور", options: ["الكل", "حاضر", "غائب", "متأخر", "انصراف مبكر"] },
];

const AVAILABLE_PANELS = [
  { id: "attendance", name: "شريط الحضور اللحظي لليوم", icon: "⏱" },
  { id: "status", name: "حالات الموظفين والمسيرات", icon: "👥" },
  { id: "levels", name: "توزيع المستويات الوظيفية", icon: "▥" },
  { id: "categories", name: "توزيع الفئات الوظيفية", icon: "▦" },
  { id: "sectors", name: "قطاعات الوظائف الحالية", icon: "☷" },
  { id: "nationalities", name: "توزيع الجنسيات والتوطين", icon: "🌐" },
  { id: "requests", name: "مركز الطلبات المعلقة", icon: "📋" },
  { id: "departments", name: "أكبر الأقسام من حيث العدد", icon: "☷" },
  { id: "gender", name: "التوزيع حسب الجنس", icon: "◔" },
  { id: "stages", name: "توزيع الموظفين حسب المرحلة", icon: "▥" },
  { id: "trend", name: "اتجاه القوى العاملة", icon: "⌁" },
  { id: "insights", name: "مؤشرات تحتاج الانتباه", icon: "✦" },
  { id: "table", name: "تفاصيل الهيكل والموظفين", icon: "▤" },
];

function PanelHead({ title, sub, actions }: { title: string; sub: string; actions?: string[] }) {
  return (
    <div className="panel-head">
      <div>
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
      <div className="panel-actions">
        {(actions ?? ["⌁", "⋯"]).map((a) => (
          <button key={a} type="button" aria-label="إجراء">
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [activeNav, setActiveNav] = useState("tasks");
  const [globalSearch, setGlobalSearch] = useState("");
  const [studioTab, setStudioTab] = useState<"widgets" | "layers" | "settings">("widgets");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [dark, setDark] = useState(false);

  // Active Panels Visibility State
  const [visiblePanels, setVisiblePanels] = useState<Record<string, boolean>>({
    attendance: true,
    status: true,
    levels: true,
    categories: true,
    sectors: true,
    nationalities: true,
    requests: true,
    departments: true,
    gender: true,
    stages: true,
    trend: true,
    insights: true,
    table: true,
  });

  // Filter selections state
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({
    branch: "الكل",
    dept: "الكل",
    sector: "الكل",
    level: "الكل",
    category: "الكل",
    nationality: "الكل",
    status: "الكل",
    attendance: "الكل",
  });

  const togglePanel = (id: string) => {
    setVisiblePanels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFilterChange = (key: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setSelectedFilters({
      branch: "الكل",
      dept: "الكل",
      sector: "الكل",
      level: "الكل",
      category: "الكل",
      nationality: "الكل",
      status: "الكل",
      attendance: "الكل",
    });
    setGlobalSearch("");
  };

  // Filtered rows for the table
  const filteredRows = useMemo(() => {
    return INITIAL_ROWS.filter((row) => {
      if (globalSearch.trim()) {
        const query = globalSearch.trim().toLowerCase();
        const matches =
          row.branch.toLowerCase().includes(query) ||
          row.dept.toLowerCase().includes(query) ||
          row.sector.toLowerCase().includes(query) ||
          row.level.toLowerCase().includes(query) ||
          row.category.toLowerCase().includes(query) ||
          row.nationality.toLowerCase().includes(query) ||
          row.status.toLowerCase().includes(query) ||
          row.attendance.toLowerCase().includes(query);
        if (!matches) return false;
      }
      if (selectedFilters.branch !== "الكل" && row.branch !== selectedFilters.branch) return false;
      if (selectedFilters.dept !== "الكل" && row.dept !== selectedFilters.dept) return false;
      if (selectedFilters.sector !== "الكل" && row.sector !== selectedFilters.sector) return false;
      if (selectedFilters.level !== "الكل" && row.level !== selectedFilters.level) return false;
      if (selectedFilters.category !== "الكل" && row.category !== selectedFilters.category) return false;
      if (selectedFilters.nationality !== "الكل" && row.nationality !== selectedFilters.nationality) return false;
      if (selectedFilters.status !== "الكل" && row.status !== selectedFilters.status) return false;
      if (selectedFilters.attendance !== "الكل" && row.attendance !== selectedFilters.attendance) return false;
      return true;
    });
  }, [selectedFilters, globalSearch]);

  const activeFiltersCount = useMemo(() => {
    return Object.values(selectedFilters).filter((v) => v !== "الكل").length;
  }, [selectedFilters]);

  const maxRank = RANKS[0]!.value;
  const maxStage = STAGES[0]!.value;
  const maxLevel = JOB_LEVELS[JOB_LEVELS.length - 1]!.value;
  const maxNat = NATIONALITIES[0]!.value;

  return (
    <div className={`app${dark ? " hrms-dark" : ""}`} dir="rtl" lang="ar">
      {/* Top Two-Tier Header */}
      <header className="app-header">
        {/* Tier 1: White Utility Bar */}
        <div className="header-top">
          {/* Right: Brand Title & Icon */}
          <div className="brand-section">
            <div className="brand-avatar">
              <Users size={20} strokeWidth={2.2} />
            </div>
            <span className="brand-title">الموارد البشرية</span>
          </div>

          {/* Left: User Info, Version, Notifications, Logout */}
          <div className="header-user-meta">
            <button
              type="button"
              className="logout-btn"
              title="تسجيل الخروج"
              aria-label="تسجيل الخروج"
              onClick={() => alert("تم تسجيل الخروج")}
            >
              <LogOut size={18} strokeWidth={2.2} />
            </button>
            <div className="divider-vert" />
            <span className="user-greeting">مرحبا ، admin@admin.com</span>
            <div className="version-pill">
              <span>🚀</span>
              <span>V1.0.3</span>
            </div>
            <button
              type="button"
              className="meta-icon-btn"
              title="إشعارات النظام"
              aria-label="إشعارات النظام"
            >
              <Bell size={18} />
              <span className="meta-badge">3</span>
            </button>
            <button
              type="button"
              className="meta-icon-btn"
              title="التنبيهات"
              aria-label="التنبيهات"
            >
              <Bell size={18} />
            </button>
            <button
              type="button"
              className="meta-icon-btn"
              title="تغيير اللغة"
              aria-label="تغيير اللغة"
            >
              <Globe size={18} />
            </button>
          </div>
        </div>

        {/* Tier 2: Dark Navy Navigation Bar */}
        <div className="header-nav-bar">
          {/* Right side: Navigation Items */}
          <div className="nav-links">
            {SUB_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-link-btn${isActive ? " active" : ""}`}
                  onClick={() => setActiveNav(item.id)}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Left side: Search Box */}
          <div className="nav-search">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="اسم، هوية، رقم وظيفي..."
            />
          </div>
        </div>
      </header>

      {/* Studio Drawer (Dashboard Customizer) */}
      <div className={`studio${open ? " open" : ""}`}>
        <div className="studio-rail">
          <button
            type="button"
            className="studio-main"
            onClick={() => setOpen((o) => !o)}
            aria-label="مصمم اللوحة"
            title="تخصيص اللوحة"
          >
            ✦
          </button>
          <button
            type="button"
            className={studioTab === "widgets" ? "active" : ""}
            onClick={() => {
              setStudioTab("widgets");
              setOpen(true);
            }}
            title="العناصر"
          >
            ⊞<span>العناصر</span>
          </button>
          <button
            type="button"
            className={studioTab === "layers" ? "active" : ""}
            onClick={() => {
              setStudioTab("layers");
              setOpen(true);
            }}
            title="الطبقات"
          >
            ☷<span>الطبقات</span>
          </button>
          <button
            type="button"
            className={studioTab === "settings" ? "active" : ""}
            onClick={() => {
              setStudioTab("settings");
              setOpen(true);
            }}
            title="الإعدادات"
          >
            ⚙<span>الإعدادات</span>
          </button>
          <div className="rail-spacer" />
          <button type="button" onClick={() => setDark((d) => !d)} title="تبديل المظهر">
            ◐<span>المظهر</span>
          </button>
        </div>

        <div className="studio-drawer">
          <div className="drawer-head">
            <div>
              <b>مصمم لوحة المعلومات</b>
              <span>{Object.values(visiblePanels).filter(Boolean).length} عناصر نشطة</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="إغلاق">
              ×
            </button>
          </div>

          {studioTab === "widgets" && (
            <>
              <div className="searchbox">
                ⌕ <input placeholder="ابحث عن ويدجت أو قسم..." />
              </div>
              <div className="section-label">عناصر التحليل المتاحة</div>
              <div className="widget-list">
                {AVAILABLE_PANELS.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => togglePanel(w.id)}
                    style={{
                      borderColor: visiblePanels[w.id] ? "var(--blue)" : "var(--line)",
                      background: visiblePanels[w.id] ? "#f4f8ff" : "var(--surface)",
                    }}
                  >
                    <i>{w.icon}</i>
                    <span>{w.name}</span>
                    <small>{visiblePanels[w.id] ? "✓" : "+"}</small>
                  </button>
                ))}
              </div>
            </>
          )}

          {studioTab === "layers" && (
            <>
              <div className="section-label">طبقات اللوحة (إظهار / إخفاء)</div>
              <div className="layers">
                {AVAILABLE_PANELS.map((l, i) => (
                  <div key={l.id} style={{ opacity: visiblePanels[l.id] ? 1 : 0.5 }}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <b>{l.name}</b>
                    <button
                      type="button"
                      aria-label="تبديل الرؤية"
                      onClick={() => togglePanel(l.id)}
                      style={{ color: visiblePanels[l.id] ? "var(--blue)" : "#94a3b8" }}
                    >
                      {visiblePanels[l.id] ? "◉" : "○"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {studioTab === "settings" && (
            <>
              <div className="section-label">إعدادات اللوحة</div>
              <div className="settings">
                <label>
                  اسم اللوحة
                  <input defaultValue="لوحة الموارد البشرية التنفيذية" />
                </label>
                <label>
                  فترة التحديث التلقائي
                  <select defaultValue="5">
                    <option value="1">كل دقيقة</option>
                    <option value="5">كل 5 دقائق</option>
                    <option value="15">كل 15 دقيقة</option>
                  </select>
                </label>
                <label>
                  الصلاحية ونطاق العرض
                  <select>
                    <option>خاص بالإدارة العليا</option>
                    <option>مديرو الموارد البشرية</option>
                    <option>الجميع (عرض فقط)</option>
                  </select>
                </label>
                <button className="save-btn" type="button" onClick={() => setOpen(false)}>
                  حفظ الإعدادات
                </button>
              </div>
            </>
          )}

          <div className="drawer-note">
            <b>وضع التصميم والتحريك</b>
            <p>فعّل التعديل لإعادة ترتيب العناصر وتخصيص حجم اللوحات.</p>
            <label>
              <input type="checkbox" checked={editing} onChange={(e) => setEditing(e.target.checked)} />
              <span />
            </label>
          </div>
        </div>
      </div>

      {/* Main Dashboard Workspace */}
      <main className="main">
        {/* Page Header */}
        <div className="page-head">
          <div>
            <div className="eyebrow">
              <i className="live-dot" /> بيانات حية متزامنة · اليوم {new Date().toLocaleDateString("ar-EG", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h1>لوحة الموارد البشرية التنفيذية</h1>
            <p>رؤية تحليلية شاملة للقوى العاملة، مؤشرات الحضور، حالات الموظفين، والقطاعات الوظيفية.</p>
          </div>
          <div className="page-actions">
            <button
              type="button"
              className={editing ? "editing" : ""}
              onClick={() => {
                setEditing((e) => !e);
                setOpen(true);
              }}
            >
              ✎ {editing ? "إنهاء التخصيص" : "تخصيص اللوحة"}
            </button>
            <button type="button" onClick={() => window.print()}>
              ⇩ تصدير التقرير
            </button>
            <button type="button" className="primary" onClick={() => setOpen(true)}>
              ＋ إضافة ويدجت
            </button>
          </div>
        </div>

        {/* Global Filter Bar */}
        <div className="filters" style={{ gridTemplateColumns: "auto repeat(8, minmax(100px, 1fr)) auto" }}>
          <button className="filter-main" type="button">
            ☷ الفلاتر <span>{activeFiltersCount}</span>
          </button>
          {FILTERS_CONFIG.map((f) => (
            <label key={f.key}>
              <span>{f.label}</span>
              <select
                value={selectedFilters[f.key]}
                onChange={(e) => handleFilterChange(f.key, e.target.value)}
              >
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button className="reset" type="button" onClick={resetFilters} title="إعادة ضبط الفلاتر" aria-label="إعادة ضبط">
            ↻
          </button>
        </div>

        {/* 1. Today's Attendance Snapshot Strip (Explicit Employee Counts) */}
        {visiblePanels.attendance && (
          <section className="attendance-strip">
            <div className="attendance-header">
              <h3>
                <span>⏱</span> حالة الحضور والانصراف المباشرة لليوم
              </h3>
              <div className="meta">
                <span>إجمالي القوة المجدولة: <b>{ATTENDANCE_TODAY.totalScheduled.toLocaleString("ar-EG")} موظف</b></span>
                <span>نسبة الحضور الإجمالية: <b className="positive">{ATTENDANCE_TODAY.presentRate}</b></span>
                <span>آخر مزامنة للبصمة: <b>منذ 3 دقائق</b></span>
              </div>
            </div>
            <div className="attendance-grid">
              <div className="att-card present">
                <div className="att-card-top">
                  <span className="att-card-label">حاضرون اليوم</span>
                  <span className="att-card-badge">على رأس العمل</span>
                </div>
                <div className="att-card-value">{ATTENDANCE_TODAY.present.toLocaleString("ar-EG")}</div>
                <div className="att-card-note">موظف حضر وسجل بصمة الدخول</div>
              </div>

              <div className="att-card absent">
                <div className="att-card-top">
                  <span className="att-card-label">غياب اليوم</span>
                  <span className="att-card-badge">غير متواجدين</span>
                </div>
                <div className="att-card-value">{ATTENDANCE_TODAY.absent.toLocaleString("ar-EG")}</div>
                <div className="att-card-note">موظف بدون تسجيل حضور أو إجازة مسبقة</div>
              </div>

              <div className="att-card late">
                <div className="att-card-top">
                  <span className="att-card-label">تأخير صباحي</span>
                  <span className="att-card-badge">تجاوز المهلة</span>
                </div>
                <div className="att-card-value">{ATTENDANCE_TODAY.late.toLocaleString("ar-EG")}</div>
                <div className="att-card-note">موظف سجل دخول بعد الوقت الرسمي</div>
              </div>

              <div className="att-card early">
                <div className="att-card-top">
                  <span className="att-card-label">انصراف مبكر</span>
                  <span className="att-card-badge">قبل نهاية الدوام</span>
                </div>
                <div className="att-card-value">{ATTENDANCE_TODAY.early.toLocaleString("ar-EG")}</div>
                <div className="att-card-note">موظف مسجل خروج قبل موعد الانصراف</div>
              </div>
            </div>
          </section>
        )}

        {/* 2. Status KPIs (Active, Terminated, Suspended from Payroll, Pending Requests) */}
        {visiblePanels.status && (
          <div className="kpis">
            {STATUS_KPIS.map((k) => (
              <div key={k.label} className={`kpi ${k.tone}`}>
                <div className="kpi-top">
                  <div className="kpi-icon">{k.icon}</div>
                  <div className="kpi-more">•••</div>
                </div>
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-value">{k.value}</div>
                <div className="kpi-foot">
                  <span className={k.tone === "rose" || k.tone === "amber" ? "font-bold text-red-500" : "positive"}>
                    {k.delta}
                  </span>
                  <span>{k.note}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Main Dashboard Grid */}
        <div className="dashboard-grid">
          {/* A. Job Levels Distribution (المستويات الوظيفية) */}
          {visiblePanels.levels && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="توزيع المستويات الوظيفية" sub="التسلسل الهرمي للمسميات الوظيفية" />
              <div className="panel-body progress-list">
                {JOB_LEVELS.map((lvl) => (
                  <div className="prog-item" key={lvl.name}>
                    <span className="prog-name">{lvl.name}</span>
                    <div className="prog-track">
                      <i style={{ width: `${(lvl.value / maxLevel) * 100}%`, background: lvl.color }} />
                    </div>
                    <span className="prog-val">{lvl.value.toLocaleString("ar-EG")} <small className="text-muted text-xs">({lvl.pct})</small></span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* B. Job Categories (الفئات الوظيفية) */}
          {visiblePanels.categories && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="توزيع الفئات الوظيفية" sub="تصنيف الوظائف حسب طبيعة التخصص" />
              <div className="panel-body progress-list">
                {JOB_CATEGORIES.map((cat) => (
                  <div className="prog-item" key={cat.name}>
                    <span className="prog-name">{cat.name}</span>
                    <div className="prog-track">
                      <i style={{ width: `${(cat.value / 1120) * 100}%`, background: cat.color }} />
                    </div>
                    <span className="prog-val">{cat.value.toLocaleString("ar-EG")} <small className="text-muted text-xs">({cat.pct})</small></span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* C. Nationalities Distribution & Saudization (الجنسيات) */}
          {visiblePanels.nationalities && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="توزيع الجنسيات ونسبة التوطين" sub="إحصائيات الكوادر الوطنية والوافدة" />
              <div className="panel-body progress-list">
                {NATIONALITIES.map((nat) => (
                  <div className="prog-item" key={nat.name}>
                    <span className="prog-name">{nat.name}</span>
                    <div className="prog-track">
                      <i style={{ width: `${(nat.value / maxNat) * 100}%`, background: nat.color }} />
                    </div>
                    <span className="prog-val">{nat.value.toLocaleString("ar-EG")} <small className="text-muted text-xs">({nat.pct})</small></span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* D. Job Sectors Treemap (قطاعات الوظائف الحالية) */}
          {visiblePanels.sectors && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 6" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="قطاعات الوظائف الحالية داخل النظام" sub="توزيع القوى العاملة حسب القطاع الرئيسي" />
              <div className="panel-body treemap" style={{ height: "200px" }}>
                <div className="tm a">
                  <b>قطاع التعليم والمدارس</b>
                  <strong>1,260</strong>
                  <span>53.6% من إجمالي الموظفين</span>
                </div>
                <div className="tm b">
                  <b>العمليات والمساندة</b>
                  <strong>510</strong>
                  <span>21.7%</span>
                </div>
                <div className="tm c">
                  <b>الشؤون الإدارية والمالية</b>
                  <strong>380 (16.2%)</strong>
                </div>
                <div className="tm d">
                  <b>التحول الرقمي والدعم</b>
                  <strong>200 (8.5%)</strong>
                </div>
              </div>
            </section>
          )}

          {/* E. Pending Requests Hub (الطلبات المعلقة) */}
          {visiblePanels.requests && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 6" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead
                title="مركز الطلبات والعمليات المعلقة"
                sub="إجمالي 42 طلب يحتاج إلى موافقة واعتماد"
                actions={["تحديث ↻"]}
              />
              <div className="panel-body requests-wrap">
                {PENDING_REQUESTS.map((req) => (
                  <div className="request-card" key={req.type}>
                    <div className="req-info">
                      <div className="req-icon">{req.icon}</div>
                      <div>
                        <div className="req-title">{req.type}</div>
                        <div className="req-sub">{req.desc}</div>
                      </div>
                    </div>
                    <div className="req-actions">
                      <div className="req-count">{req.count} طلب</div>
                      <button className="req-btn" type="button">
                        {req.action} ←
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* F. Departments Ranking */}
          {visiblePanels.departments && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 5" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="أكبر الأقسام من حيث عدد الموظفين" sub="آخر تحديث: لحظي" />
              <div className="panel-body ranking">
                {RANKS.map((r, i) => (
                  <div className="rank" key={r.name}>
                    <div className="rank-no">{String(i + 1).padStart(2, "0")}</div>
                    <div className="rank-name">{r.name}</div>
                    <div className="rank-track">
                      <i style={{ width: `${(r.value / maxRank) * 100}%` }} />
                    </div>
                    <b>{r.value.toLocaleString("ar-EG")}</b>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* G. Gender Distribution */}
          {visiblePanels.gender && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="التوزيع حسب الجنس" sub="التوازن الوظيفي بين الذكور والإناث" />
              <div className="panel-body donut-layout">
                <div className="donut">
                  <div className="donut-hole">
                    <span>إجمالي الموظفين</span>
                    <b>2,350</b>
                    <small>100%</small>
                  </div>
                </div>
                <div className="donut-legend">
                  <div>
                    <span>
                      <i className="dot blue" />
                      ذكور
                    </span>
                    <span>
                      1,520 <em>65%</em>
                    </span>
                  </div>
                  <div>
                    <span>
                      <i className="dot purple" />
                      إناث
                    </span>
                    <span>
                      830 <em>35%</em>
                    </span>
                  </div>
                  <hr />
                  <div style={{ display: "block" }}>
                    <p>الفارق العددي</p>
                    <strong>690 موظف</strong>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* H. Stages Bar Chart */}
          {visiblePanels.stages && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 3" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="توزيع الموظفين حسب المرحلة" sub="المراحل التعليمية والبرامج" />
              <div className="panel-body bar-chart">
                <div className="chart-grid">
                  {[0, 1, 2, 3].map((i) => (
                    <i key={i} />
                  ))}
                </div>
                <div className="bars">
                  {STAGES.map((s) => (
                    <div className="bar-col" key={s.name}>
                      <span>{s.value.toLocaleString("ar-EG")}</span>
                      <i style={{ height: `${(s.value / maxStage) * 72}%` }} />
                      <b>{s.name}</b>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* I. Workforce Trend Chart */}
          {visiblePanels.trend && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 6" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="اتجاه نمو القوى العاملة" sub="التطور العددي خلال الأشهر الماضية" />
              <div className="panel-body trend-chart">
                <div className="trend-meta">
                  <span className="positive">+23.7%</span>
                  <small>معدل النمو السنوي</small>
                </div>
                <svg viewBox="0 0 400 160" preserveAspectRatio="none" role="img" aria-label="اتجاه القوى العاملة">
                  <g className="lines">
                    {[20, 55, 90, 125].map((y) => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} />
                    ))}
                  </g>
                  <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3f8cff" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#3f8cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,130 L80,112 L160,96 L240,68 L320,52 L400,30 L400,160 L0,160 Z"
                    fill="url(#trendFill)"
                  />
                  <polyline
                    points="0,130 80,112 160,96 240,68 320,52 400,30"
                    fill="none"
                    stroke="#3f8cff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="months">
                  {["يناير", "مارس", "مايو", "يوليو", "سبتمبر"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* J. Smart Insights */}
          {visiblePanels.insights && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 6" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead title="مؤشرات تحتاج الانتباه والمتابعة" sub="تحليل ذكي تلقائي لسجلات الموارد البشرية" actions={["⋯"]} />
              <div className="panel-body insights">
                <div className="insight-item warn">
                  <span>!</span>
                  <div>
                    <b>25 موظفاً موقوفين من المسيرات</b>
                    <p>يتطلب تدقيق سبب الإيقاف لتفادي تأخير إغلاق مسير الرواتب الشهري.</p>
                  </div>
                </div>
                <div className="insight-item ok">
                  <span>✓</span>
                  <div>
                    <b>نسبة حضور متميزة اليوم (93%)</b>
                    <p>التزام عالي بتسجيل البصمة مع انخفاض ملحوظ في الغياب غير المبرر.</p>
                  </div>
                </div>
                <div className="insight-item info">
                  <span>↗</span>
                  <div>
                    <b>ارتفاع نسبة التوطين إلى 61.7%</b>
                    <p>تحقيق مستهدفات برنامج نطاقات بامتياز عبر الفروع والأقسام.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* K. Extended Data Table (All New Columns Included) */}
          {visiblePanels.table && (
            <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 12" }}>
              {editing && <div className="edit-grip">••••</div>}
              <PanelHead
                title="تفاصيل الهيكل وسجلات الموظفين"
                sub={`عرض تفصيلي موسع (${filteredRows.length} سجلات مطابقة للفلاتر)`}
                actions={["⌕ بحث", "⇩ تصدير Excel", "⋯ خيارات"]}
              />
              <div className="panel-body table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>الفرع</th>
                      <th>القسم</th>
                      <th>القطاع</th>
                      <th>المستوى الوظيفي</th>
                      <th>الفئة الوظيفية</th>
                      <th>الجنسية</th>
                      <th>الجنس</th>
                      <th>الحالة الوظيفية</th>
                      <th>حضور اليوم</th>
                      <th>عدد الموظفين</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.length === 0 ? (
                      <tr>
                        <td colSpan={11} style={{ textAlign: "center", padding: "28px", color: "var(--muted)" }}>
                          لا توجد سجلات تطابق الفلاتر المحددة. يرجى تعديل الفلاتر أو الضغط على زر إعادة الضبط ↻.
                        </td>
                      </tr>
                    ) : (
                      filteredRows.map((r, i) => (
                        <tr key={i}>
                          <td><b>{r.branch}</b></td>
                          <td>{r.dept}</td>
                          <td><span className="text-muted">{r.sector}</span></td>
                          <td>{r.level}</td>
                          <td>{r.category}</td>
                          <td>{r.nationality}</td>
                          <td>
                            <span className={`tag${r.gender === "أنثى" ? " female" : ""}`}>{r.gender}</span>
                          </td>
                          <td>
                            <span
                              className={`status-pill ${
                                r.status === "مفعل"
                                  ? "active"
                                  : r.status === "موقوف من المسير"
                                  ? "suspended"
                                  : "terminated"
                              }`}
                            >
                              {r.status}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`att-pill ${
                                r.attendance === "حاضر"
                                  ? "present"
                                  : r.attendance === "غائب"
                                  ? "absent"
                                  : r.attendance === "متأخر"
                                  ? "late"
                                  : "early"
                              }`}
                            >
                              {r.attendance}
                            </span>
                          </td>
                          <td><b>{r.count}</b></td>
                          <td>
                            <button className="row-more" type="button" aria-label="خيارات">
                              •••
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        <footer>
          HRMS Enterprise Analytics · تم تطوير اللوحة لدعم الحضور اللحظي، حالات الموظفين، قطاعات الوظائف، ونسب التوطين.
        </footer>
      </main>
    </div>
  );
}
