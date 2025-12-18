const DepartmentSection = ({ 
  title, 
  department, 
  type = 'incident', // 'incident' or 'workorder'
  incidentsReported = 5,
  incidentsOpen = 20,
  totalDowntime = '7 min 22 sec',
  assets = []
}) => {
  const defaultAssets = [
    { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
    { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
    { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
    { name: 'CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
  ];

  const displayAssets = assets.length > 0 ? assets : defaultAssets;

  return (
    <section className="department-section">
      <div className="department-header">
        <div className="department-header-left">
          <h2 className="department-title">{title}</h2>
          <p className="department-name">Department: {department}</p>
        </div>
        <div className="department-header-right">
          <div className="department-stat">
            <span className="stat-label">Incidents Reported:</span>
            <span className="stat-value">{incidentsReported}</span>
          </div>
          <div className="department-stat">
            <span className="stat-label">Incidents Open:</span>
            <span className="stat-value">{incidentsOpen}</span>
          </div>
          <div className="department-stat">
            <span className="stat-label">Total Downtime:</span>
            <span className="stat-value">{totalDowntime}</span>
          </div>
        </div>
      </div>

      <div className="department-cards">
        {displayAssets.map((asset, index) => (
          <div key={index} className="department-card">
            <button className="card-nav-btn" aria-label="View details">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="card-content">
              <div className="card-row">
                <span className="card-label">Asset name:</span>
                <span className="card-value">{asset.name}</span>
              </div>
              <div className="card-row">
                <span className="card-label">Asset code:</span>
                <span className="card-value">{asset.code}</span>
              </div>
              {asset.startDate && (
                <div className="card-row">
                  <span className="card-label">Start Date:</span>
                  <span className="card-value">{asset.startDate}</span>
                </div>
              )}
              {asset.clearDate && (
                <div className="card-row">
                  <span className="card-label">Clear Date:</span>
                  <span className="card-value">{asset.clearDate}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;

