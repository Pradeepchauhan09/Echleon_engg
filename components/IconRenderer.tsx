import React from 'react';
import { 
  Map, 
  Sun, 
  Activity, 
  Droplets, 
  Building2, 
  Cpu, 
  Plane, 
  FileText,
  Layers,
  MapPin,
  Share2,
  Target,
  TrendingUp,
  Compass,
  Satellite,
  Waves,
  Ruler,
  Puzzle,
  Zap,
  Settings,
  Handshake,
  CheckCircle2,
  LucideProps
} from 'lucide-react';

interface IconRendererProps extends LucideProps {
  iconName: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ iconName, ...props }) => {
  switch (iconName) {
    case 'Map': return <Map {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'Droplets': return <Droplets {...props} />; // Fallback
    case 'Waves': return <Waves {...props} />;
    case 'Building2': return <Building2 {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Plane': return <Plane {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Share2': return <Share2 {...props} />;
    case 'Target': return <Target {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Compass': return <Compass {...props} />;
    case 'Satellite': return <Satellite {...props} />;
    case 'Ruler': return <Ruler {...props} />;
    case 'Puzzle': return <Puzzle {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Settings': return <Settings {...props} />;
    case 'Handshake': return <Handshake {...props} />;
    case 'CheckCircle2': return <CheckCircle2 {...props} />;
    default: return <Activity {...props} />;
  }
};