/* AxisParts — bilingual string dictionaries.
   Mirrors the t-objects from the handoff screens.jsx so the Astro components
   render the exact same copy that was approved in the design canvas. */

export type Locale = 'en' | 'zh-CN';

/* ── Header / Footer / shared ── */
export const shared = {
  en: {
    strip: ['Hong Kong', 'Industrial supply', 'Est. 2020'],
    nav: {
      brands: 'Brands',
      categories: 'Categories',
      applications: 'Applications',
      howItWorks: 'How it works',
      globalSupply: 'Global supply',
    },
    lang: {
      aria: 'Select language',
      en: 'En',
      zh: '中文',
    },
    footer: {
      tag: 'Original parts from 1,000+ global brands.<br>One Hong Kong desk.',
      brands: 'Brands',
      cats: 'Categories',
      contact: 'Contact',
      catList: ['PLC & Controllers', 'Servo Motors & Drives', 'Sensors & Switches', 'HMI & Panels'],
      more: '1,000+ more',
      contactList: ['Mong Kok, Kowloon', '+852 0000 0000', 'sales@example.hk', 'WhatsApp · WeChat'],
      reg: '© 2026. HK Business Registration in good standing.',
    },
  },
  'zh-CN': {
    strip: ['香港', '工业供应', '创立于 2020'],
    nav: {
      brands: '品牌',
      categories: '分类',
      applications: '应用领域',
      howItWorks: '运作流程',
      globalSupply: '全球供应',
    },
    lang: {
      aria: '选择语言',
      en: 'En',
      zh: '中文',
    },
    footer: {
      tag: '原厂零件，覆盖 1,000+ 全球品牌。<br>香港一站采购。',
      brands: '品牌',
      cats: '分类',
      contact: '联系',
      catList: ['PLC 与控制器', '伺服电机与驱动', '传感器与开关', 'HMI 与面板'],
      more: '1,000+ 更多',
      contactList: ['九龙旺角', '+852 0000 0000', 'sales@example.hk', 'WhatsApp · WeChat'],
      reg: '© 2026。香港商业登记良好。',
    },
  },
} as const;

/* ── Home page ── */
export const home = {
  en: {
    hero: {
      eyebrow: 'Hong Kong sourcing desk',
      h1: 'Global Multi-Brand Industrial Supply',
      subheading: 'Based in Hong Kong • Worldwide Sourcing & Distribution',
      lede: 'We supply original and replacement industrial equipment and spare parts from leading global brands.',
      cta: 'Request a part number',
      sec: 'View brand list',
      stats: [
        { num: '1,000+', cap: 'Global brands' },
        { num: '120 hrs', cap: 'Quote window' },
        { num: '12', cap: 'Anchor brands' },
      ],
    },
    categories: {
      label: 'Categories',
      title: 'Core categories. One catalogue.',
      lede: 'Browse by category or send a part number directly. Every reference is confirmed against the original brand catalogue.',
      partsWord: 'parts',
    },
    brandWall: {
      label: 'Brands we supply',
      title: '12 anchor brands. 1,000+ supply chain.',
      more: 'and 1,000+ more —',
      reqBrand: 'request a brand',
    },
    industries: {
      label: 'Applications',
      title: 'Built for the plant floor.',
      lede: 'We supply maintenance, repair and operations teams.',
    },
    howItWorks: {
      label: 'How it works',
      title: 'From part number to delivery.',
    },
    globalSupply: {
      label: 'Global supply',
      title: 'Sourced globally. Shipped worldwide.',
      lede: 'One desk, five regions, three freight modes. We handle export documentation and worldwide logistics.',
      regions: 'Regions',
      freight: 'Freight modes',
    },
  },
  'zh-CN': {
    hero: {
      eyebrow: '香港采购中心',
      h1: '全球多品牌工业供应',
      subheading: '立足香港 • 全球采购与分销',
      lede: '我们供应来自全球领先品牌的原厂及替代工业设备与备件。',
      cta: '提交零件号',
      sec: '查看品牌列表',
      stats: [
        { num: '1,000+', cap: '全球品牌' },
        { num: '120 hrs', cap: '报价周期' },
        { num: '12', cap: '核心品牌' },
      ],
    },
    categories: {
      label: '分类',
      title: '核心分类，一份目录。',
      lede: '按分类浏览，或直接发送零件号。每个型号均与原厂品牌目录核对确认。',
      partsWord: '零件',
    },
    brandWall: {
      label: '我们供应的品牌',
      title: '12 个核心品牌。1,000+ 供应链。',
      more: '以及 1,000+ 更多 —',
      reqBrand: '申请品牌',
    },
    industries: {
      label: '应用领域',
      title: '为生产现场而建。',
      lede: '我们为各行业的维护、维修与运营团队供货。',
    },
    howItWorks: {
      label: '运作流程',
      title: '从零件号到交付。',
    },
    globalSupply: {
      label: '全球供应',
      title: '全球采购，全球发货。',
      lede: '一个中心，五大区域，三种运输方式。我们负责出口单据与全球物流。',
      regions: '区域',
      freight: '运输方式',
    },
  },
} as const;

export type HomeDict = (typeof home)[Locale];
export type SharedDict = (typeof shared)[Locale];
