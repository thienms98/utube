import { useState } from 'react';
import { filterGroups } from '../config';

import classNames from 'classnames/bind';
import styles from './FilterGroups.module.scss';
const cx = classNames.bind(styles);

export default function FilterGroups({ visible }) {
  const [filterChoices, setFilterChoices] = useState(() => {
    return filterGroups.map((group) => {
      return { title: group.title, filter: null };
    });
  });

  return (
    <div className={cx('filter-groups', { hidden: !visible })}>
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
  );
}
