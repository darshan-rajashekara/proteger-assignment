const workOrderDepartments = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 6, closed: 8 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 4 },
  { name: 'Oncology', open: 2, closed: 3 },
];

const WorkOrderChartSection = () => {
  return (
    <section className="incident-section">
      <header className="incident-header">
        <div>
          <h2 className="card-title">Work Order Reported - 12</h2>
          <p className="card-subtitle">Total No.of.Work order</p>
        </div>
        <div className="legend">
          <span className="legend-dot legend-open" /> Open
          <span className="legend-dot legend-closed" /> Closed
        </div>
      </header>

      <div className="incident-chart">
        {workOrderDepartments.map((dept) => (
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

export default WorkOrderChartSection;

