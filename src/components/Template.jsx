import React from 'react'
import { Link} from 'react-router-dom'

const Template = ({children}) => {
  return (
    <div className='container'>
      <nav className='container__nav'>
          <Link to="/">Home</Link>
          {/* <Link to="/articles">Articles</Link> */}
      </nav>
      <section className='container__section'>
        {children} 
      </section>
      {/* <footer className='footer'>
        <h3>Created By Mihaela Marson</h3>
        <div className='footer__links'>
          <a href='/'>Github</a>
          <a href='/'>Linkedin</a>
        </div>
      </footer> */}
    </div>
  )
}

export default Template