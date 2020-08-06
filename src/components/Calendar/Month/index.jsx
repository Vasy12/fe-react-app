import React from 'react';
import PropTypes from 'prop-types';
import { monthType } from '../../../common/my-prop-types';
import Week from './../Week';
import { getWeeksInMonth, getWeek } from 'date-fns';

function Month(props) {
  const { year, month } = props;

  const getWeeks = () => {
    const date = new Date(year, month, 1);
    const firstWeek = getWeek(date);
    const weeksInMonth = getWeeksInMonth(date);

    const weeks = [];
    for (let i = firstWeek; i < firstWeek + weeksInMonth; ++i) {
      weeks.push(<Week key={`${year}-${i}`} year={year} week={i} />);
    }

    return weeks;
  };

  return <div>{getWeeks()}</div>;
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: monthType,
};

Month.defaultProps = {};

export default Month;
