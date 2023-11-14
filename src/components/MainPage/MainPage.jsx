import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import css from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <Link to="/" className={css.NavLink}>
            Home
          </Link>
          <Link to="/movies" className={css.NavLink}></Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
