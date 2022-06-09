import React, { useState } from 'react';

interface Props {
  onValueMonth: (value: string) => void;
  onLabelMonth: (value: string) => void;
}

export const InputsChart: React.FC<Props> = ({ onValueMonth, onLabelMonth }) => {
  const [labelMonth, setLabelMonths] = useState('');
  const [valueMonth, setValueMonths] = useState('');
  const [valueMonthDirty, setValueMonthsDirty] = useState(false);
  const [valueMonthError, setValueMonthsError] = useState(true);
  const [labelMonthDirty, setLableMonthsDirty] = useState(false);
  const [labelMonthError, setLableMonthsError] = useState(true);

  const changeLabelMonth = (label: string) => {
    setLableMonthsDirty(false);
    setLableMonthsError(false);
    setLabelMonths(label);

    if (label.trim().length === 0) {
      setLableMonthsError(true);
    }
  };

  const changeValueMonth = (value: string) => {
    setValueMonthsDirty(false);
    setValueMonthsError(false);
    setValueMonths(value);

    const re = /^[,0-9]+$/;

    if (!re.test(value)) {
      setValueMonthsError(true);
    }
  };

  const inputBlure = (name: string) => {
    switch (name) {
      case 'inputLabelX':
        setLableMonthsDirty(true);
        if (!labelMonthError) {
          onLabelMonth(labelMonth);
        }

        break;

      case 'inputValueY':
        setValueMonthsDirty(true);
        if (!valueMonthError) {
          onValueMonth(valueMonth);
        }

        break;

      default:
    }
  };

  return (
    <>
      <label htmlFor="inputLabelX">
        X
        <input
          type="text"
          id="inputLabelX"
          name="inputLabelX"
          placeholder="September, November..."
          value={labelMonth}
          onBlur={(event) => inputBlure(event.target.name)}
          onChange={(event) => changeLabelMonth(event.target.value)}
        />

        {labelMonthDirty && labelMonthError && (
          <span style={{ color: 'red' }}>Please input correctly</span>
        )}
      </label>

      <label htmlFor="inputValueY">
        Y
        <input
          type="text"
          id="inputValueY"
          name="inputValueY"
          placeholder="1, 2, 3..."
          value={valueMonth}
          onBlur={(event) => inputBlure(event.target.name)}
          onChange={(event) => changeValueMonth(event.target.value)}
        />

        {valueMonthDirty && valueMonthError && (
          <span style={{ color: 'red' }}>Please input correctly</span>
        )}
      </label>
    </>
  );
};
