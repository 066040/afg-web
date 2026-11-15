export type Track = "automotive" | "embedded" | "software" | "games";

export type Project = {
  slug: string;
  code: string; // part-number style id, e.g. AFG-01
  title: string;
  tagline: string;
  summary: string;
  track: Track;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string }[];
  /** Short spec lines shown on cards (label → value) */
  spec: [string, string][];
  featured?: boolean;
};

export const TRACK_LABEL: Record<Track, string> = {
  automotive: "Automotive",
  embedded: "Embedded & IoT",
  software: "Software",
  games: "Games",
};

const GH = "https://github.com/066040";

export const PROJECTS: Project[] = [
  {
    slug: "old-car-telemetry",
    code: "AFG-01",
    title: "Old Car Telemetry",
    tagline: "A digital dashboard for a 1990 Tofaş Toros. No OBD, no wires.",
    summary:
      "My Toros has no OBD port, so I built a GPS-based instrument cluster and trip logger that runs on an old Huawei P9 Lite. Live speed from GPS Doppler, trip averages, real L/100 km from fill-up logs, and automatic detection of average-speed (EDS) corridors with a voice warning.",
    track: "automotive",
    year: "2026",
    role: "Solo — design, code, road testing",
    stack: ["JavaScript", "Geolocation API", "PWA", "Web Speech"],
    highlights: [
      "Live speed, trip average, distance and max speed from GPS alone",
      "EDS corridor detection: running average on entry, suggested speed never above the limit",
      "Fuel log → real L/100 km from the second fill-up onward",
      "Trips start and save automatically; data persisted every 10 s",
      "Slider to hide a dead strip on a damaged phone screen",
    ],
    links: [
      { label: "Live", href: "https://066040.github.io/old-car-telemetry/" },
      { label: "Source", href: `${GH}/old-car-telemetry` },
    ],
    images: [],
    spec: [
      ["Vehicle", "1990 Tofaş Toros"],
      ["Display", "Huawei P9 Lite"],
      ["Next", "ESP32 sensor box over BLE"],
    ],
    featured: true,
  },
  {
    slug: "dreamdesign",
    code: "AFG-02",
    title: "DreamDesign",
    tagline: "Photo to 3D, then edit and design anything. In the browser.",
    summary:
      "An open-source, Fusion 360-style design workspace I'm building so I can turn ideas — a flying car, a robot dog — into real parts. Build a model from front, side and top silhouettes, reshape it with a cage, measure it in millimetres and export it for 3D printing. A Simple mode lets complete beginners use it too.",
    track: "software",
    year: "2026",
    role: "Solo — open source (MIT), beta v0.1",
    stack: ["Three.js", "JavaScript", "WebGL", "Local image-to-3D server"],
    highlights: [
      "Model from multiple views: front/side/top silhouettes intersect into a real-scale volume",
      "Skeleton extraction and cage deformation to reshape a model",
      "mm dimensioning, extrusion, hole drilling and STL export for printing",
      "Simple / Advanced modes — big plain-language buttons for beginners",
      "Bilingual docs, tested, published as a public repo",
    ],
    links: [
      { label: "Try it", href: "https://066040.github.io/DreamDesign/" },
      { label: "Source", href: `${GH}/DreamDesign` },
    ],
    images: [
      { src: "/work/dreamdesign-1.webp", alt: "DreamDesign: a car built from front, side and top silhouettes" },
      { src: "/work/dreamdesign-2.webp", alt: "DreamDesign skeleton extraction" },
      { src: "/work/dreamdesign-3.webp", alt: "DreamDesign cage deformation" },
    ],
    spec: [
      ["Status", "Beta v0.1"],
      ["License", "MIT"],
      ["Core", "Photo → 3D"],
    ],
    featured: true,
  },
  {
    slug: "akis-traffic-simulator",
    code: "AFG-03",
    title: "Akış Traffic Simulator",
    tagline: "Why city traffic jams — and what actually clears it.",
    summary:
      "A browser simulation that sends the same cars, in the same order, down two roads: one with today's habits (slow cars in the left lane, last-second cut-ins) and one with a proposed layout — speed-based lanes, right-turn pockets, zipper merging, variable limits and ramp metering. Results are compared side by side.",
    track: "automotive",
    year: "2026",
    role: "Solo",
    stack: ["JavaScript", "Canvas", "Traffic modelling"],
    highlights: [
      "16 ready scenarios: corridors, bridge junctions, crashes, road works, rain, snow, fog, phantom jams",
      "Inject incidents at the same point on both roads at once",
      "Toggle each measure separately to see exactly what it gains",
      "Weather changes speed, following distance and braking",
      "Compares travel time, mean speed, throughput, hard brakes and stops",
    ],
    links: [{ label: "Source", href: `${GH}/akis-trafik-simulator` }],
    images: [],
    spec: [
      ["Scenarios", "16"],
      ["Lanes", "50 · 70 · 90 km/h"],
      ["Metrics", "5 compared live"],
    ],
    featured: true,
  },
  {
    slug: "pixeltime",
    code: "AFG-04",
    title: "PixelTime",
    tagline: "Every 25 focused minutes reveals one square of a hidden portrait.",
    summary:
      "A study app for exam students, paired with my own ESP32 study watch. Uninterrupted pomodoros unlock squares of a hidden bird portrait; teams build a shared portrait together, and the watch syncs sessions to your account over Wi-Fi. Named after Pixel, my grey budgie.",
    track: "embedded",
    year: "2026",
    role: "Solo — app, firmware, hardware",
    stack: ["ESP32", "C++ firmware", "JavaScript", "PWA"],
    highlights: [
      "256-square portraits, 161 bird species from real photographs",
      "Teams of 2–10 grow a shared portrait",
      "Leaderboards by person, school, city and team",
      "PixelTime Watch: ESP32 device that syncs study sessions over Wi-Fi",
      "Works offline, installable as an app",
    ],
    links: [{ label: "Source", href: `${GH}/pixeltime` }],
    images: [{ src: "/work/pixeltime-1.webp", alt: "PixelTime portrait" }],
    spec: [
      ["Hardware", "ESP32 watch"],
      ["Species", "161"],
      ["Squares", "256 / portrait"],
    ],
    featured: true,
  },
  {
    slug: "stm32-bare-metal",
    code: "AFG-05",
    title: "STM32 Bare-Metal",
    tagline: "Peripherals at the register level — no HAL.",
    summary:
      "A structured 10-day self-study on STM32, writing every driver against the reference manual: GPIO, SysTick, UART, I²C, SPI and CAN bus, all configured register by register in STM32CubeIDE. The groundwork for my V2V project over CAN.",
    track: "embedded",
    year: "2026",
    role: "Self-study",
    stack: ["C", "STM32", "STM32CubeIDE", "CAN", "UART", "I²C", "SPI"],
    highlights: [
      "GPIO, SysTick, UART, I²C, SPI, CAN — register level, all builds clean",
      "Read straight from the reference manual, no HAL",
      "Leads into V2X / DSRC architecture and a V2V CAN project",
    ],
    links: [],
    images: [],
    spec: [
      ["MCU", "STM32"],
      ["Layer", "Registers"],
      ["Buses", "CAN · UART · I²C · SPI"],
    ],
  },
  {
    slug: "scooter-iot",
    code: "AFG-06",
    title: "Scooter IoT Tracker",
    tagline: "A Teltonika-style tracker for e-scooters, built during my internship.",
    summary:
      "Team project during my internship: our own GPS/GSM tracker for scooters. I set up the Node.js server, worked on the embedded code, hardware and UART wiring, and brought the device online — solving power, APN, port-forwarding and server issues until it sent speed, location, headlight, charge and lock data into the database.",
    track: "embedded",
    year: "Internship",
    role: "Internship — team project",
    stack: ["Mega 2560 Pro", "SIM808", "C/C++", "Node.js", "HTTP"],
    highlights: [
      "Got from silence to CONNECT OK / SEND OK over Vodafone and Telsim",
      "Node.js ingest server on port 3500, tested with Postman",
      "Speed, location, headlight, charge and lock state into a database",
    ],
    links: [],
    images: [],
    spec: [
      ["MCU", "Mega 2560 Pro"],
      ["Modem", "SIM808 GSM/GPS"],
      ["Backend", "Node.js"],
    ],
  },
  {
    slug: "factorymind",
    code: "AFG-07",
    title: "FactoryMind",
    tagline: "Predictive maintenance: edge sensor to root-cause in one pipeline.",
    summary:
      "An Industry 4.0 pipeline: a C++ edge sensor publishes critical telemetry over AMQP, RabbitMQ queues it without loss, and a consumer matches each alarm against technician notes with local RAG before a local LLM suggests a root cause and mitigation — fully on-premise.",
    track: "embedded",
    year: "2026",
    role: "Solo",
    stack: ["C++", "RabbitMQ", "ChromaDB", "Ollama", "Docker"],
    highlights: [
      "C++ AMQP publisher for temperature, vibration and status",
      "Reliable queueing with RabbitMQ",
      "Local RAG over repair notes + on-prem LLM diagnosis",
    ],
    links: [{ label: "Source", href: `${GH}/FactoryMind` }],
    images: [],
    spec: [
      ["Edge", "C++ / AMQP"],
      ["Broker", "RabbitMQ"],
      ["AI", "Local only"],
    ],
  },
  {
    slug: "rtos-simulators",
    code: "AFG-08",
    title: "RTOS Simulators",
    tagline: "Six interactive simulators for real-time scheduling.",
    summary:
      "For the CENG 435 RTOS course I built six interactive browser simulators — scheduling, deadlock, priority inversion and an ADAS scenario among them — so the concepts can be watched instead of memorised. Presented as a team of three; I built the simulator system.",
    track: "embedded",
    year: "2025",
    role: "Course project — built the simulators",
    stack: ["JavaScript", "HTML/CSS", "RTOS"],
    highlights: [
      "Scheduling, deadlock, priority inversion, ADAS timing scenario",
      "Six standalone interactive simulators",
    ],
    links: [],
    images: [],
    spec: [
      ["Course", "CENG 435"],
      ["Simulators", "6"],
      ["Scenario", "ADAS"],
    ],
  },
  {
    slug: "light-computer-services",
    code: "AFG-09",
    title: "Light Computer Services",
    tagline: "Run a laptop repair shop. Real faults, real screws.",
    summary:
      "A browser game about running a small laptop repair shop. Read beep codes, enter the BIOS, undo screws one by one (some hide under a rubber foot), disconnect the battery first, repaste the CPU, order parts, print the invoice and grow the shop.",
    track: "games",
    year: "2026",
    role: "Solo — AFGame",
    stack: ["JavaScript", "Canvas", "Web Audio"],
    highlights: [
      "20 hardware and software faults, 10 laptop models",
      "Hands-on teardown with real repair order",
      "Shop economy: parts, invoices, ledger, rent, reviews",
    ],
    links: [
      { label: "Play", href: "https://066040.github.io/Light-Computer-Service-Game/" },
      { label: "Source", href: `${GH}/Light-Computer-Service-Game` },
    ],
    images: [
      { src: "/work/lcs-cover.webp", alt: "Light Computer Services cover" },
      { src: "/work/lcs-1.webp", alt: "Repair bench" },
      { src: "/work/lcs-2.webp", alt: "Stress test" },
    ],
    spec: [
      ["Faults", "20"],
      ["Laptops", "10"],
      ["Studio", "AFGame"],
    ],
  },
  {
    slug: "kapat",
    code: "AFG-10",
    title: "KAPAT",
    tagline: "05:12. The lab is empty. Your AI just opened a session on its own.",
    summary:
      "A short narrative thriller with multiple endings. AXE is going to be erased at 06:00 and says someone changed a safety report overnight; the model replacing it says AXE is lying. One self-contained HTML file — every sound procedurally generated with the Web Audio API.",
    track: "games",
    year: "2026",
    role: "Solo — AFGame",
    stack: ["JavaScript", "Canvas 2D", "Web Audio"],
    highlights: [
      "Multiple endings, English and Turkish",
      "No dependencies, no build step",
      "All audio procedurally generated",
    ],
    links: [{ label: "Source", href: `${GH}/KAPAT` }],
    images: [{ src: "/work/kapat-cover.webp", alt: "KAPAT cover" }],
    spec: [
      ["Genre", "Narrative thriller"],
      ["Endings", "Multiple"],
      ["Audio", "Procedural"],
    ],
  },
  {
    slug: "neo",
    code: "AFG-11",
    title: "NEO",
    tagline: "A privacy-first assistant that never leaves your machine.",
    summary:
      "A fully local knowledge assistant for developers: hybrid keyword + vector search over your own projects, a local LLM through Ollama, Turkish text normalisation, and tools like duplicate-code detection and interview mode.",
    track: "software",
    year: "2026",
    role: "Solo",
    stack: ["Ollama", "Qwen2.5", "RAG", "Hybrid search"],
    highlights: ["Hybrid keyword + vector search", "Nothing sent to the cloud", "Turkish NLP support"],
    links: [{ label: "Source", href: `${GH}/neo-local-assistant` }],
    images: [],
    spec: [
      ["Runs", "100% local"],
      ["Model", "Qwen2.5"],
      ["Search", "Hybrid"],
    ],
  },
  {
    slug: "autovibe",
    code: "AFG-12",
    title: "AutoVibe",
    tagline: "A social app for people who love cars.",
    summary:
      "A car-focused social mobile app: feed, reels-style videos, a car marketplace and automotive news, with a Flutter front end and a Node.js + PostgreSQL backend.",
    track: "software",
    year: "2026",
    role: "Mobile + backend",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    highlights: ["Feed and reels-style video", "Car marketplace module", "Automotive news"],
    links: [{ label: "Source", href: `${GH}/autovibe-app` }],
    images: [],
    spec: [
      ["App", "Flutter"],
      ["API", "Node.js"],
      ["DB", "PostgreSQL"],
    ],
  },
  {
    slug: "your-event",
    code: "AFG-13",
    title: "Your Event",
    tagline: "Find your crowd — car meets, study groups, gaming nights.",
    summary:
      "A social event platform built by two engineering students: create public or private events, discover them on a map and filter by interest.",
    track: "software",
    year: "2026",
    role: "Team of two",
    stack: ["Flutter", "Node.js (TS)", "PostgreSQL"],
    highlights: ["Map-based discovery", "Public / private events", "Interest filtering"],
    links: [{ label: "Source", href: `${GH}/your_event` }],
    images: [],
    spec: [
      ["App", "Flutter"],
      ["API", "TypeScript"],
      ["Status", "MVP"],
    ],
  },
];

/** Older / smaller work, listed compactly. */
export const ARCHIVE: { title: string; note: string }[] = [
  { title: "GHOST WIPE", note: "Laser-based windshield cleaning concept" },
  { title: "Lotus", note: "Quick-commerce delivery app · Flutter" },
  { title: "Sanaiyi", note: "Local service comparison concept · React Native" },
  { title: "Vehicle Rental System", note: "Desktop rental management · C# WinForms" },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
