export type Locale = "en" | "ar";

type NavLink = {
  label: string;
  href: string;
};

type ProblemCard = {
  title: string;
  description: string;
};

type PlanStep = {
  title: string;
  description: string;
};

type Story = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

type ImpactStat = {
  label: string;
  value: number;
  suffix?: string;
};

type Partner = {
  name: string;
  logo: string;
};

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

export type SiteContent = {
  languageName: string;
  hero: {
    preheading: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustNote: string;
  };
  nav: {
    links: NavLink[];
    donate: string;
  };
  problem: {
    heading: string;
    description: string;
    cards: ProblemCard[];
  };
  plan: {
    heading: string;
    description: string;
    steps: PlanStep[];
  };
  success: {
    heading: string;
    description: string;
    stories: Story[];
  };
  impact: {
    heading: string;
    description: string;
    stats: ImpactStat[];
  };
  partners: {
    heading: string;
    description: string;
    partners: Partner[];
  };
  cta: {
    heading: string;
    description: string;
    action: string;
  };
  footer: {
    tagline: string;
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string;
    };
    followUs: string;
    rights: string;
    links: FooterLinkGroup[];
  };
};

export const content: Record<Locale, SiteContent> = {
  en: {
    languageName: "العربية",
    hero: {
      preheading: "Relief with dignity",
      heading: "Hope and healing for every family",
      description:
        "Shifaa partners with local communities across the region to deliver emergency relief, rebuild essential services, and empower families with long-term solutions.",
      primaryCta: "Donate Now",
      secondaryCta: "Join Us",
      trustNote: "Registered NGO • Transparent impact reporting"
    },
    nav: {
      links: [
        { label: "The Need", href: "#problem" },
        { label: "Our Plan", href: "#plan" },
        { label: "Stories", href: "#stories" },
        { label: "Impact", href: "#impact" },
        { label: "Partners", href: "#partners" }
      ],
      donate: "Donate"
    },
    problem: {
      heading: "When crisis strikes, entire futures are at risk",
      description:
        "Millions of displaced families face interrupted education, limited healthcare, and heightened vulnerability. We focus on the most urgent barriers to a dignified life.",
      cards: [
        {
          title: "Education",
          description:
            "Safe learning spaces, accelerated programs, and psychosocial support for children who have lost years of schooling."
        },
        {
          title: "Health",
          description:
            "Mobile clinics, maternal care, and mental health services reaching communities cut off from essential care."
        },
        {
          title: "Protection",
          description:
            "Safeguarding women and youth through legal aid, livelihood pathways, and protection services tailored to their reality."
        }
      ]
    },
    plan: {
      heading: "A clear path from relief to sustainability",
      description:
        "Our three-step approach creates immediate safety, builds resilience, and invests in lasting community systems.",
      steps: [
        {
          title: "Relief",
          description:
            "Rapid response teams stabilize families with food, cash assistance, and safe shelter."
        },
        {
          title: "Empowerment",
          description:
            "Skills training, education, and health access restore independence and dignity."
        },
        {
          title: "Sustainability",
          description:
            "Community-led projects strengthen local systems and create long-term opportunity."
        }
      ]
    },
    success: {
      heading: "Stories of resilience",
      description:
        "Every donation fuels a real transformation. Meet the people behind the numbers and hear how hope returned to their homes.",
      stories: [
        {
          name: "Amina",
          role: "Mother & Entrepreneur",
          quote:
            "Shifaa's training helped me reopen my tailoring business. Now I provide for my children and mentor other women in our camp.",
          image: "/images/stories/amina.jpg"
        },
        {
          name: "Omar",
          role: "Volunteer Medic",
          quote:
            "The mobile clinic means our elders receive medicine on time. We feel seen and protected again.",
          image: "/images/stories/omar.jpg"
        },
        {
          name: "Lina",
          role: "Student",
          quote:
            "After two years without school, I am back in class with friends. I want to become an engineer and rebuild our city.",
          image: "/images/stories/lina.jpg"
        }
      ]
    },
    impact: {
      heading: "Impact at a glance",
      description:
        "Transparent metrics updated quarterly so you always know how your support is saving lives.",
      stats: [
        { label: "Projects launched", value: 85 },
        { label: "People reached", value: 220000 },
        { label: "Active partners", value: 46 }
      ]
    },
    partners: {
      heading: "Trusted by global partners",
      description:
        "Collaboration keeps us accountable and multiplies every gift.",
      partners: [
        { name: "UNFPA", logo: "/logos/unfpa.svg" },
        { name: "GIZ", logo: "/logos/giz.svg" },
        { name: "UNICEF", logo: "/logos/unicef.svg" },
        { name: "WFP", logo: "/logos/wfp.svg" },
        { name: "IRC", logo: "/logos/irc.svg" },
        { name: "CARE", logo: "/logos/care.svg" }
      ]
    },
    cta: {
      heading: "Your generosity writes the next success story",
      description:
        "Invest in urgent relief and lasting resilience for families overcoming conflict and displacement.",
      action: "Give Monthly"
    },
    footer: {
      tagline:
        "Shifaa is a registered NGO dedicated to holistic humanitarian response and community-driven recovery.",
      contact: {
        title: "Contact",
        phone: "+971 4 123 4567",
        email: "hello@shifaa.org",
        address: "Building 5, Humanitarian City, Dubai, UAE"
      },
      followUs: "Follow us",
      rights: `© ${new Date().getFullYear()} Shifaa. All rights reserved.`,
      links: [
        {
          title: "Explore",
          links: [
            { label: "Our Approach", href: "#plan" },
            { label: "Programs", href: "#problem" },
            { label: "Success Stories", href: "#stories" }
          ]
        },
        {
          title: "Get Involved",
          links: [
            { label: "Volunteer", href: "#cta" },
            { label: "Partner", href: "#partners" },
            { label: "Donate", href: "#cta" }
          ]
        }
      ]
    }
  },
  ar: {
    languageName: "English",
    hero: {
      preheading: "إغاثة بكرامة",
      heading: "أمل وشفاء لكل أسرة",
      description:
        "تعمل شفاء مع المجتمعات المحلية عبر المنطقة لتقديم الإغاثة العاجلة، وإعادة بناء الخدمات الأساسية، وتمكين العائلات بحلول طويلة الأمد.",
      primaryCta: "تبرع الآن",
      secondaryCta: "انضم إلينا",
      trustNote: "منظمة مسجلة • تقارير أثر شفافة"
    },
    nav: {
      links: [
        { label: "حجم الحاجة", href: "#problem" },
        { label: "خطة العمل", href: "#plan" },
        { label: "قصص نجاح", href: "#stories" },
        { label: "أثرنا", href: "#impact" },
        { label: "شركاؤنا", href: "#partners" }
      ],
      donate: "تبرع"
    },
    problem: {
      heading: "عندما تضرب الأزمات تُهدد المستقبل بأكمله",
      description:
        "الملايين من الأسر النازحة تواجه تعليماً منقطعاً ورعاية صحية محدودة وضعف الحماية. نركز على أخطر العوائق أمام حياة كريمة.",
      cards: [
        {
          title: "التعليم",
          description:
            "مساحات تعلم آمنة، وبرامج معجلة، ودعم نفسي اجتماعي للأطفال الذين فقدوا سنوات من الدراسة."
        },
        {
          title: "الصحة",
          description:
            "عيادات متنقلة، ورعاية للأمهات، وخدمات للصحة النفسية تصل إلى المجتمعات المحرومة من الرعاية الأساسية."
        },
        {
          title: "الحماية",
          description:
            "حماية النساء والشباب من خلال المساعدة القانونية، ومسارات سبل العيش، وخدمات مصممة لاحتياجاتهم."
        }
      ]
    },
    plan: {
      heading: "مسار واضح من الإغاثة إلى الاستدامة",
      description:
        "نهجنا المكون من ثلاث مراحل يخلق الأمان الفوري، ويعزز القدرة على الصمود، ويستثمر في أنظمة يقودها المجتمع.",
      steps: [
        {
          title: "الإغاثة",
          description:
            "تثبت فرق الاستجابة السريعة أوضاع العائلات بالطعام والمساعدات النقدية والمأوى الآمن."
        },
        {
          title: "التمكين",
          description:
            "برامج التدريب، والتعليم، والرعاية الصحية تعيد الاستقلال والكرامة."
        },
        {
          title: "الاستدامة",
          description:
            "مشاريع يقودها المجتمع تعزز الأنظمة المحلية وتخلق فرصاً طويلة الأمد."
        }
      ]
    },
    success: {
      heading: "حكايات صمود",
      description:
        "كل تبرع يصنع تحولاً حقيقياً. تعرّف على الأشخاص خلف الأرقام وكيف عاد الأمل إلى بيوتهم.",
      stories: [
        {
          name: "أمينة",
          role: "أم ورائدة أعمال",
          quote:
            "تدريب شفاء ساعدني على إعادة فتح مشروع الخياطة. اليوم أعيل أطفالي وأدرب نساءً أخريات في المخيم.",
          image: "/images/stories/amina.jpg"
        },
        {
          name: "عمر",
          role: "مسعف متطوع",
          quote:
            "العيادة المتنقلة تعني أن شيوخنا يحصلون على الدواء في الوقت المناسب. شعرنا مجدداً بالأمان والاهتمام.",
          image: "/images/stories/omar.jpg"
        },
        {
          name: "لينا",
          role: "طالبة",
          quote:
            "بعد عامين بلا دراسة عدت إلى الصف مع أصدقائي. أطمح أن أصبح مهندسة لأعيد بناء مدينتنا.",
          image: "/images/stories/lina.jpg"
        }
      ]
    },
    impact: {
      heading: "أثر ملموس",
      description:
        "مؤشرات شفافة يتم تحديثها ربع سنوياً لتعرفوا دائماً كيف يصنع دعمكم الفرق.",
      stats: [
        { label: "مشروعاً تم إطلاقه", value: 85 },
        { label: "مستفيداً", value: 220000 },
        { label: "شريكاً فعالاً", value: 46 }
      ]
    },
    partners: {
      heading: "ثقة شركاء عالميين",
      description:
        "التعاون يعزز المساءلة ويضاعف أثر كل تبرع.",
      partners: [
        { name: "UNFPA", logo: "/logos/unfpa.svg" },
        { name: "GIZ", logo: "/logos/giz.svg" },
        { name: "UNICEF", logo: "/logos/unicef.svg" },
        { name: "WFP", logo: "/logos/wfp.svg" },
        { name: "IRC", logo: "/logos/irc.svg" },
        { name: "CARE", logo: "/logos/care.svg" }
      ]
    },
    cta: {
      heading: "سخاؤكم يصنع قصة النجاح القادمة",
      description:
        "ساهموا في إغاثة عاجلة وبناء صمود دائم للأسر المتأثرة بالصراع والنزوح.",
      action: "تبرع شهرياً"
    },
    footer: {
      tagline:
        "شفاء منظمة مسجلة متخصصة في الاستجابة الإنسانية الشاملة والتعافي القائم على المجتمع.",
      contact: {
        title: "تواصل معنا",
        phone: "+971 4 123 4567",
        email: "hello@shifaa.org",
        address: "المبنى 5، المدينة الإنسانية، دبي، الإمارات"
      },
      followUs: "تابعونا",
      rights: `© ${new Date().getFullYear()} شفاء. جميع الحقوق محفوظة.`,
      links: [
        {
          title: "اكتشف",
          links: [
            { label: "منهجيتنا", href: "#plan" },
            { label: "برامجنا", href: "#problem" },
            { label: "قصص النجاح", href: "#stories" }
          ]
        },
        {
          title: "شارك",
          links: [
            { label: "تطوع", href: "#cta" },
            { label: "شراكات", href: "#partners" },
            { label: "تبرع", href: "#cta" }
          ]
        }
      ]
    }
  }
};
