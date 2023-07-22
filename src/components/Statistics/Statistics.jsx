import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={css.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
