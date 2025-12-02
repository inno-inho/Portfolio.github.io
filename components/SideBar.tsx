import React, { useState } from 'react'
import { RootState, changeElement } from '../redux/store'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import data from "../data/sidebarData";

export default function SideBar(): JSX.Element {
    let [toggle, setToggle] = useState(true);
    const Item = useSelector((state: RootState) => state);
    const ReduxBoolean = Item.boolean.ReduxClass;
    const dispatch = useDispatch();

    return (
        <div className={`${ReduxBoolean ? "opacity-0 -z-10" : "opacity-100 z-50"} w-screen h-screen fixed left-0 top-0 bg-opacity-75 bg-slate-800 block lg:hidden duration-700`} >
            <div className="w-screen h-screen bg-slate-900 shadow border border-slate-900">
                <ul className="text-left mt-48">
                    {
                        data.map(function (item) {
                            return (
                                <li className="block cursor-pointer my-16" key={item.number}>
                                    <Link to={item.href} onClick={() => dispatch(changeElement())} className='flex items-center justify-center text-white hover:text-[#118eff] text-2xl font-semibold'>
                                        {item.contents}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li className="block cursor-pointer my-16">
                        <a href="https://open.kakao.com/o/s6c0Jpxe" onClick={() => dispatch(changeElement())} className='flex items-center justify-center text-white hover:text-[#118eff] text-2xl font-semibold'>
                            연락하기
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}