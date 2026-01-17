/**
 * Reusable header component for all screens
 * Displays "Moral Parliament" branding and contextual information
 */
const Header = ({ subtitle }) => {
  return (
    <header className="header">
      <div className="header-title">Moral Parliament</div>
      {subtitle && (
        <div className="header-subtitle">{subtitle}</div>
      )}
    </header>
  );
};

export default Header;
