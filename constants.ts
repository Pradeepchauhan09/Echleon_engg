import { ServiceItem, NavItem, FeatureItem } from './types';

export const COMPANY_NAME = "Echelon Engg Consultants and Solutions Pvt. Ltd.";
export const TAGLINE = "Integrated Engineering, Geospatial & Infrastructure Consultancy";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const WHO_WE_ARE: FeatureItem[] = [
  {
    title: "Multidisciplinary consultancy",
    icon: "Layers"
  },
  {
    title: "Engineering to execution",
    icon: "MapPin"
  },
  {
    title: "Technical excellence",
    icon: "Share2"
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  { title: "Multidisciplinary", icon: "Share2" },
  { title: "GIS Integration", icon: "Puzzle" },
  { title: "High Accuracy", icon: "CheckCircle2" },
  { title: "Efficient Workflows", icon: "Zap" },
  { title: "Latest Technology", icon: "Settings" },
  { title: "Client-Focused", icon: "Handshake" }
];

export const CHART_DATA = [
  { name: 'Renewable Energy', value: 35 },
  { name: 'Surveying & Geomatics', value: 25 },
  { name: 'Remote Sensing & GIS', value: 20 },
  { name: 'Planning & Engineering', value: 15 },
  { name: 'Others', value: 5 },
];

export const COLORS = ['#047857', '#059669', '#10B981', '#34D399', '#6EE7B7'];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Renewable Energy Consultancy",
    description: "Specialized consultancy for Solar, Wind & Hybrid projects.",
    icon: "Sun",
    details: ["Site Analysis", "Terrain Mapping", "Layout Planning", "Access Design", "Hydrology Study"]
  },
  {
    id: 2,
    title: "Surveying & Geomatics",
    description: "Comprehensive surveying solutions using advanced instruments.",
    icon: "Compass",
    details: ["Topographic & DGPS Survey", "Property Boundary & Stakeout", "Utility & Pipeline Survey", "Road & Railway Alignment", "Transmission Tower Survey"]
  },
  {
    id: 3,
    title: "Remote Sensing & GIS",
    description: "Advanced spatial data processing and digital mapping.",
    icon: "Satellite",
    details: ["Digital mapping", "DEM generation", "Land use analysis", "Flood assessment", "Urban GIS & Smart cities"]
  },
  {
    id: 4,
    title: "Hydrology & Water Resources",
    description: "Expert modelling for water management and flood simulation.",
    icon: "Waves",
    details: ["Watershed modeling", "Flood simulation", "Drainage planning", "Hydraulic analysis"]
  },
  {
    id: 5,
    title: "Planning Consultancy",
    description: "Strategic planning for urban and rural development.",
    icon: "Building2",
    details: ["Master planning", "Urban infrastructure", "Transportation planning", "Rural development", "Asset mapping"]
  },
  {
    id: 6,
    title: "Geospatial Analytics",
    description: "Automation and tool development for GIS workflows.",
    icon: "Cpu",
    details: ["GIS automation", "QGIS tool development", "Terrain processing", "Decision support systems"]
  },
  {
    id: 7,
    title: "Drone Survey & Photogrammetry",
    description: "High-resolution aerial mapping and monitoring (Coming Soon).",
    icon: "Plane",
    details: ["UAV mapping", "Orthomosaic generation", "Volumetric analysis", "Project monitoring"]
  },
  {
    id: 8,
    title: "Engineering & Design",
    description: "Detailed civil, structural, and electrical engineering.",
    icon: "Ruler",
    details: ["Detailed engineering", "Structural drawings", "BOQ estimation", "Cable routing", "Infrastructure design"]
  }
];