const DepartmentSection = ({
  title,
  departments = [],
  type = "incident",
  incidentsReported = 5,
  incidentsOpen = 20,
  totalDowntime = "7 min 22 sec",
}) => {
  const defaultAssets = [
    { name: "Strecher", code: "A001234", startDate: "21-08-2025", clearDate: "26-08-2025" },
    { name: "Strecher", code: "A001234", startDate: "21-08-2025", clearDate: "26-08-2025" },
    { name: "Strecher", code: "A001234", startDate: "21-08-2025", clearDate: "26-08-2025" },
    { name: "CT scan", code: "A001234", startDate: "18-06-2025", clearDate: "19-06-2025" },
  ];

  const headerBg = type === "incident" ? "#56ABF8" : "#1E3A8A";

  return (
    <section className="department-section">
      {/* MAIN HEADER */}
      <div className="department-header" style={{ backgroundColor: headerBg }}>
        <h2 className="department-title">{title}</h2>

        <div className="department-header-right">
          <div>Incidents Reported : {incidentsReported}</div>
          <div>Incidents Open : {incidentsOpen}</div>
          <div>Total Downtime : {totalDowntime}</div>
        </div>
      </div>

      {/* DEPARTMENTS */}
      {departments.map((dept, deptIndex) => (
        <div key={deptIndex}>
          {/* SHOW STRIP ONLY FOR SECOND DEPARTMENT */}
          {deptIndex === 1 && (
            <div
              className="department-radiology"
              style={{ backgroundColor: headerBg }}
            >
              <span className="dep-label">Department:</span>
              <span className="dep-value">{dept.name}</span>
            </div>
          )}

          <div className="department-cards">
            {defaultAssets.map((asset, index) => (
              <div key={index} className="department-card">
                <button className="card-nav-btn">→</button>

                <div className="card-content">
                  <div className="card-row">
                    <span className="card-label">Asset name:</span>
                    <span className="card-value">{asset.name}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Asset code:</span>
                    <span className="card-value">{asset.code}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Start Date:</span>
                    <span className="card-value">{asset.startDate}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Clear Date:</span>
                    <span className="card-value">{asset.clearDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DepartmentSection;
