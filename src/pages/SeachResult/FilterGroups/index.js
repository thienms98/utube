import { useState, useEffect } from 'react';
import { filterGroups } from '../config';

import classNames from 'classnames/bind';
import styles from './FilterGroups.module.scss';
const cx = classNames.bind(styles);

export default function FilterGroups() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterChoices, setFilterChoices] = useState(() => {
    return filterGroups.map((group) => {
      return { title: group.title, filter: null };
    });
  });

  useEffect(() => {
    const close = (e) => {
      const classList = Object.keys(styles).map((key) => styles[key]);
      if (!classList.includes(e.target.classList.value)) {
        setFilterVisible(false);
      }
    };
    window.addEventListener('click', close);

    return () => {
      window.removeEventListener('click', close);
    };
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('toggler', { active: filterVisible })}>
        <div
          className={cx('btn')}
          onClick={() => {
            setFilterVisible((prev) => !prev);
          }}
        >
          Filter
        </div>
      </div>
      <div className={cx('filter-groups', { hidden: !filterVisible })}>
        {filterChoices &&
          filterGroups.map(({ filters, title }, index) => {
            const groupIndex = index;
            return (
              <div className={cx('filter-group')} key={title}>
                <div className={cx('title')}>{title}</div>
                <ul>
                  {filters.map((filter) => {
                    const selected = filter.label === filterChoices.find((f) => f.title === title).filter;
                    return (
                      <li
                        className={cx({ selected: selected })}
                        key={filter.label}
                        onClick={() => {
                          if (filterChoices[groupIndex].filter === filter.label)
                            setFilterChoices((prev) => {
                              const next = [...prev];
                              next[groupIndex].filter = null;
                              return next;
                            });
                          else
                            setFilterChoices((prev) => {
                              const next = [...prev];
                              next[groupIndex].filter = filter.label;
                              return next;
                            });
                        }}
                      >
                        {filter.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}
