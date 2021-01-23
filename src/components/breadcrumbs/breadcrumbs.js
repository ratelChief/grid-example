import { NavLink, useLocation } from 'react-router-dom';

import './breadcrumbs.css';

const isActive = (index, length) => () => index === length;

const getBreadcrumbs = (pathname) => {
  const paths = [];

  pathname.split('/').reduce((prev, current, index) => {
    paths[index] = `${prev}/${current}`;

    return paths[index];
  });

  return paths;
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const paths = getBreadcrumbs(pathname);

  return (
    <section>
      <h2 className="visually-hidden">Breadcrumbs</h2>

      <ul className="breadcrumbs-list">
        {paths.map((part, index) => (
          <li key={part} className="breadcrumb-item">
            <NavLink
              to={`${part}`}
              isActive={isActive(index, paths.length - 1)}
              activeClassName="breadcrumb-item--selected"
            >
              {part}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumbs;
