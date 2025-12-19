import headerIcon1 from '../assets/png-icons/headericon1.png';
import notificationicon from '../assets/png-icons/notificationicon.png';
import downarrowblack from '../assets/png-icons/downarrowblack.png';

const TopBar = ({ onToggleSidebar, title = 'Reports' }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">
          <span className="title-main">{title}</span>
          <span className="topbar-subtitle">/ Bio Medical</span>
        </h1>
      </div>

      <div className="topbar-right">
        {/* Menu button placed on the right so it matches the screenshot on mobile */}
        <button className="menu-btn" aria-label="Open menu" onClick={onToggleSidebar}>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>

        <div className="chip">
          <span className="chip-badge">NB</span>
          <span className="chip-text">Non Bio Medical</span>
        </div>
        <div className="chip chip-location">
          <span className="chip-text">Vijaynagar</span>
          <img src={downarrowblack} alt="dropdown" className="downarrowblack-icon" />
        </div>
        <button className="icon-btn" aria-label="Grid view">
          <img src={headerIcon1} alt="Grid view" className="icon-img" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <img src={notificationicon} alt="Notifications" className="icon-img" />
        </button>
        <button className="avatar-btn">A</button>
      </div>
    </header>
  );
};

export default TopBar;


