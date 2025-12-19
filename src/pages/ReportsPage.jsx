import { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';
import SummarySection from '../components/SummarySection.jsx';
import IncidentChartSection from '../components/IncidentChartSection.jsx';
import WorkOrderChartSection from '../components/WorkOrderChartSection.jsx';
import DepartmentSection from '../components/DepartmentSection.jsx';
import vajraLogo from '../assets/png-icons/vajralogo.png';
import vajrablackicon from '../assets/png-icons/vajrablackicon.png';

const ReportsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-root">
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="app-main">
        <TopBar title="Monthly Report" onToggleSidebar={() => setIsSidebarOpen(true)} />
        <main className="app-content">
          <div>
            <div className="report-header">
              <div className="report-header-left">
                <img src={vajrablackicon} alt="Vajra" className="report-logo" />
              </div>

              <h2 className="report-title">Monthly Report</h2>

              <div className="report-header-right">
                <div className="date-picker">
                  <button className="date-nav-btn" aria-label="Previous month">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <span className="date-text">June 2025</span>
                  <button className="date-nav-btn" aria-label="Next month">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="calendar-icon-btn" aria-label="Select date">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M7 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M13 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <button className="download-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9L10 13L14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>
            <SummarySection />
            <IncidentChartSection />
            <WorkOrderChartSection />
            <DepartmentSection
              title="Incident Reported per department"
              type="incident"
              departments={[
                { name: "Anesthesiology" },
                { name: "Radiology" },
              ]}
            />

            <DepartmentSection
              title="Work order Reported per department"
              type="workorder"
              departments={[
                { name: "Dermatology" },
                { name: "Gynacology" },
              ]}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;


