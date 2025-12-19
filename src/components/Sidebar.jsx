import vajraLogo from '../assets/png-icons/vajralogo.png';
import dashboardIcon from '../assets/png-icons/dashboardicon.png';
import assetsIcon from '../assets/png-icons/assetsicon.png';
import incidentsIcon from '../assets/png-icons/incidentsicon.png';
import servicesIcon from '../assets/png-icons/servicesicon.png';
import requestIcon from '../assets/png-icons/requesticon.png';
import usersIcon from '../assets/png-icons/usersicon.png';
import reportsIcon from '../assets/png-icons/reportsicon.png';
import dropdownIcon from '../assets/png-icons/Dropdown.png';
import contactUsIcon from '../assets/png-icons/contactusicon.png';
import logoutIcon from '../assets/png-icons/logouticon.png';

const navItems = [
  { name: 'Dashboard', icon: dashboardIcon, hasDropdown: false },
  { name: 'Assets', icon: assetsIcon, hasDropdown: true },
  { name: 'Incidents', icon: incidentsIcon, hasDropdown: false },
  { name: 'Services', icon: servicesIcon, hasDropdown: false },
  { name: 'Request', icon: requestIcon, hasDropdown: false },
  { name: 'Users', icon: usersIcon, hasDropdown: true },
  { name: 'Reports', icon: reportsIcon, hasDropdown: true },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={vajraLogo} alt="Vajra" className="sidebar-logo" />
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${item.name === 'Reports' ? 'nav-item-active' : ''}`}
          >
            <img src={item.icon} alt={item.name} className="nav-icon" />
            <span>{item.name}</span>
            {item.hasDropdown && (
              <img src={dropdownIcon} alt="dropdown" className="nav-dropdown" />
            )}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="outline-btn">
          <img src={contactUsIcon} alt="Contact us" className="btn-icon" />
          Contact us
        </button>
        <button className="outline-btn">
          <img src={logoutIcon} alt="Log out" className="btn-icon" />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;


