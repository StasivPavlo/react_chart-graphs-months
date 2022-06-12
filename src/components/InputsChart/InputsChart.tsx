import React, { useState } from 'react';
import classNames from 'classnames';
import './InputsChart.scss';

interface Props {
  onValueMonth: (value: string) => void;
  onLabelMonth: (value: string) => void;
}

export const InputsChart = React.memo<Props>(({ onValueMonth, onLabelMonth }) => {
  const [labelMonth, setLabelMonths] = useState('');
  const [valueMonth, setValueMonths] = useState('');
  const [valueMonthDirty, setValueMonthsDirty] = useState(false);
  const [valueMonthError, setValueMonthsError] = useState(false);
  const [labelMonthDirty, setLableMonthsDirty] = useState(false);
  const [labelMonthError, setLableMonthsError] = useState(false);

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

    const regExp = /^[ -,0-9]+$/;

    if (!regExp.test(value)) {
      setValueMonthsError(true);
    }
  };

  const submitLable = () => {
    setLableMonthsDirty(true);
    if (!labelMonthError) {
      onLabelMonth(labelMonth);
    }
  };

  const submitValue = () => {
    setValueMonthsDirty(true);
    if (!valueMonthError) {
      onValueMonth(valueMonth);
    }
  };

  return (
    <form
      className="chart__inputs"
      onSubmit={(event) => {
        event.preventDefault();
        submitLable();
        submitValue();
      }}
    >
      <label htmlFor="inputLabelX">
        X axis labels:
        <input
          type="text"
          id="inputLabelX"
          className={classNames('input', { 'input--error': labelMonthError })}
          name="inputLabelX"
          placeholder="September, November..."
          value={labelMonth}
          onBlur={submitLable}
          onChange={(event) => changeLabelMonth(event.target.value)}
        />

        {labelMonthDirty && labelMonthError && (
          <span className="input__message-error">Please input correctly</span>
        )}
      </label>

      <label htmlFor="inputValueY">
        Y axis values:
        <input
          type="text"
          id="inputValueY"
          className={classNames('input', { 'input--error': valueMonthError })}
          name="inputValueY"
          placeholder="1, 2, 3..."
          value={valueMonth}
          onBlur={submitValue}
          onChange={(event) => changeValueMonth(event.target.value)}
        />

        {valueMonthDirty && valueMonthError && (
          <span className="input__message-error">Please input correctly</span>
        )}
      </label>

      <button hidden type="submit">Submit</button>
    </form>
  );
});
