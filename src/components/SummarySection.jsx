import health_metrics from '../assets/png-icons/health_metrics.png';
import distance from '../assets/png-icons/distance.png';

const SummarySection = () => {
  return (
    <section className="summary-grid">
      {/* Row 1: Org Card, Donut Chart, Bar Chart */}
      <div className="summary-row-1">
        <div className="org-card">
          <div className="org-content">
            <div className="org-content-top">
              <div className="icon-col">
                <img src={health_metrics} alt="health_metrics" className="health_metrics-icon" />
              </div>
              <p className="summary-label">Sri siddhartha institute of medical science</p>
            </div>
            <div className="location-row">
              <div className="icon-col">
                <img src={distance} alt="distance" className="distance-icon" />
              </div>
              <p className="summary-value">Vijaynagar</p>
            </div>
          </div>
        </div>

        {/* Donut Chart Card */}
        <div className="summary-card donut-card">
        <div className="donut-chart-container">
          <div className="donut-chart-wrapper">
            <svg className="donut-chart" viewBox="0 0 120 120">
              {/* Working Assets — starts at top */}
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="18"
                strokeDasharray="196 302"
                strokeDashoffset="0"
                transform="rotate(-240 60 60)"
              />
              {/* Discarded — RIGHT side */}
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#56ABF8"
                strokeWidth="18"
                strokeDasharray="31 302"
                strokeDashoffset="-196"
                transform="rotate(-240 60 60)"
              />
              {/* Not Working Assets — BOTTOM LEFT */}
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#C26785"
                strokeWidth="18"
                strokeDasharray="75 302"
                strokeDashoffset="-227"
                transform="rotate(-240 60 60)"
              />
            </svg>
          </div>
          <div className="donut-legend">
            <div className="donut-legend-item">
              <span className="legend-color legend-working"></span>
              <span>Working Assets</span>
            </div>
            <div className="donut-legend-item">
              <span className="legend-color legend-not-working"></span>
              <span>Not working Assets</span>
            </div>
            <div className="donut-legend-item">
              <span className="legend-color legend-discarded"></span>
              <span>Discarded</span>
            </div>
          </div>
        </div>
        <div className="donut-badge">
          <span className="badge-dot"></span>
          <span>Not Working Assets - 7</span>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="summary-card bar-chart-card">
        <div className="bar-chart-header">
          <div className="bar-chart-legend">
            <div className="bar-legend-item">
              <span className="bar-legend-color bar-legend-open"></span>
              <span>Open</span>
            </div>
            <div className="bar-legend-item">
              <span className="bar-legend-color bar-legend-closed"></span>
              <span>Closed</span>
            </div>
          </div>
        </div>
        <div className="bar-chart-tooltip">
          <div className="tooltip-title">Work Order</div>
          <div className="tooltip-row">
            <span className="tooltip-dot tooltip-open"></span>
            <span>Open - 35</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-dot tooltip-closed"></span>
            <span>Closed - 20</span>
          </div>
        </div>
        <div className="bar-chart-content">
          <div className="bar-y-axis">
            <span>250</span>
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
          <div className="bar-chart-bars">
            <div className="bar-group-item">
              <div className="bar-stack">
                <div className="bar-segment bar-segment-open" style={{ height: '70px' }}>
                  <span className="bar-segment-value">35</span>
                </div>
                <div className="bar-segment bar-segment-closed" style={{ height: '40px' }}>
                  <span className="bar-segment-value">20</span>
                </div>
              </div>
              <span className="bar-group-label">Incidents</span>
            </div>
            <div className="bar-group-item">
              <div className="bar-stack">
                <div className="bar-segment bar-segment-open" style={{ height: '10px' }}>
                  <span className="bar-segment-value">5</span>
                </div>
                <div className="bar-segment bar-segment-closed" style={{ height: '0px' }}></div>
              </div>
              <span className="bar-group-label">Work Order</span>
            </div>
            <div className="bar-group-item">
              <div className="bar-stack">
                <div className="bar-segment bar-segment-open" style={{ height: '20px' }}>
                  <span className="bar-segment-value">10</span>
                </div>
                <div className="bar-segment bar-segment-closed" style={{ height: '14px' }}>
                  <span className="bar-segment-value">7</span>
                </div>
              </div>
              <span className="bar-group-label">Check outs</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Row 2: Total Asset, Check outs, Incidents, Work Order */}
      <div className="summary-row-2">
        {/* Total Asset Card */}
        <div className="summary-card metric-card total-asset-card">
          <div>
            <p className="total-asset-label">Total Asset</p>
            <p className="total-asset-value">200</p>
          </div>
        </div>

        <div className="summary-card metric-card">
          <h3 className="card-title">Check outs</h3>
          <div className="metric-row">
            <span>Checked In</span>
            <span>0</span>
          </div>
          <div className="metric-row">
            <span>Checked Out</span>
            <span>25</span>
          </div>
        </div>

        <div className="summary-card metric-card">
          <h3 className="card-title">Incidents</h3>
          <div className="metric-row">
            <span>Incidents</span>
            <span>22 Reported</span>
          </div>
          <div className="metric-row">
            <span>Total Downtime</span>
            <span>12 mins 10 sec</span>
          </div>
          <div className="metric-row">
            <span>Closed</span>
            <span>19</span>
          </div>
          <div className="metric-row">
            <span>Open</span>
            <span>3</span>
          </div>
          <div className="metric-row highlight">
            <span>Budget spent</span>
            <span>₹ 3,00,000</span>
          </div>
        </div>

        <div className="summary-card metric-card">
          <h3 className="card-title">Work Order</h3>
          <div className="metric-row">
            <span>Work order</span>
            <span>17 requested</span>
          </div>
          <div className="metric-row">
            <span>Closed</span>
            <span>14</span>
          </div>
          <div className="metric-row">
            <span>Open</span>
            <span>3</span>
          </div>
          <div className="metric-row highlight">
            <span>Budget spent</span>
            <span>₹ 3,00,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;


