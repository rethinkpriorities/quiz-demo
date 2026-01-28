/**
 * Reusable header component for all screens
 * Displays RP logo, quiz name, and contextual information
 */
const Header = ({ subtitle }) => {
  return (
    <header className={`header${subtitle ? ' header-with-subtitle' : ''}`}>
      <div className="header-brand">
        <img
          src={`${import.meta.env.BASE_URL}NewLogoSVG.svg`}
          alt="Rethink Priorities"
          height="24"
        />
        <span className="header-title">Donor Compass</span>
      </div>
      {subtitle && <div className="header-subtitle">{subtitle}</div>}
    </header>
  );
};

export default Header;
