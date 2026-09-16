import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لوحة الموارد البشرية التنفيذية | الحلول الخبرية" },
      {
        name: "description",
        content:
          "لوحة قيادة تحليلية للموارد البشرية: توزيع الموظفين حسب الفرع والقسم والقطاع والجنس مع مؤشرات ذكية وجداول تفصيلية.",
      },
      { property: "og:title", content: "لوحة الموارد البشرية التنفيذية" },
      {
        property: "og:description",
        content: "رؤية موحدة للقوى العاملة عبر الفروع والأقسام والمستويات الوظيفية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["لوحة القيادة", "الموظفون", "الحضور", "الهيكل التنظيمي", "التقارير"];

const FILTERS = [
  { label: "الفرع", options: ["الكل", "الإدارة العامة", "المرحلة الثانوية", "المرحلة المتوسطة"] },
  { label: "القسم", options: ["الكل", "الخدمات المساندة", "الإدارة العامة", "الدعم الفني"] },
  { label: "القطاع", options: ["الكل", "إدارة المرحلة", "السكرتارية", "الصيانة"] },
  { label: "المستوى الوظيفي", options: ["الكل", "إداريون", "دعم ومساندة", "تعليمي"] },
  { label: "الجنس", options: ["الكل", "ذكر", "أنثى"] },
];

const KPIS = [
  { tone: "blue", icon: "👥", label: "إجمالي الموظفين", value: "2,350", delta: "↗ 8.4%", note: "مقارنة بالشهر السابق" },
  { tone: "cyan", icon: "♂", label: "الموظفون الذكور", value: "1,520", delta: "↗ 5.2%", note: "65% من الإجمالي" },
  { tone: "violet", icon: "♀", label: "الموظفات", value: "830", delta: "↗ 11.1%", note: "35% من الإجمالي" },
  { tone: "green", icon: "▦", label: "الفروع والمدارس", value: "24", delta: "↗ 2", note: "وحدات نشطة" },
  { tone: "amber", icon: "◇", label: "الأقسام التنظيمية", value: "37", delta: "↗ 4", note: "أقسام فعالة" },
];

const RANKS = [
  { name: "الخدمات المساندة", value: 1261 },
  { name: "الإدارة العامة", value: 665 },
  { name: "الدعم الفني", value: 230 },
  { name: "إدارة المرحلة", value: 180 },
  { name: "الصيانة", value: 140 },
  { name: "السكرتارية", value: 110 },
];

const STAGES = [
  { name: "الثانوية", value: 1980 },
  { name: "المتوسطة", value: 1040 },
  { name: "الابتدائية", value: 760 },
  { name: "العالمي", value: 340 },
  { name: "المصري", value: 210 },
  { name: "الحضانة", value: 165 },
];

const ROWS = [
  ["الإدارة العامة", "الإدارة العامة", "إدارة المرحلة", "إداريون", "ذكر", "120"],
  ["الإدارة العامة", "الإدارة العامة", "الدعم الفني", "إداريون", "ذكر", "95"],
  ["الإدارة العامة", "الخدمات المساندة", "السكرتارية", "دعم ومساندة", "أنثى", "64"],
  ["المرحلة الثانوية", "المرحلة الثانوية", "إدارة المرحلة", "إداريون", "ذكر", "180"],
];

const WIDGETS = [
  { icon: "☷", name: "ترتيب أفقي" },
  { icon: "◔", name: "مخطط دائري" },
  { icon: "▥", name: "أعمدة" },
  { icon: "⌁", name: "اتجاه زمني" },
  { icon: "▦", name: "خريطة تنظيمية" },
  { icon: "✦", name: "مؤشرات ذكية" },
  { icon: "▤", name: "جدول تفصيلي" },
];

const LAYERS = [
  "أكبر الأقسام من حيث عدد الموظفين",
  "التوزيع حسب الجنس",
  "توزيع الموظفين حسب المرحلة",
  "اتجاه القوى العاملة",
  "خريطة التوزيع التنظيمي",
  "مؤشرات تحتاج الانتباه",
  "تفاصيل الهيكل والموظفين",
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
  const [tab, setTab] = useState(NAV[0]);
  const [studioTab, setStudioTab] = useState<"widgets" | "layers" | "settings">("widgets");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [dark, setDark] = useState(false);

  const maxRank = RANKS[0].value;
  const maxStage = STAGES[0].value;

  return (
    <div className={`app${dark ? " hrms-dark" : ""}`} dir="rtl" lang="ar">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">ES</div>
          <div>
            <strong>الحلول الخبرية</strong>
            <span>نظام إدارة الموارد البشرية</span>
          </div>
        </div>
        <nav>
          {NAV.map((n) => (
            <button key={n} type="button" className={n === tab ? "active" : ""} onClick={() => setTab(n)}>
              {n}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button className="round" type="button" aria-label="بحث">
            ⌕
          </button>
          <button className="round" type="button" aria-label="إشعارات">
            ♢
          </button>
          <div className="user">
            <div className="avatar">AM</div>
            <div>
              <b>أحمد محمد</b>
              <span>مدير النظام</span>
            </div>
          </div>
        </div>
      </header>

      <div className={`studio${open ? " open" : ""}`}>
        <div className="studio-rail">
          <button
            type="button"
            className="studio-main"
            onClick={() => setOpen((o) => !o)}
            aria-label="مصمم اللوحة"
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
          >
            ⚙<span>الإعدادات</span>
          </button>
          <div className="rail-spacer" />
          <button type="button" onClick={() => setDark((d) => !d)}>
            ◐<span>المظهر</span>
          </button>
        </div>

        <div className="studio-drawer">
          <div className="drawer-head">
            <div>
              <b>مصمم لوحة المعلومات</b>
              <span>7 عناصر في اللوحة</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="إغلاق">
              ×
            </button>
          </div>

          {studioTab === "widgets" && (
            <>
              <div className="searchbox">
                ⌕ <input placeholder="ابحث عن عنصر..." />
              </div>
              <div className="section-label">عناصر التحليل</div>
              <div className="widget-list">
                {WIDGETS.map((w) => (
                  <button key={w.name} type="button">
                    <i>{w.icon}</i>
                    <span>{w.name}</span>
                    <small>+</small>
                  </button>
                ))}
              </div>
            </>
          )}

          {studioTab === "layers" && (
            <>
              <div className="section-label">الطبقات</div>
              <div className="layers">
                {LAYERS.map((l, i) => (
                  <div key={l}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <b>{l}</b>
                    <button type="button" aria-label="إخفاء">
                      ◉
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
                  فترة التحديث
                  <select defaultValue="5">
                    <option value="1">كل دقيقة</option>
                    <option value="5">كل 5 دقائق</option>
                    <option value="15">كل 15 دقيقة</option>
                  </select>
                </label>
                <label>
                  الصلاحية
                  <select>
                    <option>خاص بي</option>
                    <option>القسم</option>
                    <option>الجميع</option>
                  </select>
                </label>
                <button className="save-btn" type="button">
                  حفظ الإعدادات
                </button>
              </div>
            </>
          )}

          <div className="drawer-note">
            <b>وضع التصميم</b>
            <p>فعّل التعديل لتحريك العناصر وتخصيص اللوحة.</p>
            <label>
              <input type="checkbox" checked={editing} onChange={(e) => setEditing(e.target.checked)} />
              <span />
            </label>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="page-head">
          <div>
            <div className="eyebrow">
              <i className="live-dot" /> بيانات حية · تم التحديث 10:46 ص
            </div>
            <h1>لوحة الموارد البشرية التنفيذية</h1>
            <p>رؤية موحدة للقوى العاملة عبر الفروع والأقسام والمستويات الوظيفية.</p>
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
            <button type="button">⇩ تصدير</button>
            <button type="button" className="primary">
              ＋ لوحة جديدة
            </button>
          </div>
        </div>

        <div className="filters">
          <button className="filter-main" type="button">
            ☷ الفلاتر <span>5</span>
          </button>
          {FILTERS.map((f) => (
            <label key={f.label}>
              <span>{f.label}</span>
              <select>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          ))}
          <button className="reset" type="button" aria-label="إعادة ضبط">
            ↻
          </button>
        </div>

        <div className="kpis">
          {KPIS.map((k) => (
            <div key={k.label} className={`kpi ${k.tone}`}>
              <div className="kpi-top">
                <div className="kpi-icon">{k.icon}</div>
                <div className="kpi-more">•••</div>
              </div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-foot">
                <span className="positive">{k.delta}</span>
                <span>{k.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 5" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="أكبر الأقسام من حيث عدد الموظفين" sub="آخر تحديث: منذ 4 دقائق" />
            <div className="panel-body ranking">
              {RANKS.map((r, i) => (
                <div className="rank" key={r.name}>
                  <div className="rank-no">{String(i + 1).padStart(2, "0")}</div>
                  <div className="rank-name">{r.name}</div>
                  <div className="rank-track">
                    <i style={{ width: `${(r.value / maxRank) * 100}%` }} />
                  </div>
                  <b>{r.value.toLocaleString("en-US")}</b>
                </div>
              ))}
            </div>
          </section>

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="التوزيع حسب الجنس" sub="آخر تحديث: منذ 4 دقائق" />
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
                  <p>الفارق بين الجنسين</p>
                  <strong>690 موظف</strong>
                </div>
              </div>
            </div>
          </section>

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 3" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="توزيع الموظفين حسب المرحلة" sub="آخر تحديث: منذ 4 دقائق" />
            <div className="panel-body bar-chart">
              <div className="chart-grid">
                {[0, 1, 2, 3].map((i) => (
                  <i key={i} />
                ))}
              </div>
              <div className="bars">
                {STAGES.map((s) => (
                  <div className="bar-col" key={s.name}>
                    <span>{s.value.toLocaleString("en-US")}</span>
                    <i style={{ height: `${(s.value / maxStage) * 72}%` }} />
                    <b>{s.name}</b>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 5" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="اتجاه القوى العاملة" sub="آخر تحديث: منذ 4 دقائق" />
            <div className="panel-body trend-chart">
              <div className="trend-meta">
                <span className="positive">+23.7%</span>
                <small>من بداية الفترة</small>
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

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 4" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="خريطة التوزيع التنظيمي" sub="المقارنة النسبية للأقسام الرئيسية" />
            <div className="panel-body treemap">
              <div className="tm a">
                <b>الخدمات المساندة</b>
                <strong>1,261</strong>
                <span>53.7%</span>
              </div>
              <div className="tm b">
                <b>الإدارة العامة</b>
                <strong>665</strong>
                <span>28.3%</span>
              </div>
              <div className="tm c">
                <b>الدعم الفني</b>
                <strong>230</strong>
              </div>
              <div className="tm d">
                <b>إدارة المرحلة</b>
                <strong>180</strong>
              </div>
              <div className="tm e">
                <b>أخرى</b>
                <strong>14%</strong>
              </div>
            </div>
          </section>

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 3" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead title="مؤشرات تحتاج الانتباه" sub="تحليل تلقائي للبيانات" actions={["⋯"]} />
            <div className="panel-body insights">
              <div className="insight-item warn">
                <span>!</span>
                <div>
                  <b>تركيز مرتفع في قسم واحد</b>
                  <p>الخدمات المساندة تمثل أكثر من نصف القوة العاملة.</p>
                </div>
              </div>
              <div className="insight-item ok">
                <span>✓</span>
                <div>
                  <b>استقرار التوزيع</b>
                  <p>لا توجد تغيرات حادة في إجمالي الموظفين هذا الشهر.</p>
                </div>
              </div>
              <div className="insight-item info">
                <span>↗</span>
                <div>
                  <b>نمو المرحلة الثانوية</b>
                  <p>أعلى زيادة مسجلة مقارنة بالفترة السابقة.</p>
                </div>
              </div>
              <button className="text-btn" type="button">
                فتح مركز التحليلات ←
              </button>
            </div>
          </section>

          <section className={`panel${editing ? " edit" : ""}`} style={{ gridColumn: "span 12" }}>
            {editing && <div className="edit-grip">••••</div>}
            <PanelHead
              title="تفاصيل الهيكل والموظفين"
              sub="عرض قابل للبحث والتصفية والتصدير"
              actions={["⌕", "⇩", "⋯"]}
            />
            <div className="panel-body table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>الفرع</th>
                    <th>القسم</th>
                    <th>القطاع</th>
                    <th>المستوى الوظيفي</th>
                    <th>الجنس</th>
                    <th>عدد الموظفين</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.join("-")}>
                      <td>{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td>{r[3]}</td>
                      <td>
                        <span className={`tag${r[4] === "أنثى" ? " female" : ""}`}>{r[4]}</span>
                      </td>
                      <td>{r[5]}</td>
                      <td>
                        <button className="row-more" type="button" aria-label="خيارات">
                          •••
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <footer>HRMS Enterprise Analytics · لوحة قابلة للتخصيص والحفظ حسب المستخدم والصلاحية</footer>
      </main>
    </div>
  );
}
