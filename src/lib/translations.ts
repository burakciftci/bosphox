/**
 * BosphoX landing copy — section-keyed for easy extension.
 * Add keys under each language; keep `en` and `tr` in sync structurally.
 */

export type Language = "en" | "tr";

export const LANGUAGE_STORAGE_KEY = "bosphox-lang";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      products: "Products",
      process: "Process",
      contact: "Contact",
      cta: "Start a Project",
      ctaShort: "Start",
      primaryAria: "Primary",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langAria: "Language",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      aria: "Theme",
    },
    hero: {
      eyebrow: "Product studio",
      titleLine1: "Ship the product",
      titleLine2: "behind the workflow.",
      description:
        "Interface-led roadmaps, release-ready engineering, and feedback loops from milestone one—the same standard we apply to BosphoX-owned apps and to partner products.",
      primaryCta: "See Our Work",
      secondaryCta: "Start a Project",
      mock: {
        webUrl: "console.bosphox.dev",
        releaseHealth: "Release health",
        releaseSub: "Last 7 days · production",
        deploys: "Deploys",
        phoneApp: "Pulse",
        phoneSub: "Session analytics",
        metrics: [
          { key: "Build", value: "284" },
          { key: "Crash-free", value: "99.2%" },
          { key: "Session p50", value: "4m 02s" },
        ],
      },
    },
    services: {
      eyebrow: "Capabilities",
      title: "End-to-end product work—without the agency theater.",
      subtitle: "Small, senior-led teams. Clear scope. Shipping cadence you can plan around.",
      items: [
        {
          title: "Mobile App Development",
          body: "Native-feeling iOS and Android apps with performance, offline-aware flows, and store-ready polish.",
        },
        {
          title: "Web App Development",
          body: "Fast, accessible web products—dashboards, SaaS surfaces, and internal tools built to scale.",
        },
        {
          title: "Product Design & Launch",
          body: "From discovery to release: UX, UI systems, and launch planning so your product ships with intent.",
        },
      ],
    },
    featured: {
      eyebrow: "From our lab",
      title: "Products we own, ship, and iterate.",
      subtitle:
        "These are not mock case studies—BosphoX builds and maintains its own apps to stay sharp on performance, retention, and real-world constraints.",
      status: {
        live: "Live",
        inProgress: "In Progress",
        comingSoon: "Coming Soon",
      },
      items: [
        {
          title: "WormWay",
          category: "Product",
          platform: "iOS · Android",
          description: "Currently in active development.",
          status: "inProgress" as const,
        },
        {
          title: "Ice Block",
          category: "Product",
          platform: "iOS · Android",
          description: "Currently in active development.",
          status: "inProgress" as const,
        },
        {
          title: "MyDrop",
          category: "Product",
          platform: "iOS · Android",
          description: "Currently in active development.",
          status: "inProgress" as const,
        },
        {
          title: "Ghossip",
          category: "Product",
          platform: "iOS · Android",
          description: "Currently in active development.",
          status: "inProgress" as const,
        },
        {
          title: "Train Block",
          category: "Product",
          platform: "iOS · Android",
          description: "Currently in active development.",
          status: "inProgress" as const,
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear cadence from first call to production.",
      subtitle: "No mystery phases. You always know what is being built next—and why.",
      stepLabel: "Step",
      steps: [
        {
          title: "Discover",
          body: "We align on outcomes, constraints, and success metrics—then map the smallest viable path to ship.",
        },
        {
          title: "Design",
          body: "UX flows and UI systems that stay coherent as the product grows—not one-off screens.",
        },
        {
          title: "Build",
          body: "Engineering with maintainability in mind: performance budgets, observability, and sensible defaults.",
        },
        {
          title: "Launch",
          body: "Release planning, analytics hooks, and iteration loops so the first version is a starting line, not a finish line.",
        },
      ],
    },
    why: {
      eyebrow: "Why teams choose us",
      title: "Serious software—without the heavyweight process.",
      points: [
        {
          title: "Fast execution",
          body: "Tight feedback loops and weekly milestones—momentum you can feel in the repo and the roadmap.",
        },
        {
          title: "Product-first thinking",
          body: "We optimize for adoption and retention, not award-show aesthetics that ignore usage data.",
        },
        {
          title: "AI-assisted development",
          body: "Modern tooling where it helps—without shipping fragile glue code or mystery prompts into production.",
        },
        {
          title: "Built for launch, not demo day",
          body: "Auth, analytics, error handling, and release hygiene are part of the plan from week one.",
        },
      ],
    },
    cta: {
      title: "Let's build something people actually use.",
      subtitle:
        'Tell us about the problem, the timeline, and what "done" looks like—we\'ll reply with a clear next step.',
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Work email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Optional",
        message: "What problem should we solve?",
        messagePlaceholder:
          "Describe the product, constraints, timeline, and what a successful outcome looks like.",
        submit: "Send message",
        sending: "Sending…",
        success: "Thanks—we received your note and will reply soon.",
        error: "Could not send. Please try again or email info@bosphox.com.",
        notConfigured:
          "Email delivery is not configured on the server yet. Please write to info@bosphox.com directly.",
        mailGuideTitle: "What to include in your email",
        mailGuideItems: [
          "Your name and company",
          "A short summary of your project or idea",
          "Expected timeline and target launch date",
          "Budget range and preferred communication channel",
        ],
        altMail: "Email us directly",
      },
    },
    footer: {
      blurb:
        "BosphoX is a software studio building web and mobile products with disciplined craft—designed for clarity, built for launch.",
      navigate: "Navigate",
      connect: "Connect",
      rightsLine: "© {year} BosphoX. All rights reserved.",
      location: "Istanbul · Remote-friendly",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      products: "Ürünler",
      process: "Süreç",
      contact: "İletişim",
      cta: "Proje Başlat",
      ctaShort: "Başla",
      primaryAria: "Ana menü",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      langAria: "Dil",
    },
    theme: {
      light: "Açık",
      dark: "Koyu",
      aria: "Tema",
    },
    hero: {
      eyebrow: "Ürün stüdyosu",
      titleLine1: "İş akışının arkasındaki",
      titleLine2: "ürünü hayata geçirin.",
      description:
        "Arayüz odaklı yol haritaları, yayına hazır mühendislik ve ilk kilometre taşından itibaren geri bildirim döngüleri—BosphoX’un kendi uygulamalarına ve iş ortaklığı ürünlerine uyguladığımız standartın aynısı.",
      primaryCta: "Çalışmalarımızı Gör",
      secondaryCta: "Proje Başlat",
      mock: {
        webUrl: "console.bosphox.dev",
        releaseHealth: "Sürüm sağlığı",
        releaseSub: "Son 7 gün · üretim",
        deploys: "Dağıtımlar",
        phoneApp: "Pulse",
        phoneSub: "Oturum analitiği",
        metrics: [
          { key: "Derleme", value: "284" },
          { key: "Çökme oranı", value: "%99,2" },
          { key: "Oturum p50", value: "4dk 02sn" },
        ],
      },
    },
    services: {
      eyebrow: "Yetkinlikler",
      title: "Uçtan uca ürün çalışması—ajans gösterisiz.",
      subtitle:
        "Küçük, kıdemli ekipler. Net kapsam. Planlayabileceğiniz bir yayın ritmi.",
      items: [
        {
          title: "Mobil Uygulama Geliştirme",
          body: "Performanslı, çevrimdışı akışlara duyarlı ve mağazaya hazır cilalı native hisli iOS ve Android uygulamaları.",
        },
        {
          title: "Web Uygulama Geliştirme",
          body: "Hızlı, erişilebilir web ürünleri—panolar, SaaS yüzeyleri ve ölçeklenebilir iç araçlar.",
        },
        {
          title: "Ürün Tasarımı ve Yayın",
          body: "Keşiften yayına: büyürken tutarlı kalan UX, UI sistemleri ve niyetle çıkan ürün için yayın planlaması.",
        },
      ],
    },
    featured: {
      eyebrow: "Laboratuvarımızdan",
      title: "Sahip olduğumuz, yayınladığımız ve iterasyonla geliştirdiğimiz ürünler.",
      subtitle:
        "Bunlar sahte vaka çalışmaları değil—BosphoX, performans, tutma ve gerçek dünya kısıtlarında keskin kalmak için kendi uygulamalarını geliştirir ve sürdürür.",
      status: {
        live: "Yayında",
        inProgress: "Devam ediyor",
        comingSoon: "Çok yakında",
      },
      items: [
        {
          title: "WormWay",
          category: "Ürün",
          platform: "iOS · Android",
          description: "Aktif olarak geliştirme sürecinde.",
          status: "inProgress" as const,
        },
        {
          title: "Ice Block",
          category: "Ürün",
          platform: "iOS · Android",
          description: "Aktif olarak geliştirme sürecinde.",
          status: "inProgress" as const,
        },
        {
          title: "MyDrop",
          category: "Ürün",
          platform: "iOS · Android",
          description: "Aktif olarak geliştirme sürecinde.",
          status: "inProgress" as const,
        },
        {
          title: "Ghossip",
          category: "Ürün",
          platform: "iOS · Android",
          description: "Aktif olarak geliştirme sürecinde.",
          status: "inProgress" as const,
        },
        {
          title: "Train Block",
          category: "Ürün",
          platform: "iOS · Android",
          description: "Aktif olarak geliştirme sürecinde.",
          status: "inProgress" as const,
        },
      ],
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "İlk görüşmeden üretime net bir tempo.",
      subtitle: "Gizli faz yok. Sırada neyin geliştirildiğini ve nedenini her zaman bilirsiniz.",
      stepLabel: "Adım",
      steps: [
        {
          title: "Keşif",
          body: "Sonuçları, kısıtları ve başarı ölçütlerini hizalarız—ardından en küçük uygulanabilir yayın yolunu çizeriz.",
        },
        {
          title: "Tasarım",
          body: "Ürün büyürken tutarlı kalan UX akışları ve UI sistemleri—tekil ekranlar değil.",
        },
        {
          title: "Geliştirme",
          body: "Sürdürülebilirlik öncelikli mühendislik: performans bütçeleri, gözlemlenebilirlik ve sağlam varsayılanlar.",
        },
        {
          title: "Yayın",
          body: "Yayın planlaması, analitik kancaları ve iterasyon döngüleri—ilk sürüm bir bitiş çizgisi değil, başlangıç.",
        },
      ],
    },
    why: {
      eyebrow: "Neden bizi seçiyorlar",
      title: "Ciddi yazılım—ağır süreç yükü olmadan.",
      points: [
        {
          title: "Hızlı yürütme",
          body: "Sıkı geri bildirim döngüleri ve haftalık kilometre taşları—repoda ve yol haritasında hissedilen ivme.",
        },
        {
          title: "Ürün öncelikli düşünce",
          body: "Kullanım verisini yok sayan ödül estetiği yerine benimseme ve tutmaya odaklanırız.",
        },
        {
          title: "Yapay zekâ destekli geliştirme",
          body: "Yardımcı olduğunda modern araçlar—kırılgan yapıştırıcı kod veya gizemli istemleri üretime taşımadan.",
        },
        {
          title: "Demo günü için değil, yayın için",
          body: "Kimlik doğrulama, analitik, hata yönetimi ve yayın disiplini planın ilk haftasından itibaren yer alır.",
        },
      ],
    },
    cta: {
      title: "İnsanların gerçekten kullandığı bir şey birlikte üretelim.",
      subtitle:
        "Problemi, zaman çizelgesini ve “bitti”nin ne anlama geldiğini anlatın—net bir sonraki adımla yanıt verelim.",
      form: {
        name: "Ad Soyad",
        namePlaceholder: "Adınız",
        email: "E-posta",
        emailPlaceholder: "siz@sirket.com",
        company: "Şirket",
        companyPlaceholder: "İsteğe bağlı",
        message: "Hangi problem için çözüm arıyorsunuz?",
        messagePlaceholder:
          "Ürünü, kısıtları, zaman çizelgesini ve başarılı sonucu kısaca anlatın.",
        submit: "Gönder",
        sending: "Gönderiliyor…",
        success: "Teşekkürler—mesajınız ulaştı, en kısa sürede dönüş yapacağız.",
        error: "Gönderilemedi. Lütfen tekrar deneyin veya info@bosphox.com adresine yazın.",
        notConfigured:
          "Sunucuda e-posta gönderimi henüz yapılandırılmadı. Doğrudan info@bosphox.com adresine yazabilirsiniz.",
        mailGuideTitle: "E-postaniza neler eklemelisiniz",
        mailGuideItems: [
          "Adiniz ve sirketiniz",
          "Proje veya fikrinizin kisa ozeti",
          "Beklenen zaman cizelgesi ve hedef yayin tarihi",
          "Butce araligi ve tercih ettiginiz iletisim kanali",
        ],
        altMail: "Doğrudan e-posta gönder",
      },
    },
    footer: {
      blurb:
        "BosphoX, disiplinli bir uç işçiliğiyle web ve mobil ürünler inşa eden bir yazılım stüdyosudur—netlik için tasarlanır, yayın için üretilir.",
      navigate: "Gezin",
      connect: "Bağlantı",
      rightsLine: "© {year} BosphoX. Tüm hakları saklıdır.",
      location: "İstanbul · Uzaktan uyumlu",
    },
  },
} as const;

export type Messages = (typeof translations)[Language];
