/* AxisParts — catalogue data
   Mirrors data.jsx from the handoff verbatim.
   12 anchor brands, 8 categories, 8 industries, 4 steps, 5 regions, 3 freight modes,
   plus a sample of 12 real products (one per anchor brand, all 8 categories covered). */

export const BRANDS = [
  'Siemens', 'ABB', 'Schneider Electric', 'Mitsubishi Electric',
  'Omron', 'Fanuc', 'Allen-Bradley (Rockwell)', 'Yaskawa',
  'Delta Electronics', 'Honeywell', 'Bosch Rexroth', 'Panasonic',
] as const;

export interface Category {
  id: string;
  en: string;
  zh: string;
  count: number;
  img: string;
}

export const CATEGORIES: Category[] = [
  { id: 'plc',     en: 'PLC & Controllers',       zh: 'PLC 与控制器',   count: 412, img: '/images/categories/01_plc_controllers.jpeg' },
  { id: 'servo',   en: 'Servo Motors & Drives',   zh: '伺服电机与驱动', count: 386, img: '/images/categories/02_servo_drives.jpeg' },
  { id: 'sensors', en: 'Sensors & Switches',      zh: '传感器与开关',   count: 524, img: '/images/categories/03_sensors_switches.jpeg' },
  { id: 'hmi',     en: 'HMI & Panels',            zh: 'HMI 与面板',     count: 198, img: '/images/categories/04_hmi_panels.jpeg' },
  { id: 'power',   en: 'Power Supplies',          zh: '电源',           count: 267, img: '/images/categories/05_power_supplies.jpeg' },
  { id: 'robots',  en: 'Industrial Robots',       zh: '工业机器人',     count: 142, img: '/images/categories/06_industrial_robots.jpeg' },
  { id: 'cnc',     en: 'CNC Components',          zh: 'CNC 组件',       count: 231, img: '/images/categories/07_cnc_components.jpeg' },
  { id: 'spares',  en: 'Automation Spare Parts',  zh: '自动化备件',     count: 689, img: '/images/categories/08_spare_parts.jpeg' },
];

export interface Industry {
  id: string;
  en: string;
  zh: string;
  enSub: string;
  zhSub: string;
  img: string;
}

export const INDUSTRIES: Industry[] = [
  { id: 'manufacturing',  en: 'Manufacturing',  zh: '制造业',       enSub: 'Contract manufacturers · OEM lines · assembly cells', zhSub: '代工厂 · OEM 产线 · 装配车间',   img: '/images/industries/01_manufacturing.jpeg' },
  { id: 'automation',     en: 'Automation',     zh: '自动化',       enSub: 'System integrators · motion control · robotics cells', zhSub: '系统集成 · 运动控制 · 机器人单元', img: '/images/industries/02_automation.jpeg' },
  { id: 'electronics',    en: 'Electronics',    zh: '电子',         enSub: 'SMT lines · semiconductor · fabrication tooling', zhSub: 'SMT 产线 · 半导体 · 制造工装',   img: '/images/industries/03_electronics.jpeg' },
  { id: 'energy',         en: 'Energy',         zh: '能源',         enSub: 'Grid utilities · substation gear · renewables', zhSub: '电网公用 · 变电设备 · 可再生能源', img: '/images/industries/04_energy.jpeg' },
  { id: 'oilgas',         en: 'Oil & Gas',      zh: '石油与天然气', enSub: 'Upstream · downstream · process instrumentation', zhSub: '上游 · 下游 · 过程仪表',         img: '/images/industries/05_oil_gas.jpeg' },
  { id: 'mining',         en: 'Mining',         zh: '采矿',         enSub: 'Open-pit and underground · materials handling', zhSub: '露天与地下 · 物料搬运',          img: '/images/industries/06_mining.jpeg' },
  { id: 'marine',         en: 'Marine',         zh: '船舶',         enSub: 'Shipyards · port equipment · offshore', zhSub: '船厂 · 港口设备 · 海洋工程',     img: '/images/industries/07_marine.jpeg' },
  { id: 'infrastructure', en: 'Infrastructure', zh: '基础设施',     enSub: 'Rail · water · public works · construction', zhSub: '轨道 · 水务 · 市政工程',         img: '/images/industries/08_infrastructure.jpeg' },
];

export interface Step {
  no: string;
  en: string;
  zh: string;
  enSub: string;
  zhSub: string;
}

export const STEPS: Step[] = [
  { no: '01', en: 'Send your request',       zh: '发送您的需求', enSub: 'Part number, brand, model — or a full BOM.',  zhSub: '零件号、品牌、型号，或完整物料清单。' },
  { no: '02', en: 'We source globally',      zh: '全球采购',     enSub: 'Confirmed against the original brand catalogue.', zhSub: '与原厂品牌目录核对确认。' },
  { no: '03', en: 'We provide quotation',    zh: '提供报价',     enSub: 'Priced, with lead time, within 120 hours.',       zhSub: '含交期，120 小时内报价。' },
  { no: '04', en: 'Fast delivery worldwide', zh: '全球快速交付', enSub: 'Air, sea or express from the Hong Kong desk.',    zhSub: '由香港中心空运、海运或快递发货。' },
];

export const REGIONS = [
  { en: 'Asia',          zh: '亚洲' },
  { en: 'Europe',        zh: '欧洲' },
  { en: 'Middle East',   zh: '中东' },
  { en: 'Africa',        zh: '非洲' },
  { en: 'North America', zh: '北美' },
];

export const FREIGHT = [
  { en: 'Air',     zh: '空运' },
  { en: 'Sea',     zh: '海运' },
  { en: 'Express', zh: '快递' },
];
