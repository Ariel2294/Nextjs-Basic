import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import style from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.container}>
      <Navbar />

      {children}

      <footer className={'container-foot'}>hi gente</footer>
      <style jsx>
        {`
          .container-foot {
            background: red;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
