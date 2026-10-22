import {
  BadgeCheck,
  Circle,
  Crosshair,
  Factory,
  Flag,
  Gauge,
  Headset,
  HeartHandshake,
  Layers,
  PackageCheck,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  Workflow,
} from 'lucide-react';

const icons = {
  BadgeCheck,
  Crosshair,
  Factory,
  Flag,
  Gauge,
  Headset,
  HeartHandshake,
  Layers,
  PackageCheck,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  Workflow,
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  const Cmp = icons[name] || Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
