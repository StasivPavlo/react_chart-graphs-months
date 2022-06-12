import React from 'react';
import './RadioButtonsChart.scss';

interface Props {
  onTypeChart: (value: string) => void;
  typeChart: string;
}

export const RadioButtonsChart = React.memo<Props>(({
  onTypeChart,
  typeChart,
}) => {
  return (
    <div className="chart__radio-buttons">
      <label htmlFor="BarChart">
        Bar chart
        <input
          type="radio"
          name="chart-bar"
          id="BarChart"
          value="bar"
          checked={typeChart === 'bar'}
          onChange={(event) => onTypeChart(event.target.value)}
        />
      </label>

      <label htmlFor="LineChart">
        Line chart
        <input
          type="radio"
          name="chart-bar"
          id="LineChart"
          value="line"
          checked={typeChart === 'line'}
          onChange={(event) => onTypeChart(event.target.value)}
        />
      </label>

      <label htmlFor="RadarChart">
        Radar chart
        <input
          type="radio"
          name="chart-bar"
          id="RadarChart"
          value="radar"
          checked={typeChart === 'radar'}
          onChange={(event) => onTypeChart(event.target.value)}
        />
      </label>
    </div>
  );
});
