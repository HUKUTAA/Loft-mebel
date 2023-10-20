import React from 'react'
import kitchen from "../assets/img/kitchen-icon.png"
import bedroom from "../assets/img/bedroom-icon.png"
import livingroom from "../assets/img/livingroom-icon.png"
import closet from "../assets/img/closet-icon.png"
import office from "../assets/img/office-icon.png"
import childrensroom from "../assets/img/childrensroom-icon.png"
export default function Menu() {
    return (
        <div className='menu'>
            <div className='container'>
                <div className='menu-content'>
                    <a href='#' className='menu-item'>
                        <img src={kitchen} alt="" />
                        <span className='menu-text'>Кухни</span>
                    </a>
                    <a href='#' className='menu-item'>
                        <img src={bedroom} alt="" />
                        <span className='menu-text'>Спальни</span>
                    </a>
                    <a href='#' className='menu-item'>
                        <img src={livingroom} alt="" />
                        <span className='menu-text'>Гостинные</span>
                    </a>
                    <a href='#' className='menu-item'>
                        <img src={closet} alt="" />
                        <span className='menu-text'>Прихожие</span>
                    </a>
                    <a href='#' className='menu-item'>
                        <img src={office} alt="" />
                        <span className='menu-text'>Офисная мебель</span>
                    </a>
                    <a href='#' className='menu-item'>
                        <img src={childrensroom} alt="" />
                        <span className='menu-text'>Детская</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
