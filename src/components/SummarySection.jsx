import { useState } from 'react';
import health_metrics from '../assets/png-icons/health_metrics.png';
import distance from '../assets/png-icons/distance.png';

const SummarySection = () => {
  const [hoveredDonut, setHoveredDonut] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);
  const notWorkingCount = 7;

  const onBarEnter = (e, title, open, closed) => {
    const container = e.currentTarget.closest('.bar-chart-content');
    if (!container) return setHoveredBar({ title, open, closed });
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const left = rect.left - containerRect.left + rect.width / 2; // center of bar-group
    // place tooltip slightly above the bar; clamp to at least 8px from top
    const rawTop = rect.top - containerRect.top;
    const top = Math.max(8, rawTop - 8);
    setHoveredBar({ title, open, closed, left, top });
  };

  const onBarLeave = () => setHoveredBar(null);

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
                tabIndex={0}
                onMouseEnter={() => setHoveredDonut('not-working')}
                onMouseLeave={() => setHoveredDonut(null)}
                onFocus={() => setHoveredDonut('not-working')}
                onBlur={() => setHoveredDonut(null)}
              />
            </svg>
            <div className={`donut-badge ${hoveredDonut === 'not-working' ? 'visible' : ''}`} aria-hidden={hoveredDonut !== 'not-working'} style={hoveredDonut === 'not-working' ? { left: '38px', top: '68px' } : { left: '38px', top: '68px' }}>
              <span className="badge-dot"></span>
              <span>Not Working Assets - {notWorkingCount}</span>
            </div>
          </div>
          <div className="donut-legend">
            <div className="donut-legend-item">
              <span className="legend-color legend-working"></span>
              <span>Working Assets</span>
            </div>
            <div
              className="donut-legend-item"
              tabIndex={0}
              onMouseEnter={() => setHoveredDonut('not-working')}
              onMouseLeave={() => setHoveredDonut(null)}
              onFocus={() => setHoveredDonut('not-working')}
              onBlur={() => setHoveredDonut(null)}
            >
              <span className="legend-color legend-not-working"></span>
              <span>Not working Assets</span>
            </div> 
            <div className="donut-legend-item">
              <span className="legend-color legend-discarded"></span>
              <span>Discarded</span>
            </div>
          </div>
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
          {hoveredBar && (
            <div
              className="bar-chart-tooltip"
              style={{ left: `${hoveredBar.left}px`, top: `${hoveredBar.top}px`, transform: 'translate(-50%, -8px)' }}
              role="dialog"
              aria-hidden={!hoveredBar}
            >
              <div className="tooltip-title">{hoveredBar.title}</div>
              <div className="tooltip-row">
                <span className="tooltip-dot tooltip-open"></span>
                <span>Open - {hoveredBar.open}</span>
              </div>
              <div className="tooltip-row">
                <span className="tooltip-dot tooltip-closed"></span>
                <span>Closed - {hoveredBar.closed}</span>
              </div>
            </div>
          )}
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
            <div
              className="bar-group-item"
              tabIndex={0}
              onMouseEnter={(e) => onBarEnter(e, 'Work order', 35, 20)}
              onMouseLeave={onBarLeave}
              onFocus={(e) => onBarEnter(e, 'Work order', 35, 20)}
              onBlur={onBarLeave}
            >
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
            <div
              className="bar-group-item"
              tabIndex={0}
              onMouseEnter={(e) => onBarEnter(e, 'Work Order', 5, 0)}
              onMouseLeave={onBarLeave}
              onFocus={(e) => onBarEnter(e, 'Work Order', 5, 0)}
              onBlur={onBarLeave}
            >
              <div className="bar-stack">
                <div className="bar-segment bar-segment-open" style={{ height: '10px' }}>
                  <span className="bar-segment-value">5</span>
                </div>
                <div className="bar-segment bar-segment-closed" style={{ height: '0px' }}></div>
              </div>
              <span className="bar-group-label">Work Order</span>
            </div>
            <div
              className="bar-group-item"
              tabIndex={0}
              onMouseEnter={(e) => onBarEnter(e, 'Check outs', 10, 7)}
              onMouseLeave={onBarLeave}
              onFocus={(e) => onBarEnter(e, 'Check outs', 10, 7)}
              onBlur={onBarLeave}
            >
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

      {/* Row 2: Only Total Asset Card */}
      <div className="summary-row-2">
        <div className="summary-card metric-card total-asset-card">
          <div>
            <p className="total-asset-label">Total Asset</p>
            <p className="total-asset-value">200</p>
          </div>
        </div>
      </div>

      {/* Row 3: Check outs, Incidents, Work Order */}
      <div className="summary-row-3">
        <div className="summary-card metric-card">
          <div className="metric-header">
            <h3 className="card-title">Check outs</h3>
          </div>
          <div className="metric-body">
          <div className="metric-row">
            <span>Checked In</span>
            <span>0</span>
          </div>
          <div className="metric-row">
            <span>Checked Out</span>
            <span>25</span>
          </div>
          </div>
        </div>

        <div className="summary-card metric-card">
          <div className="metric-header">
            <h3 className="card-title">Incidents</h3>
          </div>
          <div className="metric-body">
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
        </div>

        <div className="summary-card metric-card">
          <div className="metric-header">
            <h3 className="card-title">Work Order</h3>
          </div>
          <div className="metric-body">
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
      </div>
    </section>
  );
};

export default SummarySection;


