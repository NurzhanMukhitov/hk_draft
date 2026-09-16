/* AxisParts — catalogue data
   Mirrors data.jsx from the handoff verbatim.
   12 anchor brands, 8 categories, 8 industries, 4 steps, 5 regions, 3 freight modes,
   plus a sample of 12 real products (one per anchor brand, all 8 categories covered). */

import { asset } from '../lib/paths';

export const BRANDS = [
  'Siemens', 'ABB', 'Schneider Electric', 'Mitsubishi Electric',
  'Omron', 'Fanuc', 'Allen-Bradley (Rockwell)', 'Yaskawa',
  'Delta Electronics', 'Honeywell', 'Bosch Rexroth', 'Panasonic',
] as const;

export interface Category {
  id: string;
  en: string;
  zh: string;
  img: string;
}

export const CATEGORIES: Category[] = [
  { id: 'plc',     en: 'PLC & Controllers',       zh: 'PLC 与控制器',   img: asset('/images/categories/01_plc_controllers.webp') },
  { id: 'servo',   en: 'Servo Motors & Drives',   zh: '伺服电机与驱动', img: asset('/images/categories/02_servo_drives.webp') },
  { id: 'sensors', en: 'Sensors & Switches',      zh: '传感器与开关',   img: asset('/images/categories/03_sensors_switches.webp') },
  { id: 'hmi',     en: 'HMI & Panels',            zh: 'HMI 与面板',     img: asset('/images/categories/04_hmi_panels.webp') },
  { id: 'power',   en: 'Power Supplies',          zh: '电源',           img: asset('/images/categories/05_power_supplies.webp') },
  { id: 'robots',  en: 'Industrial Robots',       zh: '工业机器人',     img: asset('/images/categories/06_industrial_robots.webp') },
  { id: 'cnc',     en: 'CNC Components',          zh: 'CNC 组件',       img: asset('/images/categories/07_cnc_components.webp') },
  { id: 'spares',  en: 'Automation Spare Parts',  zh: '自动化备件',     img: asset('/images/categories/08_spare_parts.webp') },
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
  { id: 'manufacturing',  en: 'Manufacturing',  zh: '制造业',       enSub: 'Contract manufacturers · OEM lines · assembly cells', zhSub: '代工厂 · OEM 产线 · 装配车间',   img: asset('/images/industries/01_manufacturing.webp') },
  { id: 'automation',     en: 'Automation',     zh: '自动化',       enSub: 'System integrators · motion control · robotics cells', zhSub: '系统集成 · 运动控制 · 机器人单元', img: asset('/images/industries/02_automation.webp') },
  { id: 'electronics',    en: 'Electronics',    zh: '电子',         enSub: 'SMT lines · semiconductor · fabrication tooling', zhSub: 'SMT 产线 · 半导体 · 制造工装',   img: asset('/images/industries/03_electronics.webp') },
  { id: 'energy',         en: 'Energy',         zh: '能源',         enSub: 'Grid utilities · substation gear · renewables', zhSub: '电网公用 · 变电设备 · 可再生能源', img: asset('/images/industries/04_energy.webp') },
  { id: 'oilgas',         en: 'Oil & Gas',      zh: '石油与天然气', enSub: 'Upstream · downstream · process instrumentation', zhSub: '上游 · 下游 · 过程仪表',         img: asset('/images/industries/05_oil_gas.webp') },
  { id: 'mining',         en: 'Mining',         zh: '采矿',         enSub: 'Open-pit and underground · materials handling', zhSub: '露天与地下 · 物料搬运',          img: asset('/images/industries/06_mining.webp') },
  { id: 'marine',         en: 'Marine',         zh: '船舶',         enSub: 'Shipyards · port equipment · offshore', zhSub: '船厂 · 港口设备 · 海洋工程',     img: asset('/images/industries/07_marine.webp') },
  { id: 'infrastructure', en: 'Infrastructure', zh: '基础设施',     enSub: 'Rail · water · public works · construction', zhSub: '轨道 · 水务 · 市政工程',         img: asset('/images/industries/08_infrastructure.webp') },
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
  { no: '03', en: 'We provide quotation',    zh: '提供报价',     enSub: 'Priced, with lead time confirmed.',               zhSub: '提供含交期的确认报价。' },
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
