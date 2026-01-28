import { PawPrint, Hourglass, BarChart3, Microscope, HelpCircle } from 'lucide-react';

/**
 * Maps question icon names to Lucide React components.
 * Renders white silhouette icons for consistent cross-platform display.
 */
const ICON_MAP = {
  paw: PawPrint,
  hourglass: Hourglass,
  'bar-chart': BarChart3,
  microscope: Microscope,
};

function QuestionIcon({ name, size = 16, className = '' }) {
  const IconComponent = ICON_MAP[name] || HelpCircle;

  return <IconComponent size={size} className={className} />;
}

export default QuestionIcon;
