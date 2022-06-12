import React, { useCallback, useState } from 'react';
import { InputsChart } from './components/InputsChart';
import { MonthChart } from './components/MonthChart';
import { RadioButtonsChart } from './components/RadioButtonsChart';
import './App.scss';

export const App: React.FC = () => {
  const [labelMonths, setLabelMonths] = useState<string[]>([]);
  const [valueMonths, setValueMonths] = useState<number[]>([]);
  const [typeChart, setTypeChart] = useState('bar');

  const addLabelMonth = useCallback((label: string) => {
    const months = label.split(',').map((month: string) => month.trim());

    setLabelMonths(months);
  }, []);

  const addValueMonth = useCallback((value: string) => {
    const months: number[] = value.split(',').map((month: string) => Number(month.trim()));

    if (months.length > labelMonths.length && labelMonths.length > 0) {
      setValueMonths(months.slice(0, labelMonths.length));
    } else {
      setValueMonths(months);
    }
  }, [labelMonths]);

  return (
    <div className="App">
      <InputsChart
        onLabelMonth={addLabelMonth}
        onValueMonth={addValueMonth}
      />

      <MonthChart
        labels={labelMonths}
        values={valueMonths}
        typeChart={typeChart}
      />

      <RadioButtonsChart
        onTypeChart={setTypeChart}
        typeChart={typeChart}
      />
    </div>
  );
};
