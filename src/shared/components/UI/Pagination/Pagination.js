import React from 'react';
import classes from './Pagination.module.sass';

const calculateMinimumPage = page => {
  return [1, 2].includes(page) ? 1 : page - 2;
};

const calculatePages = (page, minimumPage) => {
  const maximumPage = minimumPage + 5;
  const pages = [];
  for (let page = minimumPage; page < maximumPage; page++) pages.push(page);
  return pages;
};

const Pagination = ({ page, pageHandler }) => {
  const pages = calculatePages(page, calculateMinimumPage(page));

  const buttonClasses = [classes.Item];

  const getPageClasses = pageNumber => {
    const pageClasses = [...buttonClasses];
    if (pageNumber === page) pageClasses.push(classes.Active);
    return pageClasses.join(' ');
  };

  return (
    <div className={classes.Pagination}>
      <div className={classes.Items}>
        {pages.map(page => (
          <p className={getPageClasses(page)} onClick={() => pageHandler(page)}>{page}</p>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
