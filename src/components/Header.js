import React, { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../media/media';
import { IoMenu } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
const HeaderWrap = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10000;
    a{
        text-decoration: none;
    }
    
    .logo{
        font-weight: 700;
    }
    @media ${media.xxs}{
       
        .menu-btn{
            display: inline-block;
            position: absolute;
            top: auto;
            right: 0;
            margin-right: 20px;
        }
        .nav-wrap{
            .delimeter{
                display: none;
            }
            position: absolute;
            top: 100%;
            
            right: 0;
            height: 100vh;
            width: 50%;
            background: #000;
           .nav{
               display: flex;
               flex-direction: column;
               .nav_item{
                   margin-bottom: 2em;
               }
            }
        }
    }
    @media ${media.lg}{
        .menu-btn{
            display: none;
        }
        .nav-wrap{
            position: unset;
            top: 0;
            height: unset;
            width: unset;
            background: unset;
        }
        .nav{
            .nav_item{
                margin-bottom: unset !important;
            }
            .delimeter{
                display: block;
            }
            display: flex;
            justify-content: flex-end;
            flex-direction: row !important;
            .nav_item{
                margin-left: 2.5em;
                font-size: 0.8rem;

            }
        }
    }
    
`
export default function Header() {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    const toggleMobileMenu = useCallback(() => {
        setIsShowMobileMenu(!isShowMobileMenu);
    })
    return (
        <HeaderWrap id="header" className="header bg-secondary text-primary">
            <section className="header-bar">
               <div className="container">
                    <div className="py-2 row d-flex justify-content-between align-items-center">
                        <div className="col-6 col-md-3 text-start">
                            <div className="logo ">
                                 What Happened
                            </div>
                        </div>
                        <div className={`col-9 ${isShowMobileMenu ? 'isMobile' : "d-none"} nav-wrap d-lg-block`}>
                            <nav className="nav">
                                <div className="nav_item"><NavLink to="#">INTRODUCTION</NavLink></div>
                                <div className="nav_item"><NavLink to="#">SOLUTION</NavLink></div>
                                <div className="nav_item"><NavLink to="#">RATE PLAN</NavLink></div>
                                <div className="nav_item delimeter">|</div>
                                <div className="nav_item"><NavLink to="#">LOGIN</NavLink></div>
                                <div className="nav_item"><NavLink to="#">APPLY FOR FREE USE</NavLink></div>
                            </nav>
                        </div>
                        <span className="menu-btn col-1" role="button" onClick={toggleMobileMenu}>
                        {isShowMobileMenu ? <MdExitToApp size={25} /> : <IoMenu className="" size={25}/>}
                        </span>
                    </div>
                   
               </div>
            </section>
            
        </HeaderWrap>
    )
}
