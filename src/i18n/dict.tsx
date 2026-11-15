export type Lang = "en" | "tr";
export const LANGS: Lang[] = ["en", "tr"];

/** Path prefix for a language: "" for English, "/tr" for Turkish. */
export const base = (lang: Lang) => (lang === "tr" ? "/tr" : "");

const en = {
    nav: { home: "Home", projects: "Projects", contact: "Contact" },
    role: "Computer Engineer",
    city: "Ankara, Türkiye",
    heroLead: (
      <>
        I build things that <span className="text-ink">drive, sense and talk</span> — embedded systems,
        vehicle software and the tools around them. I started out wanting to be a mechanical engineer;
        now I write the code that runs inside the machine.
      </>
    ),
    seeWork: "See the work ↓",
    allProjects: "All projects →",
    getInTouch: "Get in touch",
    strip: [
      ["PROJECTS", "", "shipped & public"],
      ["FOCUS", "Embedded", "automotive · IoT"],
      ["GRADUATING", "06/2027", "OSTIM Technical Univ."],
      ["BASED IN", "Ankara", "Türkiye"],
    ],
    selected: "Selected work",
    selectedNote: "Things I designed, built and tested myself. Each one taught me something the syllabus didn't.",
    readBuild: "Read the build →",
    parts: "More builds",
    partsNote: "Embedded, IoT, tools and games. Click any line for the full build.",
    cols: ["CODE", "PROJECT", "TRACK", "STACK", "YEAR"],
    earlier: "EARLIER",
    earlierWork: "EARLIER WORK",
    toolbox: "Toolbox",
    toolboxNote: "What's on the bench. Embedded first, everything else in service of it.",
    contactTitle: (
      <>
        Let&apos;s build something that <span className="text-signal">moves.</span>
      </>
    ),
    contactLead:
      "Have a role, a project or an idea in automotive or embedded? Email is the fastest way to reach me.",
    projectsTitle: "Every build",
    projectsLead: "From register-level STM32 drivers to a dashboard for old cars. Filter by track and open any build for the details.",
    all: "All",
    builds: "BUILDS",
    back: "← PROJECTS",
    theBuild: "THE BUILD",
    whatItDoes: "WHAT IT DOES",
    specSheet: "SPEC SHEET",
    roleLabel: "ROLE",
    nextBuild: "NEXT BUILD",
    links: { live: "Live", source: "Source", play: "Play", try: "Try it" },
    replay: "↻ REPLAY IGNITION",
    builtBy: "DESIGNED & BUILT BY AHMET FURKAN GÖKTAŞ",
    fig: "FIG. 01 — A. F. GÖKTAŞ",
};

const tr: typeof en = {
    nav: { home: "Ana sayfa", projects: "Projeler", contact: "İletişim" },
    role: "Bilgisayar Mühendisi",
    city: "Ankara, Türkiye",
    heroLead: (
      <>
        <span className="text-ink">Hareket eden, algılayan ve konuşan</span> şeyler yapıyorum — gömülü
        sistemler, araç yazılımları ve bunların etrafındaki araçlar. Makine mühendisi olmak isteyerek
        başladım; şimdi makinenin içinde çalışan kodu yazıyorum.
      </>
    ),
    seeWork: "Projeleri gör ↓",
    allProjects: "Tüm projeler →",
    getInTouch: "İletişime geç",
    strip: [
      ["PROJE", "", "yayında ve açık"],
      ["ODAK", "Gömülü", "otomotiv · IoT"],
      ["MEZUNİYET", "06/2027", "OSTİM Teknik Üniv."],
      ["KONUM", "Ankara", "Türkiye"],
    ],
    selected: "Öne çıkanlar",
    selectedNote: "Kendim tasarlayıp yaptığım ve test ettiğim işler. Her biri müfredatın öğretmediği bir şey öğretti.",
    readBuild: "Projeyi incele →",
    parts: "Diğer projeler",
    partsNote: "Gömülü, IoT, araçlar ve oyunlar. Ayrıntı için satıra tıkla.",
    cols: ["KOD", "PROJE", "ALAN", "TEKNOLOJİ", "YIL"],
    earlier: "ÖNCEKİ",
    earlierWork: "ÖNCEKİ İŞLER",
    toolbox: "Alet çantası",
    toolboxNote: "Tezgâhta ne var? Önce gömülü sistemler, gerisi onun hizmetinde.",
    contactTitle: (
      <>
        Hareket eden bir şey <span className="text-signal">yapalım.</span>
      </>
    ),
    contactLead:
      "Otomotiv ya da gömülü sistemlerde bir pozisyon, proje veya fikriniz mi var? Bana en hızlı e-postayla ulaşırsınız.",
    projectsTitle: "Tüm projeler",
    projectsLead: "Register seviyesinde STM32 sürücülerinden eski arabalar için dijital göstergeye. Alana göre filtrele, ayrıntı için projeye tıkla.",
    all: "Tümü",
    builds: "PROJE",
    back: "← PROJELER",
    theBuild: "PROJE",
    whatItDoes: "NE YAPIYOR",
    specSheet: "TEKNİK KART",
    roleLabel: "ROL",
    nextBuild: "SONRAKİ PROJE",
    links: { live: "Canlı", source: "Kaynak kod", play: "Oyna", try: "Dene" },
    replay: "↻ GİRİŞİ TEKRARLA",
    builtBy: "TASARIM VE KOD: AHMET FURKAN GÖKTAŞ",
    fig: "ŞEK. 01 — A. F. GÖKTAŞ",
};

export type Dict = typeof en;
export const DICT: Record<Lang, Dict> = { en, tr };

/** Locale-aware uppercase (Turkish i → İ). */
export const up = (s: string, lang: Lang) => s.toLocaleUpperCase(lang === "tr" ? "tr-TR" : "en-US");
