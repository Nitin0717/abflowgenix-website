import {
  Activity,
  BadgeCheck,
  Circle,
  Droplets,
  Factory,
  FileBarChart,
  Gauge,
  Layers,
  MapPin,
  PlugZap,
  Thermometer,
  Wind,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

const icons = {
  Activity,
  BadgeCheck,
  Droplets,
  Factory,
  FileBarChart,
  Gauge,
  Layers,
  MapPin,
  PlugZap,
  Thermometer,
  Wind,
  Workflow,
  Wrench,
  Zap,
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  const Cmp = icons[name] || Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
