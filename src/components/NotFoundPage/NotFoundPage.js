import React from 'react';
import {Link} from 'react-router-dom';
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from '../../utils/deleteElement';

function NotFoundPage() {
  React.useEffect(() => {
    hideHeader();
    hideFooter();
    return () => {
      showHeader();
      showFooter();
    };
  }, []);
  return (
      <div className="not-found-page">
        <div className="not-found-page__container">
          <div className="not-found-page__content">
            <p className="not-found-page__code">404</p>
            <p className="not-found-page__description">Страница не найдена</p>
          </div>
          <Link className="not-found-page__link animate-opacity"
                to="/">Назад</Link>
        </div>
      </div>
  );
}

export default NotFoundPage;
