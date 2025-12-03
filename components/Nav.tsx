import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import React, { useState } from 'react'
import MyLogo from "@src/img/logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { RootState, changeElement } from '../redux/store'

export default function Nav(): JSX.Element {
    const Item = useSelector((state: RootState) => state);
    const ReduxBoolean = Item.boolean.ReduxClass;
    const dispatch = useDispatch();
    const genericHamburgerLine = `h-[0.2rem] w-[1.625rem] my-[3px] rounded-full bg-[#60a5fa] transition ease transform duration-300`;

    return (
        <React.Fragment>
            <header className="text-gray-700 body-font lg:pt-1">
                <div className="w-full lg:container mx-auto flex flex-wrap px-2 py-3 md:px-3 lg:py-5 lg:px-10 flex-row items-center">
                    <Link to="/">
                        <a className="logo flex title-font font-medium items-center text-gray-900 mb-0" href="#" target="_blank">
                            <img src={MyLogo} alt="myLogo" style={{ width: '50px' }} />
                        </a>
                    </Link>
                    <nav className={`${ReduxBoolean == false ? "relative z-[60]" : ""} flex flex-wrap items-center text-base justify-center ml-auto gap-0 -mr-1`}>
                        <Link to="/">{<span className="Nav_text hidden lg:block mr-5">홈</span>}</Link>
                        <Link to="/About">{<span className="Nav_text hidden lg:block mr-5">소개</span>}</Link>
                        <Link to="/Site">{<span className="Nav_text hidden lg:block mr-5">사이트</span>}</Link>
                        <Link to="/introduce">{<span className="Nav_text hidden lg:block mr-5">프로젝트</span>}</Link>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=zergling2565@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Nav_text hidden lg:block mr-5">연락하기
                        </a>

                        <DarkModeToggle></DarkModeToggle>

                        <div className="ml-3 relative hidden lg:block">
                            <a href='https://github.com/inno-inho'>
                                <button type="button" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/218531749?v=4" alt="" />
                                </button>
                            </a>
                        </div>

                        <div className="relative block lg:hidden cursor-pointer z-[60]">
                            <button
                                id='toggleButton'
                                className={`${ReduxBoolean == false ? "bg-transparent fixed top-8 md:top-[2.4rem] right-5 md:right-6" : ""} flex flex-col p-2 rounded-lg justify-center items-center group lg:border lg:border-blue-200`}
                                onClick={() => { dispatch(changeElement()) }}
                            >
                                <div
                                    className={`${genericHamburgerLine} ${ReduxBoolean == false
                                        ? "rotate-45 translate-y-[0.575rem] bg-white"
                                        : ""
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${ReduxBoolean == false ? "opacity-0" : ""
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${ReduxBoolean == false
                                        ? "-rotate-45 -translate-y-[0.575rem] bg-white"
                                        : ""
                                        }`}
                                />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}