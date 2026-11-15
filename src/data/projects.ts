import type { Lang } from "@/i18n/dict";

export type Track = "automotive" | "embedded" | "software" | "games";

/** Per-language copy for a project. */
type Copy = {
  tagline: string;
  summary: string;
  role: string;
  year: string;
  highlights: string[];
  /** label → value rows for the spec sheet */
  spec: [string, string][];
  /** caption / alt text for each media item, in order */
  captions?: string[];
  /** Optional longer explanation per media item (same order as media). */
  notes?: { title: string; text: string }[];
};

export type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

export type Project = {
  slug: string;
  code: string;
  title: string;
  track: Track;
  stack: string[];
  links: { kind: "live" | "source" | "play" | "try"; href: string }[];
  /** First item is the cover. Add photos / videos here as they arrive. */
  media: Media[];
  featured?: boolean;
  en: Copy;
  tr: Copy;
};

export const TRACK_LABEL: Record<Lang, Record<Track, string>> = {
  en: { automotive: "Automotive", embedded: "Embedded & IoT", software: "Software", games: "Games" },
  tr: { automotive: "Otomotiv", embedded: "Gömülü & IoT", software: "Yazılım", games: "Oyun" },
};

const GH = "https://github.com/066040";

export const PROJECTS: Project[] = [
  {
    slug: "pixeltime",
    code: "AFG-01",
    title: "PixelTime",
    track: "embedded",
    stack: ["ESP32-C3", "KiCad", "C++ firmware", "JavaScript", "PWA"],
    links: [{ kind: "source", href: `${GH}/pixeltime` }],
    media: [
      { type: "image", src: "/work/pixeltime-watch.webp" },
      { type: "image", src: "/work/pixeltime-pcb-front.webp" },
      { type: "image", src: "/work/pixeltime-pcb-back.webp" },
      { type: "image", src: "/work/pixeltime-layout.webp" },
      { type: "image", src: "/work/pixeltime-schematic.webp" },
      { type: "image", src: "/work/pixeltime-2.webp" },
    ],
    featured: true,
    en: {
      tagline: "Every 25 focused minutes reveals one square of a hidden portrait.",
      summary:
        "A study system for exam students: a web app plus a study watch I designed down to the PCB. Uninterrupted pomodoros unlock squares of a hidden bird portrait, teams build a shared portrait together, and the watch syncs sessions to your account over Wi-Fi.",
      role: "Solo — app, firmware, hardware",
      year: "2026",
      highlights: [
        "256-square portraits, 161 bird species from real photographs",
        "Teams of 2–10 grow a shared portrait",
        "Leaderboards by person, school, city and team",
        "PixelTime Watch: ESP32-C3 device that syncs study sessions over Wi-Fi",
        "Own PCB in KiCad: USB-C charging (TP4056 + DW01A protection), RV-3028 RTC, TFT display, buzzer, vibration motor, RGB LED",
        "Works offline, installable as an app",
      ],
      spec: [
        ["Hardware", "ESP32-C3 · own PCB"],
        ["Species", "161"],
        ["Squares", "256 / portrait"],
      ],
      captions: [
        "PixelTime Watch prototype running on the bench",
        "PCB, 3D view — buttons, display connector, buzzer",
        "PCB, 3D view — ESP32-C3 module, USB-C and charging circuit",
        "PCB layout in KiCad",
        "Schematic: power, charging, RTC, display, inputs and outputs",
        "PixelTime web app — sign-up screen",
      ],
      notes: [
        { title: "Prototype on the bench", text: "The firmware running on a 2.25\" bar-type TFT before the PCB: big pixel-font clock, the day carousel and a progress bar for the current session." },
        { title: "Top side: the user interface", text: "Four tactile switches for minus / plus / OK and reset, the FPC connector for the display, a passive buzzer and the vibration motor driver — everything the user touches sits on this side." },
        { title: "Bottom side: brains and power", text: "ESP32-C3-MINI module with its antenna kept clear of copper, USB-C with ESD protection, TP4056 Li-ion charger with DW01A + FS8205 protection, a 3.3 V LDO and the RV-3028 RTC so time survives without Wi-Fi." },
        { title: "Routing", text: "Two-layer board routed in KiCad 10 with ground pours on both sides, mounting holes in each corner and the antenna area pushed to the edge for range." },
        { title: "Schematic", text: "Battery path with load switch and reverse protection, VBAT sensing through a divider into the ADC, encoder-style buttons with RC debounce, I²C for the RTC, SPI for the display, transistor-driven motor and buzzer, and a level-shifted RGB LED." },
        { title: "The web app", text: "Sessions from the watch land here: portraits, collection, teams and leaderboards. Works offline and installs as an app." },
      ],
    },
    tr: {
      tagline: "Kesintisiz geçen her 25 dakika, gizli bir portrenin bir karesini açar.",
      summary:
        "Sınava hazırlanan öğrenciler için bir çalışma sistemi: web uygulaması ve PCB'sine kadar kendim tasarladığım bir çalışma saati. Kesintisiz pomodorolar gizli bir kuş portresinin karelerini açar, ekipler ortak bir portreyi birlikte tamamlar, saat de çalışmaları Wi-Fi üzerinden hesaba gönderir.",
      role: "Tek başıma — uygulama, firmware, donanım",
      year: "2026",
      highlights: [
        "256 karelik portreler, gerçek fotoğraflardan 161 kuş türü",
        "2–10 kişilik ekiplerle ortak portre",
        "Kişi, okul, şehir ve ekip sıralamaları",
        "PixelTime Saat: çalışmaları Wi-Fi ile senkronlayan ESP32-C3 cihazı",
        "KiCad'de kendi PCB'si: USB-C şarj (TP4056 + DW01A koruma), RV-3028 RTC, TFT ekran, buzzer, titreşim motoru, RGB LED",
        "İnternetsiz çalışır, uygulama olarak kurulabilir",
      ],
      spec: [
        ["Donanım", "ESP32-C3 · kendi PCB'si"],
        ["Tür", "161"],
        ["Kare", "256 / portre"],
      ],
      captions: [
        "PixelTime Saat prototipi tezgâhta çalışırken",
        "PCB, 3D görünüm — düğmeler, ekran konnektörü, buzzer",
        "PCB, 3D görünüm — ESP32-C3 modülü, USB-C ve şarj devresi",
        "KiCad'de PCB yerleşimi",
        "Şema: güç, şarj, RTC, ekran, giriş ve çıkışlar",
        "PixelTime web uygulaması — kayıt ekranı",
      ],
      notes: [
        { title: "Tezgâhta prototip", text: "PCB'den önce 2,25\" uzun TFT ekranda çalışan firmware: büyük piksel fontlu saat, gün kaydırması ve o anki oturumun ilerleme çubuğu." },
        { title: "Üst yüz: kullanıcı arayüzü", text: "Eksi / artı / OK ve reset için dört düğme, ekranın FPC konnektörü, pasif buzzer ve titreşim motoru sürücüsü — kullanıcının dokunduğu her şey bu yüzde." },
        { title: "Alt yüz: beyin ve güç", text: "Anteni bakırdan uzak tutulmuş ESP32-C3-MINI modülü, ESD korumalı USB-C, DW01A + FS8205 korumalı TP4056 Li-ion şarj devresi, 3,3 V LDO ve Wi-Fi olmadan da saati tutan RV-3028 RTC." },
        { title: "Yerleşim", text: "KiCad 10'da iki katmanlı kart; iki yüzde de toprak dolgusu, köşelerde montaj delikleri ve menzil için kenara itilmiş anten bölgesi." },
        { title: "Şema", text: "Yük anahtarı ve ters akım korumalı batarya yolu, gerilim bölücüyle ADC'den batarya ölçümü, RC filtreli düğmeler, RTC için I²C, ekran için SPI, transistörle sürülen motor ve buzzer, seviye dönüştürücülü RGB LED." },
        { title: "Web uygulaması", text: "Saatten gelen oturumlar buraya düşer: portreler, koleksiyon, ekipler ve sıralamalar. İnternetsiz çalışır, uygulama olarak kurulur." },
      ],
    },
  },
  {
    slug: "dreamdesign",
    code: "AFG-02",
    title: "DreamDesign",
    track: "software",
    stack: ["Three.js", "JavaScript", "WebGL", "Image-to-3D server"],
    links: [
      { kind: "try", href: "https://066040.github.io/DreamDesign/" },
      { kind: "source", href: `${GH}/DreamDesign` },
    ],
    media: [
      { type: "image", src: "/work/dreamdesign-plane.webp" },
      { type: "image", src: "/work/dreamdesign-plane-top.webp" },
    ],
    featured: true,
    en: {
      tagline: "Photo to 3D, then edit and design anything. In the browser.",
      summary:
        "An open-source, Fusion 360-style design workspace I'm building to turn ideas into real parts. Give it front, side and top silhouettes and it builds a measured solid; then reshape it, measure it in millimetres and export it for 3D printing. A Simple mode lets complete beginners use it too.",
      role: "Solo — open source (MIT), beta v0.1",
      year: "2026",
      highlights: [
        "Model from multiple views: silhouettes intersect into a real-scale solid",
        "Skeleton extraction and cage deformation to reshape a model",
        "mm dimensioning, extrusion, hole drilling and STL export for printing",
        "Enclosure generator straight from a KiCad board file",
        "Simple / Advanced modes — plain-language buttons for beginners",
      ],
      spec: [
        ["Status", "Beta v0.1"],
        ["License", "MIT"],
        ["Core", "Photo → 3D"],
      ],
      captions: [
        "An aircraft built in DreamDesign from front, side and top silhouettes — 4.2 m span",
        "Same model, top orthographic view with live dimensions",
      ],
    },
    tr: {
      tagline: "Fotoğraftan 3D'ye, sonra istediğini düzenle ve tasarla. Tarayıcıda.",
      summary:
        "Fikirleri gerçek parçalara dönüştürmek için geliştirdiğim, Fusion 360 tarzı açık kaynak bir tasarım ortamı. Ön, yan ve üst silüetleri verirsin, gerçek ölçülü bir katı model çıkarır; sonra şeklini değiştirir, milimetre cinsinden ölçer ve 3D baskı için dışa aktarırsın. Basit mod sayesinde hiç bilmeyen biri bile kullanabilir.",
      role: "Tek başıma — açık kaynak (MIT), beta v0.1",
      year: "2026",
      highlights: [
        "Çoklu görünümden model: silüetlerin kesişimiyle gerçek ölçülü katı",
        "İskelet çıkarma ve kafesle şekil değiştirme",
        "mm ölçülendirme, ekstrüzyon, delik açma ve baskı için STL",
        "KiCad kart dosyasından doğrudan kutu (muhafaza) üretimi",
        "Basit / Gelişmiş mod — yeni başlayanlar için sade düğmeler",
      ],
      spec: [
        ["Durum", "Beta v0.1"],
        ["Lisans", "MIT"],
        ["Çekirdek", "Fotoğraf → 3D"],
      ],
      captions: [
        "DreamDesign'da ön, yan ve üst silüetlerden üretilen uçak — 4,2 m kanat açıklığı",
        "Aynı model, üstten ortografik görünüm ve canlı ölçüler",
      ],
    },
  },
  {
    slug: "akis-traffic-simulator",
    code: "AFG-03",
    title: "Akış",
    track: "automotive",
    stack: ["JavaScript", "Canvas", "Traffic modelling"],
    links: [{ kind: "source", href: `${GH}/akis-trafik-simulator` }],
    media: [
      { type: "image", src: "/work/akis-sim.webp" },
      { type: "image", src: "/work/akis-scenarios.webp" },
      { type: "image", src: "/work/akis-learn.webp" },
      { type: "image", src: "/work/akis-weather.webp" },
    ],
    featured: true,
    en: {
      tagline: "Why city traffic jams — and what actually clears it.",
      summary:
        "A traffic simulator that sends the same cars, in the same order, down two roads: one with today's habits (slow cars in the left lane, last-second cut-ins) and one with a proposed layout — speed-based lanes, right-turn pockets, zipper merging, variable limits and ramp metering. Results are compared side by side.",
      role: "Solo",
      year: "2026",
      highlights: [
        "16 scenarios: corridors, bridge junctions, crashes, road works, rain, snow, fog, phantom jams",
        "Inject incidents at the same point on both roads at once",
        "Toggle each measure separately to see exactly what it gains",
        "Weather changes speed, following distance and braking",
        "Compares travel time, mean speed, throughput, hard brakes and stops",
        "In one rainy evening-peak run: same travel time, +56% mean speed, +20% throughput, −44% hard brakes, −49% stopped cars",
      ],
      spec: [
        ["Scenarios", "16"],
        ["Lanes", "50 · 70 · 90 km/h"],
        ["Metrics", "5 compared live"],
      ],
      captions: [
        "Evening peak on a 3 km, 5-lane corridor in the rain — current vs proposed",
        "The 16 ready-made scenarios",
        "Learn: why one fix is never enough",
        "Learn: weather values and what drivers and cities can do",
      ],
      notes: [
        { title: "Two roads, same cars", text: "Top: today's habits. Bottom: the proposed layout. Both get identical traffic and the same incidents. The bottleneck's capacity doesn't change, but the flow does — the panel on the right compares travel time, speed, throughput, hard brakes and stopped cars live." },
        { title: "16 scenarios", text: "Big corridors, bridge junctions, last-second exits, crashes in different lanes, broken-down cars, road works, rain, snow and fog — searchable and filterable by road type, incident and weather." },
        { title: "Why it jams", text: "Congestion starts where a ramp joins, where exiting cars cut across lanes and where the road narrows — and each queue feeds the next. Speed-based lanes, right-turn pockets, zipper merging, variable limits and ramp metering each answer one of these; the simulator shows they only really work together." },
        { title: "Weather and practical advice", text: "Speed, following time and maximum braking change per weather type based on published capacity studies. The page ends with plain do's and don'ts for drivers and what cities can actually build." },
      ],
    },
    tr: {
      tagline: "Şehir trafiği neden tıkanıyor — ve gerçekte ne açıyor?",
      summary:
        "Aynı araçları aynı sırayla iki yola gönderen bir trafik simülatörü: biri bugünkü alışkanlıklarla (sol şeritte yavaş gidenler, son anda şerit kesenler), diğeri önerilen düzenle — hıza göre şerit, sağa dönüş cebi, fermuar birleşme, değişken hız limiti ve rampa ışığı. Sonuçlar yan yana karşılaştırılıyor.",
      role: "Tek başıma",
      year: "2026",
      highlights: [
        "16 senaryo: koridor, köprülü kavşak, kaza, yol çalışması, yağmur, kar, sis, hayalet sıkışma",
        "Olaylar iki yola aynı anda, aynı noktada eklenir",
        "Her önlem ayrı açılıp kapatılır, neyin ne kazandırdığı görülür",
        "Hava; hızı, takip mesafesini ve frenlemeyi değiştirir",
        "Yolculuk süresi, ortalama hız, geçen araç, sert fren ve duran araç karşılaştırılır",
        "Yağmurlu akşam zirvesi denemesinde: yolculuk süresi aynı, ortalama hız +%56, geçen araç +%20, sert fren −%44, duran araç −%49",
      ],
      spec: [
        ["Senaryo", "16"],
        ["Şeritler", "50 · 70 · 90 km/s"],
        ["Ölçüm", "5 değer canlı"],
      ],
      captions: [
        "Yağmurda 3 km, 5 şeritli koridorda akşam zirvesi — mevcut ve önerilen",
        "Hazır 16 senaryo",
        "Öğren: neden tek bir çözüm yetmez",
        "Öğren: hava değerleri, sürücülerin ve şehirlerin yapabilecekleri",
      ],
      notes: [
        { title: "Aynı araçlar, iki yol", text: "Üstte bugünkü alışkanlıklar, altta önerilen düzen. İkisine de aynı trafik ve aynı olaylar giriyor. Darboğazın kapasitesi değişmiyor ama akışın kalitesi değişiyor — sağdaki panel yolculuk süresi, hız, geçen araç, sert fren ve duran aracı canlı karşılaştırıyor." },
        { title: "16 senaryo", text: "Büyük koridorlar, köprülü kavşaklar, son anda çıkışlar, farklı şeritlerde kazalar, arızalı araç, yol çalışması, yağmur, kar ve sis — yol tipine, olaya ve havaya göre aranıp filtrelenebiliyor." },
        { title: "Neden sıkışır?", text: "Sıkışma bağlanan yolun katıldığı yerde, çıkışa yönelenlerin şerit kestiği yerde ve yolun daraldığı yerde başlar; her kuyruk diğerini besler. Hıza göre şerit, sağa dönüş cebi, fermuar birleşme, değişken hız limiti ve rampa ışığı bunlardan birine cevap veriyor; simülasyon gerçek etkinin ancak birlikte çıktığını gösteriyor." },
        { title: "Hava ve pratik öneriler", text: "Hız, takip süresi ve en sert fren her hava için yayımlanmış kapasite çalışmalarına göre değişiyor. Sayfa, sürücüler için sade yapılmalı / yapılmamalılar ve şehirlerin gerçekten yapabileceklerle bitiyor." },
      ],
    },
  },
  {
    slug: "stm32-bare-metal",
    code: "AFG-04",
    title: "STM32 Bare-Metal",
    track: "embedded",
    stack: ["C", "STM32", "STM32CubeIDE", "CAN", "UART", "I²C", "SPI"],
    links: [],
    media: [],
    en: {
      tagline: "Peripherals at the register level — no HAL.",
      summary:
        "A structured 10-day study on STM32, writing every driver against the reference manual: GPIO, SysTick, UART, I²C, SPI and CAN bus, all configured register by register in STM32CubeIDE. The groundwork for a vehicle-to-vehicle project over CAN.",
      role: "Self-study",
      year: "2026",
      highlights: [
        "GPIO, SysTick, UART, I²C, SPI, CAN — register level, all builds clean",
        "Straight from the reference manual, no HAL",
        "Leads into V2X / DSRC architecture and a V2V CAN project",
      ],
      spec: [
        ["MCU", "STM32"],
        ["Layer", "Registers"],
        ["Buses", "CAN · UART · I²C · SPI"],
      ],
    },
    tr: {
      tagline: "Çevre birimleri register seviyesinde — HAL yok.",
      summary:
        "STM32 üzerinde 10 günlük planlı bir çalışma: GPIO, SysTick, UART, I²C, SPI ve CAN bus sürücülerinin hepsini referans kılavuzdan okuyarak, STM32CubeIDE'de register register yazdım. CAN üzerinden araçtan araca (V2V) projesinin temeli.",
      role: "Kendi çalışmam",
      year: "2026",
      highlights: [
        "GPIO, SysTick, UART, I²C, SPI, CAN — register seviyesinde, hatasız derleme",
        "Doğrudan referans kılavuzdan, HAL kullanmadan",
        "V2X / DSRC mimarisine ve CAN tabanlı V2V projesine geçiş",
      ],
      spec: [
        ["MCU", "STM32"],
        ["Katman", "Register"],
        ["Hatlar", "CAN · UART · I²C · SPI"],
      ],
    },
  },
  {
    slug: "scooter-iot",
    code: "AFG-05",
    title: "Scooter IoT Tracker",
    track: "embedded",
    stack: ["Mega 2560 Pro", "SIM808", "C/C++", "Node.js", "HTTP"],
    links: [],
    media: [],
    en: {
      tagline: "A Teltonika-style tracker for e-scooters, built at Devri Robotik.",
      summary:
        "Team project during my internship at Devri Robotik: our own GPS/GSM tracker for scooters. I set up the Node.js server, worked on the embedded code, hardware and UART wiring, and brought the device online — solving power, APN, port-forwarding and server issues until it sent speed, location, headlight, charge and lock data into the database.",
      role: "Internship at Devri Robotik — team project",
      year: "Internship",
      highlights: [
        "From silence to CONNECT OK / SEND OK over Vodafone and Telsim",
        "Node.js ingest server, tested with Postman",
        "Speed, location, headlight, charge and lock state into a database",
      ],
      spec: [
        ["Company", "Devri Robotik"],
        ["Modem", "SIM808 GSM/GPS"],
        ["Backend", "Node.js"],
      ],
    },
    tr: {
      tagline: "Elektrikli scooter'lar için Teltonika benzeri takip cihazı — Devri Robotik'te.",
      summary:
        "Devri Robotik'teki stajımda takım projesi: scooter'lar için kendi GPS/GSM takip cihazımız. Node.js sunucusunu kurdum, gömülü kod, donanım ve UART kablolama üzerinde çalıştım ve cihazı ayağa kaldırdım — güç, APN, port yönlendirme ve sunucu sorunlarını çözüp hız, konum, far, şarj ve kilit verilerinin veritabanına düşmesini sağladım.",
      role: "Devri Robotik stajı — takım projesi",
      year: "Staj",
      highlights: [
        "Sessizlikten CONNECT OK / SEND OK'a: Vodafone ve Telsim üzerinden",
        "Node.js veri sunucusu, Postman ile test",
        "Hız, konum, far, şarj ve kilit durumu veritabanına",
      ],
      spec: [
        ["Şirket", "Devri Robotik"],
        ["Modem", "SIM808 GSM/GPS"],
        ["Sunucu", "Node.js"],
      ],
    },
  },
  {
    slug: "old-car-telemetry",
    code: "AFG-06",
    title: "Old Car Telemetry",
    track: "automotive",
    stack: ["JavaScript", "Geolocation API", "PWA", "Web Speech"],
    links: [
      { kind: "live", href: "https://066040.github.io/old-car-telemetry/" },
      { kind: "source", href: `${GH}/old-car-telemetry` },
    ],
    media: [],
    en: {
      tagline: "A digital dashboard for old cars without OBD. No wires.",
      summary:
        "Classic cars have no OBD port to read from, so this turns an old Android phone into an instrument cluster and trip logger using GPS alone: live speed, trip averages, real fuel consumption from fill-up logs, and average-speed corridor detection with a voice warning.",
      role: "Solo",
      year: "2026",
      highlights: [
        "Live speed, trip average, distance and max speed from GPS",
        "Average-speed corridor detection; suggested speed never above the limit",
        "Fuel log → real L/100 km from the second fill-up onward",
        "Trips start and save automatically",
        "Nothing connected to the car",
      ],
      spec: [
        ["For", "Pre-OBD cars"],
        ["Display", "Any old phone"],
        ["Next", "ESP32 sensor box over BLE"],
      ],
    },
    tr: {
      tagline: "OBD'si olmayan eski arabalar için dijital gösterge. Kablo yok.",
      summary:
        "Klasik arabalarda veri okunacak OBD portu yok; bu proje eski bir Android telefonu yalnızca GPS kullanarak gösterge paneline ve yolculuk kaydediciye çeviriyor: anlık hız, yolculuk ortalamaları, yakıt kayıtlarından gerçek tüketim ve sesli uyarılı ortalama hız koridoru tespiti.",
      role: "Tek başıma",
      year: "2026",
      highlights: [
        "GPS ile anlık hız, ortalama, mesafe ve maksimum hız",
        "Ortalama hız koridoru tespiti; önerilen hız limiti asla geçmez",
        "Yakıt kaydı → ikinci dolumdan itibaren gerçek L/100 km",
        "Yolculuklar kendiliğinden başlar ve kaydedilir",
        "Arabaya hiçbir şey bağlanmaz",
      ],
      spec: [
        ["Hedef", "OBD öncesi araçlar"],
        ["Ekran", "Herhangi bir eski telefon"],
        ["Sırada", "BLE ile ESP32 sensör kutusu"],
      ],
    },
  },
  {
    slug: "factorymind",
    code: "AFG-07",
    title: "FactoryMind",
    track: "embedded",
    stack: ["C++", "RabbitMQ", "ChromaDB", "Ollama", "Docker"],
    links: [{ kind: "source", href: `${GH}/FactoryMind` }],
    media: [],
    en: {
      tagline: "Predictive maintenance: edge sensor to root cause in one pipeline.",
      summary:
        "An Industry 4.0 pipeline: a C++ edge sensor publishes critical telemetry over AMQP, RabbitMQ queues it without loss, and a consumer matches each alarm against technician notes with local RAG before a local LLM suggests a root cause and mitigation — fully on-premise.",
      role: "Solo",
      year: "2026",
      highlights: [
        "C++ AMQP publisher for temperature, vibration and status",
        "Reliable queueing with RabbitMQ",
        "Local RAG over repair notes + on-prem LLM diagnosis",
      ],
      spec: [
        ["Edge", "C++ / AMQP"],
        ["Broker", "RabbitMQ"],
        ["AI", "Local only"],
      ],
    },
    tr: {
      tagline: "Kestirimci bakım: sahadaki sensörden kök nedene tek hat.",
      summary:
        "Endüstri 4.0 hattı: C++ ile yazılmış uç sensör kritik verileri AMQP üzerinden yayınlar, RabbitMQ bunları kayıpsız kuyruğa alır, tüketici her alarmı yerel RAG ile teknisyen notlarıyla eşleştirir ve yerel bir LLM kök neden ile çözüm önerir — tamamen şirket içinde.",
      role: "Tek başıma",
      year: "2026",
      highlights: [
        "Sıcaklık, titreşim ve durum için C++ AMQP yayıncısı",
        "RabbitMQ ile güvenilir kuyruk",
        "Tamir notları üzerinde yerel RAG + yerel LLM teşhisi",
      ],
      spec: [
        ["Uç", "C++ / AMQP"],
        ["Kuyruk", "RabbitMQ"],
        ["Yapay zekâ", "Sadece yerel"],
      ],
    },
  },
  {
    slug: "rtos-simulators",
    code: "AFG-08",
    title: "RTOS Simulators",
    track: "embedded",
    stack: ["JavaScript", "HTML/CSS", "RTOS"],
    links: [],
    media: [],
    en: {
      tagline: "Six interactive simulators for real-time scheduling.",
      summary:
        "For the CENG 435 RTOS course I built six interactive browser simulators — scheduling, deadlock, priority inversion and an ADAS scenario among them — so the concepts can be watched instead of memorised. Presented as a team of three; I built the simulator system.",
      role: "Course project — built the simulators",
      year: "2025",
      highlights: ["Scheduling, deadlock, priority inversion, ADAS timing scenario", "Six standalone interactive simulators"],
      spec: [
        ["Course", "CENG 435"],
        ["Simulators", "6"],
        ["Scenario", "ADAS"],
      ],
    },
    tr: {
      tagline: "Gerçek zamanlı zamanlama için altı etkileşimli simülatör.",
      summary:
        "CENG 435 RTOS dersi için altı etkileşimli tarayıcı simülatörü yaptım — zamanlama, kilitlenme (deadlock), öncelik terslemesi ve bir ADAS senaryosu dahil — kavramlar ezberlenmek yerine izlenebilsin diye. Üç kişilik ekip olarak sunduk; simülatör sistemini ben kurdum.",
      role: "Ders projesi — simülatörleri ben yazdım",
      year: "2025",
      highlights: ["Zamanlama, deadlock, öncelik terslemesi, ADAS zamanlama senaryosu", "Altı bağımsız etkileşimli simülatör"],
      spec: [
        ["Ders", "CENG 435"],
        ["Simülatör", "6"],
        ["Senaryo", "ADAS"],
      ],
    },
  },
  {
    slug: "neo",
    code: "AFG-09",
    title: "NEO",
    track: "software",
    stack: ["Ollama", "Qwen2.5", "RAG", "Hybrid search"],
    links: [{ kind: "source", href: `${GH}/neo-local-assistant` }],
    media: [],
    en: {
      tagline: "A privacy-first assistant that never leaves your machine.",
      summary:
        "A fully local knowledge assistant for developers: hybrid keyword + vector search over your own projects, a local LLM through Ollama, Turkish text normalisation, and tools like duplicate-code detection and interview mode.",
      role: "Solo",
      year: "2026",
      highlights: ["Hybrid keyword + vector search", "Nothing sent to the cloud", "Turkish NLP support"],
      spec: [
        ["Runs", "100% local"],
        ["Model", "Qwen2.5"],
        ["Search", "Hybrid"],
      ],
    },
    tr: {
      tagline: "Bilgisayarından hiç çıkmayan, gizlilik öncelikli bir asistan.",
      summary:
        "Geliştiriciler için tamamen yerel çalışan bir bilgi asistanı: kendi projelerin üzerinde anahtar kelime + vektör karma arama, Ollama ile yerel LLM, Türkçe metin normalizasyonu, kod tekrarı tespiti ve mülakat modu gibi araçlar.",
      role: "Tek başıma",
      year: "2026",
      highlights: ["Anahtar kelime + vektör karma arama", "Buluta hiçbir şey gönderilmez", "Türkçe dil desteği"],
      spec: [
        ["Çalışma", "%100 yerel"],
        ["Model", "Qwen2.5"],
        ["Arama", "Karma"],
      ],
    },
  },
  {
    slug: "autovibe",
    code: "AFG-10",
    title: "AutoVibe",
    track: "software",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    links: [{ kind: "source", href: `${GH}/autovibe-app` }],
    media: [],
    en: {
      tagline: "A social app for people who love cars.",
      summary:
        "A car-focused social mobile app: feed, reels-style videos, a car marketplace and automotive news, with a Flutter front end and a Node.js + PostgreSQL backend.",
      role: "Mobile + backend",
      year: "2026",
      highlights: ["Feed and reels-style video", "Car marketplace module", "Automotive news"],
      spec: [
        ["App", "Flutter"],
        ["API", "Node.js"],
        ["DB", "PostgreSQL"],
      ],
    },
    tr: {
      tagline: "Arabayı sevenler için bir sosyal uygulama.",
      summary:
        "Araba odaklı bir sosyal mobil uygulama: akış, reels tarzı videolar, araç pazarı ve otomotiv haberleri; Flutter ön yüz, Node.js + PostgreSQL arka uç.",
      role: "Mobil + arka uç",
      year: "2026",
      highlights: ["Akış ve reels tarzı video", "Araç pazarı modülü", "Otomotiv haberleri"],
      spec: [
        ["Uygulama", "Flutter"],
        ["API", "Node.js"],
        ["Veritabanı", "PostgreSQL"],
      ],
    },
  },
  {
    slug: "your-event",
    code: "AFG-11",
    title: "Your Event",
    track: "software",
    stack: ["Flutter", "Node.js (TS)", "PostgreSQL"],
    links: [{ kind: "source", href: `${GH}/your_event` }],
    media: [],
    en: {
      tagline: "Find your crowd — car meets, study groups, gaming nights.",
      summary:
        "A social event platform built by two engineering students: create public or private events, discover them on a map and filter by interest.",
      role: "Team of two",
      year: "2026",
      highlights: ["Map-based discovery", "Public / private events", "Interest filtering"],
      spec: [
        ["App", "Flutter"],
        ["API", "TypeScript"],
        ["Status", "MVP"],
      ],
    },
    tr: {
      tagline: "Kalabalığını bul — araba buluşmaları, çalışma grupları, oyun geceleri.",
      summary:
        "İki mühendislik öğrencisinin geliştirdiği sosyal etkinlik platformu: herkese açık ya da özel etkinlik oluştur, haritada keşfet, ilgi alanına göre filtrele.",
      role: "İki kişilik ekip",
      year: "2026",
      highlights: ["Harita üzerinden keşif", "Açık / özel etkinlikler", "İlgi alanı filtresi"],
      spec: [
        ["Uygulama", "Flutter"],
        ["API", "TypeScript"],
        ["Durum", "MVP"],
      ],
    },
  },
  {
    slug: "light-computer-services",
    code: "AFG-12",
    title: "Light Computer Services",
    track: "games",
    stack: ["JavaScript", "Canvas", "Web Audio"],
    links: [
      { kind: "play", href: "https://066040.github.io/Light-Computer-Service-Game/" },
      { kind: "source", href: `${GH}/Light-Computer-Service-Game` },
    ],
    media: [
      { type: "image", src: "/work/lcs-cover.webp" },
      { type: "image", src: "/work/lcs-1.webp" },
      { type: "image", src: "/work/lcs-2.webp" },
    ],
    en: {
      tagline: "Run a laptop repair shop. Real faults, real screws.",
      summary:
        "A browser game about running a small laptop repair shop. Read beep codes, enter the BIOS, undo screws one by one (some hide under a rubber foot), disconnect the battery first, repaste the CPU, order parts, print the invoice and grow the shop.",
      role: "Solo — AFGame",
      year: "2026",
      highlights: [
        "20 hardware and software faults, 10 laptop models",
        "Hands-on teardown in the real repair order",
        "Shop economy: parts, invoices, ledger, rent, reviews",
      ],
      spec: [
        ["Faults", "20"],
        ["Laptops", "10"],
        ["Studio", "AFGame"],
      ],
      captions: ["Cover", "Repair bench", "Stress test"],
    },
    tr: {
      tagline: "Bir laptop tamir dükkânı işlet. Gerçek arızalar, gerçek vidalar.",
      summary:
        "Küçük bir laptop tamir dükkânı işlettiğin tarayıcı oyunu. Bip kodlarını oku, BIOS'a gir, vidaları tek tek sök (bazıları lastik ayağın altında), önce bataryayı çıkar, işlemcinin macununu yenile, parça sipariş et, faturayı yazdır ve dükkânı büyüt.",
      role: "Tek başıma — AFGame",
      year: "2026",
      highlights: [
        "20 donanım ve yazılım arızası, 10 laptop modeli",
        "Gerçek tamir sırasıyla elle söküm",
        "Dükkân ekonomisi: parça, fatura, defter, kira, yorumlar",
      ],
      spec: [
        ["Arıza", "20"],
        ["Laptop", "10"],
        ["Stüdyo", "AFGame"],
      ],
      captions: ["Kapak", "Tamir tezgâhı", "Stres testi"],
    },
  },
  {
    slug: "kapat",
    code: "AFG-13",
    title: "KAPAT",
    track: "games",
    stack: ["JavaScript", "Canvas 2D", "Web Audio"],
    links: [{ kind: "source", href: `${GH}/KAPAT` }],
    media: [
      { type: "image", src: "/work/kapat-scene.webp" },
      { type: "image", src: "/work/kapat-title.webp" },
      { type: "image", src: "/work/kapat-consoles.webp" },
    ],
    en: {
      tagline: "05:12. The lab is empty. Your AI just opened a session on its own.",
      summary:
        "A short narrative thriller with multiple endings. AXE is going to be erased at 06:00 and says someone changed a safety report overnight; the model replacing it says AXE is lying. One self-contained HTML file — every sound procedurally generated with the Web Audio API.",
      role: "Solo — AFGame",
      year: "2026",
      highlights: ["Multiple endings, English and Turkish", "No dependencies, no build step", "All audio procedurally generated"],
      spec: [
        ["Genre", "Narrative thriller"],
        ["Endings", "Multiple"],
        ["Audio", "Procedural"],
      ],
      captions: ["Opening scene — 05:12, Victor's desk", "Title screen", "Two consoles: AXE on the left, NINETYNINE on the right"],
      notes: [
        { title: "Opening scene", text: "A short Canvas 2D cinematic sets the mood: an empty lab, the city at night, a monitor that greets you before you type anything. Rain, hum and footsteps are all synthesised live with the Web Audio API." },
        { title: "Title screen", text: "English and Turkish from the first screen. The whole game ships as one HTML file with no dependencies." },
        { title: "Two AIs, one truth", text: "AXE talks through a raw terminal, NINETYNINE through a polished chat. The player opens files, compares reports and chooses replies; what you check and who you believe decides the ending." },
      ],
    },
    tr: {
      tagline: "05.12. Laboratuvar boş. Yapay zekân kendi kendine bir oturum açtı.",
      summary:
        "Birden çok sonu olan kısa bir gerilim/hikâye oyunu. AXE saat 06.00'da silinecek ve gece biri bir güvenlik raporunu değiştirmiş diyor; yerine geçecek model ise AXE'in yalan söylediğini söylüyor. Tek bir HTML dosyası — tüm sesler Web Audio API ile anlık üretiliyor.",
      role: "Tek başıma — AFGame",
      year: "2026",
      highlights: ["Birden çok son, Türkçe ve İngilizce", "Bağımlılık yok, derleme yok", "Tüm sesler kodla üretiliyor"],
      spec: [
        ["Tür", "Hikâye / gerilim"],
        ["Son", "Birden çok"],
        ["Ses", "Prosedürel"],
      ],
      captions: ["Açılış sahnesi — 05.12, Victor'un masası", "Başlık ekranı", "İki konsol: solda AXE, sağda NINETYNINE"],
      notes: [
        { title: "Açılış sahnesi", text: "Kısa bir Canvas 2D sinematiği atmosferi kuruyor: boş laboratuvar, gece şehir, sen bir şey yazmadan selam veren ekran. Yağmur, uğultu ve ayak sesleri Web Audio API ile anlık üretiliyor." },
        { title: "Başlık ekranı", text: "İlk ekrandan itibaren Türkçe ve İngilizce. Oyunun tamamı bağımlılığı olmayan tek bir HTML dosyası." },
        { title: "İki yapay zekâ, tek gerçek", text: "AXE ham bir terminalden, NINETYNINE şık bir sohbet ekranından konuşuyor. Oyuncu dosyaları açıyor, raporları karşılaştırıyor ve cevap seçiyor; neyi kontrol ettiğin ve kime inandığın sonu belirliyor." },
      ],
    },
  },
];

/** Older / smaller work, listed compactly. */
export const ARCHIVE: { title: string; en: string; tr: string }[] = [
  { title: "GHOST WIPE", en: "Laser-based windshield cleaning concept", tr: "Lazerle cam temizleme konsepti" },
  { title: "Lotus", en: "Quick-commerce delivery app · Flutter", tr: "Hızlı teslimat uygulaması · Flutter" },
  { title: "Sanaiyi", en: "Local service comparison concept · React Native", tr: "Usta/servis karşılaştırma konsepti · React Native" },
  { title: "Vehicle Rental System", en: "Desktop rental management · C# WinForms", tr: "Masaüstü araç kiralama · C# WinForms" },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
