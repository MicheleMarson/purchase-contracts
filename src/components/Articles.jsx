import React from 'react'
import { articles } from '../mock'

const Articles = () => {
  console.log(articles.map(article => article.status))
  return (
    <section className="articles">
      <h3>Artikli</h3>
      <div className="articles__article">
        {articles.map(article => (
          <div className={`articles__box ${article.status == "KREIRANO" ? "kreirano" : article.status == "ISPORUČENO" ? "isporučeno" : "naručeno"}`} key={article.id}>
            <p>{article.naziv}</p>
            <p>{article.dobavljač}</p>
            <p className='status'>{article.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Articles