import React, { Fragment } from 'react';
import Header from '../components/Header';
import './css/Principal.css'
import ArticlesLeft from '../components/ArticlesLeft';
import ArticleMiddle from '../components/ArticleMiddle';

const Principal = () => {
  return (
    <Fragment>
      <Header />
      <main className="articles">
        <ArticlesLeft />
        <ArticleMiddle />
        <section className="articles__right">
        </section>
      </main>
    </Fragment>
  )
}

export default Principal;