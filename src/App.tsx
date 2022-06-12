import React, { useState } from 'react';
import { InputsChart } from './components/InputsChart';
import './App.scss';
import { MonthChart } from './components/MonthChart/MonthChart';

export const App: React.FC = () => {
  const [labelMonths, setLabelMonths] = useState<string[]>([]);
  const [valueMonths, setValueMonths] = useState<number[]>([]);

  const addLabelMonth = (label: string) => {
    const months = label.split(',').map((month: string) => month.trim());

    setLabelMonths(months);
  };

  const addValueMonth = (value: string) => {
    const months: number[] = value.split(',').map((month: string) => Number(month.trim()));

    if (months.length > labelMonths.length) {
      setValueMonths(months.slice(0, labelMonths.length));
    } else {
      setValueMonths(months);
    }
  };

  return (
    <div className="App">
      <InputsChart
        onLabelMonth={addLabelMonth}
        onValueMonth={addValueMonth}
      />

      <MonthChart labels={labelMonths} values={valueMonths} />
    </div>
  );
};
