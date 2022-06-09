import React, { useState } from 'react';
import { InputsChart } from './components/InputsChart';
import './App.scss';

export const App: React.FC = () => {
  const [labelMonths, setLabelMonths] = useState<string[]>([]);
  const [valueMonths, setValueMonths] = useState<number[]>([]);

  const addLabelMonth = (label: string) => {
    const months = label.split(',').map((month: string) => month.trim());

    setLabelMonths(months);
  };

  const addValueMonth = (value: string) => {
    const months = value.split(',').map((month: string) => Number(month.trim()));

    setValueMonths(months);
  };

  // eslint-disable-next-line no-console
  console.log(labelMonths);
  // eslint-disable-next-line no-console
  console.log(valueMonths);

  return (
    <div className="App">
      <InputsChart
        onLabelMonth={addLabelMonth}
        onValueMonth={addValueMonth}
      />
    </div>
  );
};
