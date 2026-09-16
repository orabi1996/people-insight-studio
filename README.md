# People Insights Hub

<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HRMS React Dashboard Preview</title><style>:root{
  --bg:#f5f7fb;--surface:#fff;--surface-2:#f9fbfd;--text:#17324d;--muted:#75869a;--line:#e3e9f0;
  --navy:#0b2f57;--navy2:#123f72;--blue:#3f8cff;--cyan:#19a7bd;--violet:#7b61d1;--green:#26a879;--amber:#efaa33;--danger:#d94c5c;
  --shadow:0 14px 38px rgba(20,47,79,.08);--shadow-lg:0 26px 70px rgba(20,47,79,.16);
}
*{box-sizing:border-box}html{background:var(--bg)}body{margin:0;font-family:"Segoe UI",Tahoma,Arial,sans-serif;color:var(--text);background:var(--bg)}button,select,input{font:inherit}.app{min-height:100vh;background:radial-gradient(circle at 20% 0%,rgba(63,140,255,.05),transparent 32%),var(--bg)}
.topbar{height:72px;background:rgba(255,255,255,.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:34px;padding:0 28px;position:sticky;top:0;z-index:50}.brand{display:flex;align-items:center;gap:11px;white-space:nowrap}.brand-mark{width:43px;height:43px;border-radius:13px;background:linear-gradient(135deg,#f7c84a,#27b29b);display:grid;place-items:center;font-weight:900;color:#123b61;box-shadow:0 8px 20px rgba(39,178,155,.18)}.brand strong{display:block;font-size:14px}.brand span{font-size:10px;color:var(--muted)}.topbar nav{display:flex;justify-content:center;gap:6px}.topbar nav button{border:0;background:transparent;color:#50677d;border-radius:10px;padding:10px 13px;font-size:12px;font-weight:700;cursor:pointer}.topbar nav button.active{background:#edf4ff;color:var(--navy)}.top-actions{display:flex;align-items:center;gap:8px}.round{width:38px;height:38px;border:1px solid var(--line);background:var(--surface);border-radius:11px;color:#547087;cursor:pointer}.user{display:flex;align-items:center;gap:9px;padding-right:7px}.avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#dfeeff,#c8dcf5);display:grid;place-items:center;font-size:12px;font-weight:800;color:var(--navy)}.user b{display:block;font-size:11px}.user span{font-size:9px;color:var(--muted)}
.main{max-width:1920px;margin:0 auto;padding:24px 28px 34px 94px}.page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:22px;margin-bottom:18px}.eyebrow{font-size:10px;color:#3d7d72;font-weight:700;letter-spacing:.1px}.live-dot{width:7px;height:7px;border-radius:50%;display:inline-block;background:#28b786;box-shadow:0 0 0 4px rgba(40,183,134,.12);margin-left:6px}.page-head h1{margin:7px 0 5px;font-size:27px;letter-spacing:-.4px}.page-head p{margin:0;color:var(--muted);font-size:12px}.page-actions{display:flex;gap:8px;flex-wrap:wrap}.page-actions button{border:1px solid var(--line);background:var(--surface);border-radius:11px;padding:9px 13px;color:#415d75;cursor:pointer;font-size:11px;font-weight:700}.page-actions button.primary{background:var(--navy);color:#fff;border-color:var(--navy)}.page-actions button.editing{background:#fff4e5;color:#9b6a18;border-color:#f2d29c}
.filters{display:grid;grid-template-columns:auto repeat(5,minmax(118px,1fr)) auto;gap:8px;background:var(--surface);padding:9px;border:1px solid var(--line);border-radius:15px;box-shadow:0 8px 22px rgba(20,47,79,.035);margin-bottom:14px}.filters label{border-left:1px solid var(--line);padding:3px 10px}.filters label span{display:block;font-size:9px;color:var(--muted);margin-bottom:3px}.filters select{width:100%;border:0;background:transparent;outline:0;color:var(--text);font-size:11px;font-weight:700}.filter-main{border:0;background:#edf4ff;color:var(--navy);padding:8px 12px;border-radius:10px;font-size:11px;font-weight:800}.filter-main span{background:#fff;color:var(--blue);padding:2px 6px;border-radius:999px;margin-right:4px}.reset{border:0;background:transparent;color:#8092a4;font-size:18px;cursor:pointer}.kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:14px}.kpi{background:var(--surface);border:1px solid var(--line);border-radius:17px;padding:14px 15px;min-height:146px;box-shadow:var(--shadow);position:relative;overflow:hidden}.kpi:after{content:"";position:absolute;width:90px;height:90px;border-radius:50%;left:-28px;top:-36px;background:var(--accent);opacity:.06}.kpi-top{display:flex;align-items:center;justify-content:space-between}.kpi-icon{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:var(--soft);color:var(--accent);font-weight:900}.kpi-more{color:#9aa9b7;letter-spacing:1px}.kpi-label{font-size:10px;color:var(--muted);margin-top:10px}.kpi-value{font-size:28px;font-weight:900;line-height:1.1;margin-top:3px;letter-spacing:-.5px}.kpi-foot{display:flex;align-items:center;gap:6px;font-size:9px;color:var(--muted);margin-top:11px}.positive{color:var(--green)!important;font-weight:800}.kpi.blue{--accent:var(--blue);--soft:#edf4ff}.kpi.cyan{--accent:var(--cyan);--soft:#eaf8fb}.kpi.violet{--accent:var(--violet);--soft:#f1edff}.kpi.green{--accent:var(--green);--soft:#eaf9f3}.kpi.amber{--accent:var(--amber);--soft:#fff5e3}
.dashboard-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;align-items:stretch}.panel{background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow);padding:15px;min-width:0;position:relative;transition:.18s ease}.panel:hover{box-shadow:0 18px 45px rgba(20,47,79,.11);transform:translateY(-1px)}.panel.edit{outline:2px dashed rgba(63,140,255,.32);outline-offset:2px;cursor:grab}.panel.edit:active{cursor:grabbing}.panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px}.panel-head h3{font-size:13px;margin:0 0 3px}.panel-head p{font-size:8.5px;color:var(--muted);margin:0}.panel-actions{display:flex;gap:4px}.panel-actions button{width:28px;height:28px;border:0;background:var(--surface-2);border-radius:8px;color:#71869a;cursor:pointer}.panel-actions .danger{color:var(--danger);background:#fff0f2}.panel-body{min-height:160px}.edit-grip{position:absolute;left:50%;top:3px;transform:translateX(-50%);font-size:12px;color:#9fb4c8;letter-spacing:-3px}
.ranking{display:grid;gap:10px}.rank{display:grid;grid-template-columns:28px 135px 1fr 48px;gap:9px;align-items:center;font-size:10px}.rank-no{font-weight:800;color:#9aabba}.rank-name{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rank-track{height:8px;border-radius:99px;background:#edf1f6;overflow:hidden}.rank-track i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#3f8cff,#67adff)}.rank b{text-align:left;font-size:10px}
.donut-layout{display:grid;grid-template-columns:170px 1fr;gap:16px;align-items:center;min-height:205px}.donut{width:162px;height:162px;border-radius:50%;background:conic-gradient(var(--blue) 0 65%,var(--violet) 65% 100%);position:relative;box-shadow:inset 0 0 0 1px rgba(255,255,255,.5)}.donut-hole{position:absolute;inset:27px;background:var(--surface);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.donut-hole span{font-size:8px;color:var(--muted)}.donut-hole b{font-size:24px}.donut-hole small{font-size:8px;color:#9aa9b7}.donut-legend{display:grid;gap:10px}.donut-legend>div{display:flex;justify-content:space-between;font-size:10px}.donut-legend em{font-style:normal;color:var(--muted);font-size:9px}.dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-left:6px}.dot.blue{background:var(--blue)}.dot.purple{background:var(--violet)}.donut-legend hr{border:0;border-top:1px solid var(--line);width:100%;margin:4px 0}.donut-legend p{font-size:8px;color:var(--muted);margin:0}.donut-legend strong{font-size:14px}
.bar-chart{height:218px;position:relative}.chart-grid{position:absolute;inset:8px 0 31px;display:flex;flex-direction:column;justify-content:space-between}.chart-grid i{border-top:1px dashed var(--line)}.bars{position:absolute;inset:10px 8px 0;display:flex;align-items:flex-end;gap:10px}.bar-col{height:100%;flex:1;display:flex;align-items:center;justify-content:flex-end;flex-direction:column;position:relative}.bar-col>i{width:min(34px,62%);border-radius:9px 9px 3px 3px;background:linear-gradient(180deg,#63b0ff,#3f8cff);box-shadow:0 7px 16px rgba(63,140,255,.12)}.bar-col>span{font-size:8px;color:#73879b;margin-bottom:4px}.bar-col>b{height:28px;padding-top:6px;font-size:8px;color:var(--muted);white-space:nowrap;font-weight:600}
.trend-chart{height:218px;position:relative}.trend-meta{position:absolute;right:6px;top:3px;z-index:2;display:flex;gap:6px;align-items:center}.trend-meta span{font-size:12px}.trend-meta small{font-size:8px;color:var(--muted)}.trend-chart svg{width:100%;height:180px;margin-top:15px}.trend-chart .lines line{stroke:var(--line);stroke-dasharray:4 5}.months{display:flex;justify-content:space-between;color:var(--muted);font-size:8px;padding:0 7px}
.treemap{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:7px;height:218px}.tm{border-radius:13px;padding:12px;display:flex;flex-direction:column;justify-content:flex-end;position:relative;overflow:hidden}.tm:before{content:"";position:absolute;width:90px;height:90px;border:18px solid rgba(255,255,255,.16);border-radius:50%;left:-25px;top:-33px}.tm b,.tm strong,.tm span{position:relative;z-index:1}.tm b{font-size:10px}.tm strong{font-size:22px;margin-top:2px}.tm span{font-size:8px;opacity:.75}.tm.a{grid-row:span 2;background:linear-gradient(145deg,#145a96,#267bbd);color:#fff}.tm.b{grid-row:span 2;background:linear-gradient(145deg,#4d3ba8,#7861d6);color:#fff}.tm.c{background:#dff4ef;color:#236d5b}.tm.d{background:#e9f2ff;color:#2d6aa6}.tm.e{background:#fff1d7;color:#94661c}
.insights{display:grid;gap:9px}.insight-item{display:grid;grid-template-columns:31px 1fr;gap:9px;border:1px solid var(--line);border-radius:12px;padding:10px}.insight-item>span{width:29px;height:29px;border-radius:9px;display:grid;place-items:center;font-weight:900}.insight-item b{font-size:9.5px}.insight-item p{font-size:8px;color:var(--muted);margin:3px 0 0;line-height:1.5}.insight-item.warn>span{background:#fff2db;color:#c2821f}.insight-item.ok>span{background:#e9f8f2;color:#238466}.insight-item.info>span{background:#edf4ff;color:#3f7fc2}.text-btn{border:0;background:transparent;color:var(--blue);font-size:9px;font-weight:800;text-align:right;cursor:pointer}
.table-wrap{overflow:auto;max-height:290px}table{width:100%;border-collapse:collapse;font-size:9.5px}th,td{padding:10px 9px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap}th{color:#6d8296;font-size:8.5px;background:var(--surface-2);position:sticky;top:0;z-index:1}tbody tr:hover td{background:#fbfdff}.tag{display:inline-block;padding:4px 8px;border-radius:999px;background:#eaf8f3;color:#238466;font-size:8px}.tag.female{background:#f0edff;color:#6c53c4}.row-more{border:0;background:transparent;color:#8295a8}footer{padding:20px 3px 0;color:#93a2b1;font-size:8.5px;text-align:center}
.studio{position:fixed;left:12px;top:92px;bottom:20px;z-index:60;display:flex;direction:ltr;pointer-events:none}.studio-rail{width:66px;background:linear-gradient(180deg,#0c3158,#0d3c6d);border-radius:18px;box-shadow:var(--shadow-lg);padding:10px 8px;display:flex;flex-direction:column;gap:7px;pointer-events:auto}.studio-rail button{border:0;background:transparent;color:#b7c9d9;border-radius:11px;min-height:49px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;font-size:17px}.studio-rail button span{font-size:8px}.studio-rail button.active{background:rgba(255,255,255,.12);color:#fff}.studio-main{background:linear-gradient(135deg,#3f8cff,#19a7bd)!important;color:#fff!important;margin-bottom:5px}.rail-spacer{flex:1}.studio-drawer{width:0;opacity:0;overflow:hidden;background:var(--surface);border:1px solid var(--line);border-left:0;border-radius:0 18px 18px 0;box-shadow:var(--shadow-lg);transition:.22s ease;pointer-events:none;direction:rtl}.studio.open .studio-drawer{width:286px;opacity:1;padding:14px;pointer-events:auto}.drawer-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.drawer-head b{display:block;font-size:12px}.drawer-head span{font-size:8px;color:var(--muted)}.drawer-head button{border:0;background:#f2f5f8;width:28px;height:28px;border-radius:8px;color:#71869a}.searchbox{border:1px solid var(--line);background:var(--surface-2);border-radius:10px;padding:8px 10px;color:#90a0af;font-size:11px}.searchbox input{border:0;background:transparent;outline:0;width:85%;font-size:9px}.section-label{font-size:8px;color:var(--muted);font-weight:800;margin:14px 2px 7px}.widget-list{display:grid;grid-template-columns:1fr 1fr;gap:7px}.widget-list button{border:1px solid var(--line);background:var(--surface);border-radius:11px;min-height:72px;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr auto;padding:9px;text-align:right;cursor:pointer;color:var(--text)}.widget-list button i{grid-column:1/3;font-style:normal;font-size:19px;color:var(--blue)}.widget-list button span{font-size:8.5px;font-weight:700}.widget-list button small{color:var(--blue);font-size:14px}.widget-list button:hover{border-color:#a9c9ee;box-shadow:0 8px 18px rgba(63,140,255,.07);transform:translateY(-1px)}.drawer-note{margin-top:14px;background:linear-gradient(135deg,#f3f7ff,#f8fbff);border:1px solid #dfeafd;border-radius:12px;padding:11px;position:relative}.drawer-note b{font-size:9px}.drawer-note p{font-size:8px;color:var(--muted);padding-left:42px;margin:4px 0 0;line-height:1.45}.drawer-note label{position:absolute;left:10px;top:18px}.drawer-note input{display:none}.drawer-note label span{display:block;width:34px;height:20px;background:#c8d4df;border-radius:99px;position:relative}.drawer-note label span:after{content:"";position:absolute;width:14px;height:14px;background:#fff;border-radius:50%;top:3px;right:3px;transition:.2s}.drawer-note input:checked+span{background:var(--blue)}.drawer-note input:checked+span:after{right:17px}.layers{display:grid;gap:6px}.layers>div{display:grid;grid-template-columns:26px 1fr 24px;gap:7px;align-items:center;border:1px solid var(--line);border-radius:9px;padding:8px}.layers span{font-size:8px;color:#91a0ae}.layers b{font-size:8.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.layers button{border:0;background:transparent;color:#8ca0b1}.settings{display:grid;gap:10px}.settings label{font-size:8px;color:var(--muted)}.settings input,.settings select{width:100%;margin-top:5px;border:1px solid var(--line);border-radius:9px;padding:8px;background:var(--surface);color:var(--text);font-size:9px}.save-btn{border:0;background:var(--navy);color:#fff;border-radius:9px;padding:9px;font-size:9px;font-weight:800}
.dark{--bg:#0c1520;--surface:#121f2d;--surface-2:#162637;--text:#eaf1f8;--muted:#91a5b7;--line:#26394b;--shadow:0 16px 38px rgba(0,0,0,.22);--shadow-lg:0 28px 70px rgba(0,0,0,.35)}.dark .topbar{background:rgba(16,29,42,.95)}.dark .rank-track{background:#203345}.dark tbody tr:hover td{background:#152536}.dark .drawer-note{background:#15283a;border-color:#26455f}.dark .donut-hole{background:var(--surface)}
@media(max-width:1200px){.topbar nav{display:none}.kpis{grid-template-columns:repeat(3,1fr)}.dashboard-grid>.panel{grid-column:span 6!important}.dashboard-grid>.panel:last-child{grid-column:span 12!important}.filters{grid-template-columns:auto repeat(3,1fr) auto}.filters label:nth-of-type(n+4){display:none}}
@media(max-width:760px){.topbar{padding:0 12px;grid-template-columns:1fr auto}.brand span,.user div:not(.avatar){display:none}.main{padding:16px 12px 28px}.page-head{align-items:flex-start;flex-direction:column}.page-actions{width:100%}.page-actions button{flex:1}.filters{grid-template-columns:1fr 1fr}.filter-main{grid-column:1/-1}.filters label{border-left:0}.filters label:nth-of-type(n+3){display:none}.reset{display:none}.kpis{grid-template-columns:1fr 1fr}.dashboard-grid>.panel{grid-column:span 12!important}.studio{left:7px;top:auto;bottom:9px;height:58px}.studio-rail{width:auto;height:58px;flex-direction:row;border-radius:15px}.studio-rail button{min-height:40px;min-width:45px}.rail-spacer{display:none}.studio-drawer{position:fixed;left:8px;right:8px;bottom:74px;width:auto!important;max-height:65vh;border:1px solid var(--line);border-radius:18px}.studio:not(.open) .studio-drawer{display:none}.kpi{min-height:132px}.donut-layout{grid-template-columns:1fr}.donut{margin:auto}.rank{grid-template-columns:22px 105px 1fr 38px}.treemap{grid-template-columns:1fr 1fr}.tm.a,.tm.b{grid-row:span 1}.tm.a{grid-column:span 2}.tm.e{display:none}}


ES

الحلول الخبريةنظام إدارة الموارد البشرية

لوحة القيادةالموظفونالحضورالهيكل التنظيميالتقارير

⌕♢

AM

أحمد محمدمدير النظام





✦⊞العناصر☷الطبقات⚙الإعدادات

◐المظهر

مصمم لوحة المعلومات7 عناصر في اللوحة

×

⌕ 

عناصر التحليل

☷ترتيب أفقي+◔مخطط دائري+▥أعمدة+⌁اتجاه زمني+▦خريطة تنظيمية+✦مؤشرات ذكية+▤جدول تفصيلي+

وضع التصميم

فعّل التعديل لتحريك العناصر وتخصيص اللوحة.





 بيانات حية · تم التحديث 10:46 ص

لوحة الموارد البشرية التنفيذية

رؤية موحدة للقوى العاملة عبر الفروع والأقسام والمستويات الوظيفية.

✎ تخصيص اللوحة⇩ تصدير＋ لوحة جديدة

☷ الفلاتر 5الفرعالكلالقسمالكلالقطاعالكلالمستوى الوظيفيالكلالجنسالكل↻

👥

•••

إجمالي الموظفين

2,350

↗ 8.4%مقارنة بالشهر السابق

♂

•••

الموظفون الذكور

1,520

↗ 5.2%65% من الإجمالي

♀

•••

الموظفات

830

↗ 11.1%35% من الإجمالي

▦

•••

الفروع والمدارس

24

↗ 2وحدات نشطة

◇

•••

الأقسام التنظيمية

37

↗ 4أقسام فعالة

أكبر الأقسام من حيث عدد الموظفين

آخر تحديث: منذ 4 دقائق

⌁⋯

01الخدمات المساندة

1,261

02الإدارة العامة

665

03الدعم الفني

230

04إدارة المرحلة

180

05الصيانة

140

06السكرتارية

110

التوزيع حسب الجنس

آخر تحديث: منذ 4 دقائق

⌁⋯

إجمالي الموظفين2,350100%

ذكور1,520 65%

إناث830 35%

الفارق بين الجنسين

690 موظف

توزيع الموظفين حسب المرحلة

آخر تحديث: منذ 4 دقائق

⌁⋯

1,980الثانوية

1,040المتوسطة

760الابتدائية

340العالمي

210المصري

165الحضانة

اتجاه القوى العاملة

آخر تحديث: منذ 4 دقائق

⌁⋯

+23.7%من بداية الفترة

ينايرمارسمايويوليوسبتمبر

خريطة التوزيع التنظيمي

المقارنة النسبية للأقسام الرئيسية

⌁⋯

الخدمات المساندة1,26153.7%

الإدارة العامة66528.3%

الدعم الفني230

إدارة المرحلة180

أخرى14%

مؤشرات تحتاج الانتباه

تحليل تلقائي للبيانات

⋯

!

تركيز مرتفع في قسم واحد

الخدمات المساندة تمثل أكثر من نصف القوة العاملة.

✓

استقرار التوزيع

لا توجد تغيرات حادة في إجمالي الموظفين هذا الشهر.

↗

نمو المرحلة الثانوية

أعلى زيادة مسجلة مقارنة بالفترة السابقة.

فتح مركز التحليلات ←

تفاصيل الهيكل والموظفين

عرض قابل للبحث والتصفية والتصدير

⌕⇩⋯

الفرعالقسمالقطاعالمستوى الوظيفيالجنسعدد الموظفينالإدارة العامةالإدارة العامةإدارة المرحلةإداريونذكر120•••الإدارة العامةالإدارة العامةالدعم الفنيإداريونذكر95•••الإدارة العامةالخدمات المساندةالسكرتاريةدعم ومساندةأنثى64•••المرحلة الثانويةالمرحلة الثانويةإدارة المرحلةإداريونذكر180•••

HRMS Enterprise Analytics · لوحة قابلة للتخصيص والحفظ حسب المستخدم والصلاحية

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://people-insight-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/096664f4-150f-4b55-a1e1-fbe1ba6a83a3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
