import axios from "axios";
import { IntroduceType } from "@src/Type/TypeBox"; 
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

// 1. 사용자님께서 제공하신 Loading 컴포넌트 코드를 이 파일 내부에 정의
const Loading = () => (
    <React.Fragment>
        <div className="text-center mx-auto my-10 flex flex-col items-center justify-center h-full min-h-[300px]">
            <div role="status">
                <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-4 text-xl font-medium text-gray-700">데이터를 로드하는 중입니다.</p>
        </div>
    </React.Fragment>
);

export default function Introduce(): JSX.Element {
    // useQuery를 사용하여 데이터 가져오기 (옵션 객체 방식 사용)
    const { 
        data: list, 
        isLoading, 
        isError 
    } = useQuery<IntroduceType[]>({
        queryKey: ['introduceList'], 
        queryFn: () =>
            axios.get('https://raw.githubusercontent.com/inno-inho/Portfolio.github.io/refs/heads/main/data/data.json')
                .then((res) => res.data),
    });

    // AOS 초기화 useEffect 복구
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // 스크롤 시 한 번만 애니메이션 실행
        });
        // list가 로드된 후에 AOS를 갱신
        if (list) {
            AOS.refresh();
        }
    }, [list]); 
    
    // 로딩 및 에러 처리
    if (isLoading) {
        return <Loading />; 
    }
    
    if (isError || !list || !Array.isArray(list)) {
        return <div className="text-center py-20 text-xl font-medium text-red-500">데이터를 불러오는 데 실패했습니다. 다시 시도해 주세요.</div>;
    }

    return (
        <React.Fragment>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl">작성된 프로젝트 <span className="text_gradient2">{list.length}개</span></h2>
            <div className="flex flex-wrap -m-3 mt-10 max-w-5xl mx-auto">
                {list.map(function (item: IntroduceType, idx: number) {
                    console.log("아이템", item);
                    return (
                        <div 
                            className="introduce_Wrapper w-full sm:w-1/1 md:w-1/2 flex flex-col px-2 lg:px-3 my-5" 
                            key={idx} 
                            // AOS 속성 복구
                            data-aos="fade-up" 
                            data-aos-duration={idx % 2 == 0 ? "1000" : "1150"} 
                            data-aos-easing="ease-in-out" 
                            data-aos-once="true"
                        >
                            <div className="introduce_box bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl duration-500">
                                <div
                                    className="bg-cover h-80 introduce_img"
                                    style={{ backgroundImage: "url(" + item.url + "), url('https://placehold.co/800x600/e0e0e0/555555?text=Image+Loading+Failed')", backgroundSize: "cover", backgroundPosition: "center" }}
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
                                            <span className={`${item.time2 ? "inline-block" : "hidden"} Introduce_Date bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text font-semibold`}>{item.time2}</span> / <span className="font-medium">{item.member}</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-grey-light pt-5 text-1xl text-grey hover:text-red no-underline tracking-wide">
                                        <span className="hidden md:inline-block pb-0 md:pb-1 lg:pb-0">Github 바로가기 : </span> <br className="hidden md:block lg:hidden" />
                                        <a href={item.href1} target="_blank" rel="noopener noreferrer" className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">
                                            <span>Github 페이지로 이동</span>
                                        </a>
                                    </div>
                                    <div className="pt-5 text-1xl text-grey hover:text-red uppercase no-underline tracking-wide">
                                        {/* <span className="hidden md:inline-block pb-0 md:pb-1 lg:pb-0">프로젝트 바로가기 : </span> <br className="hidden md:block lg:hidden" />
                                        <a href={item.href2} target="_blank" rel="noopener noreferrer" className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">
                                            <span>포트폴리오 페이지로 이동</span>
                                        </a> */}
                                    </div>
                                    <div className="pr-4 py-4 border-t border-grey-light mt-auto">
                                        <span className="tech_skill hidden lg:inline-block pr-3 py-1 text-sm mr-2">사용기술 :</span>
                                        <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff] mr-2"> {item.use1}</span>
                                        <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff] mr-2"> {item.use2}</span>
                                        <span className="tech_skill_box bg-[#dbeafe] inline-block rounded-md px-3 py-1 text-sm font-semibold text-[#118eff]"> {item.use3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}