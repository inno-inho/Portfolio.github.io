import axios from "axios";
import { SiteType } from "@src/Type/TypeBox";
import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// export default function Site(): JSX.Element {
//     let [list, setList] = useState<SiteType[]>([]);

//     const result = useQuery(['Query'], () =>
//         axios.get('https://raw.githubusercontent.com/light9639/PortFolio/master/data/siteData.json')
//             .then((res) => { return setList(res.data) }),
//     )

//     useEffect(() => {
//         AOS.init();
//     })

export default function Site(): JSX.Element {
    // useQuery로 데이터 가져오기
    const { data: list, isLoading, isError } = useQuery<SiteType[]>({
        queryKey: ['siteList'],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/inno-inho/Portfolio.github.io/refs/heads/main/data/siteData.json")
                .then((res) => res.data),
    });

    useEffect(() => {
        AOS.init();
    }, []); // 한 번만 부를거임

    if (isLoading){
        return <div>로딩중 ...</div>
    }
    if(isError || !list){
        return <div>데이터를 불러오는데 실패했습니다</div>
    }

    return (
        <React.Fragment>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl"><span className="text_gradient2">Inno's</span>Sites</h2>
            <div className="flex flex-wrap -m-3 mt-10 max-w-5xl mx-auto">
                <React.Fragment>
                    {
                        list.map(function (item, idx: number) {
                            return (
                                <div className="w-full sm:w-1/1 md:w-1/2 flex flex-col px-2 md:px-2 lg:px-3 my-5" key={idx} data-aos="fade-up" data-aos-duration={idx % 2 == 0 ? "1000" : "1150"} data-aos-easing="ease-in-out" data-aos-once="true">
                                    <div className="introduce_box bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col hover:scale-105 hover:shadow-2xl duration-500">
                                        <div
                                            className="bg-cover h-80"
                                            style={{ backgroundImage: "url(" + item.url + ")", backgroundSize: "cover", backgroundPosition: "center" }}
                                        ></div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h3 className="font-semibold mb-4 text-2xl">{item.title}</h3>
                                            <div className="mb-4 text-grey-darker text-base flex-1">
                                                <p className="px-3 pt-2">{item.contents}</p>
                                            </div>
                                            <div className="border-t border-grey-light pt-7 pb-3 text-1xl text-grey hover:text-red no-underline tracking-wide">
                                                <a href={item.href} className="Blue_box px-5 py-2.5 rounded-md ">
                                                    <span className="text-white text-base md:text-lg line-clamp-1">{item.title}へ移動</span>
                                                </a>
                                            </div>
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