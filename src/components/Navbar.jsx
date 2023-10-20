import React from 'react'
import logo from "../assets/img/logo.png"
import search from "../assets/img/search.png"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <div className='search'>
                <img src={search} alt="" />
                <input type="text" placeholder='Поиск' />
            </div>
            <div className='navbar-icons'>
                <span><i className="bi bi-heart"></i></span>
                <span><i className="bi bi-bag"></i></span>
                <span><i className="bi bi-person"></i></span>
            </div>
        </div>
      </div>
    </div>
  )
}
