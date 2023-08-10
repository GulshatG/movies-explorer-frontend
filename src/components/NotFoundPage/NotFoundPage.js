import React from 'react';
import { Link } from 'react-router-dom';
import { deleteFooter, deleteHeader } from '../../utils/deleteElement';

function NotFoundPage() {
  deleteHeader();
  deleteFooter();
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <div className="not-found-page__content">
          <p className="not-found-page__code">404</p>
          <p className="not-found-page__description">Страница не найдена</p>
        </div>
        <Link className="not-found-page__link" to="/">Назад</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
