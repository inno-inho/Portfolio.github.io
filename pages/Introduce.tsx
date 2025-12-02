// import list from "";
import axios from "axios";
import { IntroduceType } from "@src/Type/TypeBox";
import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from "react";
import Loading from '@components/Loading';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduce(): JSX.Element {
    let [list, setList] = useState<IntroduceType[]>([]);

    const result = useQuery(['Query'], () =>
        axios.get('https://raw.githubusercontent.com/light9639/PortFolio/master/data/data.json')
            .then((res) => { return setList(res.data) }),
    )

    useEffect(() => {
        AOS.init();
    })

    return (
        <React.Fragment>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl">작성된 프로젝트 <span className="text_gradient2">{list.length}개</span></h2>
            <div className="flex flex-wrap -m-3 mt-10 max-w-5xl mx-auto">
                <React.Fragment>
                    {
                        list.map(function (item: IntroduceType, idx: number) {
                            return (
                                <div className="introduce_Wrapper w-full sm:w-1/1 md:w-1/2 flex flex-col px-2 lg:px-3 my-5" key={idx} data-aos="fade-up" data-aos-duration={idx % 2 == 0 ? "1000" : "1150"} data-aos-easing="ease-in-out" data-aos-once="true">
                                    <div className="introduce_box bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl duration-500">
                                        <div
                                            className="bg-cover h-80 introduce_img"
                                            style={{ backgroundImage: "url(" + item.url + ")", backgroundSize: "cover", backgroundPosition: "center" }}
                                        ></div>
                                        <div className="p-4 flex flex-col">
                                            <h3 className="font-semibold mb-4 text-2xl">{item.title}</h3>
                                            <div className="mb-4 text-grey-darker text-base">
                                                <p>{item.contents} </p>
                                            </div>
                                            <div className="border-t border-grey-light pt-4 mb-4 text-grey-darker text-base">
                                                <p>
                                                    <span className="hidden md:inline-block pb-2 md:pb-1 lg:pb-0">기간/인원 :</span> <br className="hidden md:block lg:hidden" />
                                                    <span className="Introduce_Date bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text font-semibold">{item.time}</span> <br className={`${item.time2 ? "block" : "hidden"}`} />
                                                    <span className={`${item.time2 ? "inline-block" : "hidden"} Introduce_Date bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text font-semibold`}>{item.time2}</span> / <span className="font-medium">1인 개발</span>
                                                </p>
                                            </div>
                                            <div className="border-t border-grey-light pt-5 text-1xl text-grey hover:text-red no-underline tracking-wide">
                                                <span className="hidden md:inline-block pb-0 md:pb-1 lg:pb-0">Github 바로가기 : </span> <br className="hidden md:block lg:hidden" />
                                                <a href={item.href1} className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">
                                                    <span>Github 페이지로 이동</span>
                                                </a>
                                            </div>
                                            <div className="pt-5 text-1xl text-grey hover:text-red uppercase no-underline tracking-wide">
                                                <span className="hidden md:inline-block pb-0 md:pb-1 lg:pb-0">프로젝트 바로가기 : </span> <br className="hidden md:block lg:hidden" />
                                                <a href={item.href2} className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">
                                                    <span>포트폴리오 페이지로 이동</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pr-4 py-4 border-t border-grey-light">
                                            <span className="tech_skill hidden lg:inline-block pr-3 py-1 text-sm mr-2">사용기술 :</span>
                                            <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff] mr-2"># {item.use1}</span>
                                            <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff] mr-2"># {item.use2}</span>
                                            <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff]"># {item.use3}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </React.Fragment>
            </div>
        </React.Fragment>
    );
}