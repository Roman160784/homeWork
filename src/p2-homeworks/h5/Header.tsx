import React from 'react'
import { NavLink, useMatch } from "react-router-dom"
import s from './Header.module.css'

function Header() {

  let match = useMatch('/PRE_JUNIOR')
  return (
    <div className={s.main}>
      
        <div className={s.navLinks}>
          <NavLink to={'/'} className={(NavLink) => (match? s.active : s.Navlink) } >Main page</NavLink>
          <NavLink to={'/hw1'} className={(NavLink) => (match? s.active : s.Navlink) } >Home task 1</NavLink>
          <NavLink to={'/hw2'} className={(NavLink) => (match? s.active : s.Navlink) }>Home task 2</NavLink>
          <NavLink to={'/hw3'} className={(NavLink) => (match? s.active : s.Navlink) }>Home task 3</NavLink>
          <NavLink to={'/hw4'} className={(NavLink) => (match? s.active : s.Navlink) }>Home task 4</NavLink>
        </div>
      
    </div>
  )
}

export default Header
