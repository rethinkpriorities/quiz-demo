import copy from '../../../config/copy.json';

/**
 * Reusable header component for all screens
 * Displays branding and contextual information
 */
const Header = ({ subtitle }) => {
  return (
    <header className="header">
      <div className="header-title">{copy.branding.title}</div>
      {subtitle && <div className="header-subtitle">{subtitle}</div>}
    </header>
  );
};

export default Header;
