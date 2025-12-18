const departments = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 8, closed: 9 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 3 },
  { name: 'Oncology', open: 2, closed: 3 },
];

const IncidentChartSection = () => {
  return (
    <section className="incident-section">
      <header className="incident-header">
        <div>
          <h2 className="card-title">Incident Reported - 12</h2>
          <p className="card-subtitle">Total No. of incidents</p>
        </div>
        <div className="legend">
          <span className="legend-dot legend-open" /> Open
          <span className="legend-dot legend-closed" /> Closed
        </div>
      </header>

      <div className="incident-chart">
        {departments.map((dept) => (
          <div key={dept.name} className="incident-row">
            <div className="incident-label">{dept.name}</div>
            <div className="incident-bars">
              <div
                className="bar bar-open"
                style={{ width: `${dept.open * 3}px` }}
              >
                <span className="bar-value">{dept.open}</span>
              </div>
              <div
                className="bar bar-closed"
                style={{ width: `${dept.closed * 3}px` }}
              >
                <span className="bar-value">{dept.closed}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IncidentChartSection;


