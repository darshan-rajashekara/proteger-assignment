import headerIcon1 from '../assets/png-icons/headericon1.png';
import notificationicon from '../assets/png-icons/notificationicon.png';
import downarrowblack from '../assets/png-icons/downarrowblack.png';
import leftArrow from '../assets/png-icons/leftArrow.png';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="back-btn" aria-label="Go back">
          <img src={leftArrow} alt="left arrow" className="leftArrow-icon" />
        </button>
        <h1 className="topbar-title">
          <span className="title-main">Reports</span>
          <span className="topbar-subtitle">/ Bio Medical</span>
        </h1>
      </div>
      <div className="topbar-right">
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


