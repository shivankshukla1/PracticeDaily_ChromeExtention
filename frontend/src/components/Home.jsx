import React, {useState, useEffect} from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const [LC, setLC] = useState("Loading..");
    const [LClink, setLClink] = useState("https://leetcode.com/problemset/all/");
    const [GFG, setGFG] = useState("Loading..");
    const [GFGlink, setGFGlink] = useState("https://www.geeksforgeeks.org/");
    const [CNa, setCNa] = useState("Loading..");
    const [CNalink, setCNalink] = useState("https://www.codingninjas.com/");
    const [CNb, setCNb] = useState("Loading..");
    const [CNblink, setCNblink] = useState("https://www.codingninjas.com/");

    let today = new Date();
    var date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();
    
    const CodingNinjas_API_ENDPOINT = `https://api.codingninjas.com/api/v3/public_section/potd/problem_list?date=${date}`;
    const API = "http://localhost:5000/getData";
    


    const ninjaAPI = () => {
        try {
            fetch(CodingNinjas_API_ENDPOINT)
            .then(data => data.json())
            .then(ninja =>{
                let ninja_name = ninja.data.details.MODERATE.problem.name;
                const ninja_difficulty = ninja.data.details.MODERATE.problem.difficulty;
                setCNa(`${ninja_name}`);
                setCNalink(`https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty}`);

                let ninja_name2 = ninja.data.details.HARD.problem.name;
                const ninja_difficulty2 = ninja.data.details.HARD.problem.difficulty;            
                setCNb(`${ninja_name2}`);
                setCNblink(`https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty2}`);
                
                window.localStorage.setItem("CodingNinjasA", `${ninja_name}`);
                window.localStorage.setItem("CodingNinjasB", `${ninja_name2}`);
                window.localStorage.setItem("CodingNinjasAref",  `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty}`);
                window.localStorage.setItem("CodingNinjasBref", `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty2}`);
                
            });
        } catch (error) {
            console.log("Error in CN api");
        }
    }
    const Lc_GfgAPI = () => {
        try {
            fetch(API)
            .then(data => data.json())
            .then(data =>{
                const GFG_url = data.GFG.ref;
                let GFG_name = data.GFG.title;
                setGFG(`${GFG_name}`);
                setGFGlink(GFG_url);
                window.localStorage.setItem("GeeksForGeeks", `${GFG_name}`);
                window.localStorage.setItem("GeeksForGeeksref", GFG_url);
                

                const leetCode_link = data.LC.ref;
                let leetCode_name = data.LC.title;
                setLC(`${leetCode_name}`);
                setLClink(`${leetCode_link}`);
                window.localStorage.setItem("LeetCode", `${leetCode_name}`);
                window.localStorage.setItem("LeetCoderef", `${leetCode_link}`);
            });
        } catch (error) {
            console.log("Erro in LC or GFG api");
        }
    }

    
    useEffect(() => {
        try {
            const savedDate = window.localStorage.getItem("savedDate");
            // console.log(date, savedDate);
            if (savedDate === date) {
                setLC(window.localStorage.getItem("LeetCode"));
                setLClink(window.localStorage.getItem("LeetCoderef"));
                setGFG(window.localStorage.getItem("GeeksForGeeks"));
                setGFGlink(window.localStorage.getItem("GeeksForGeeksref"));
                setCNa(window.localStorage.getItem("CodingNinjasA"));
                setCNalink(window.localStorage.getItem("CodingNinjasAref"));
                setCNb(window.localStorage.getItem("CodingNinjasB"));
                setCNblink(window.localStorage.getItem("CodingNinjasBref"));
            }else{
                window.localStorage.setItem("savedDate", date);
            }

            ninjaAPI();
            Lc_GfgAPI();

          } catch (error) {      
            console.log("We got an error", error);
          }
    }, []);

    return (
        <div style={{backgroundColor:"#2D2D2D"}} className='overlap-hidden flex flex-col items-center justify-center'>
            {/* <div style={{borderColor:"black"}} className='w-full text-center p-4 border-b-2 border-black'>
                <h2 className="whitespace-nowrap truncate text-white mx-auto text-xl font-light ">Problem Of The Day</h2>
            </div> */}

            <div style={{backgroundColor:"#1A1A1A"}} className="flex flex-col w-full p-5 text-gray-800">
                <ul className="flex flex-col divide-gray-300 ">
                    <li className="flex flex-col py-3 sm:flex-row sm:justify-between py-2">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/305317853_616467910000160_3824851731065368025_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=y14_hFgVbZAAX9Rw6ip&_nc_ht=scontent.flko9-1.fna&oh=00_AfDj0Og6CFfsQDSosILypgsodbW20bm_IZ2K7gp0_BGsdQ&oe=64C306DB" alt="Polaroid camera" />
                            <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                                <div class="items-head">
                                    <p className='text-lg text-white font-bold'>Leetcode</p>
                                    <hr/>
                                </div>
                                <div class="items-body">
                                    <div class="items-body-content">
                                        <a class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" href={LClink} target="_blank"><p className='whitespace-nowrap truncate w-full'>{LC}</p></a>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-col py-3 sm:flex-row sm:justify-between py-2">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://cdn-1.webcatalog.io/catalog/geeksforgeeks/geeksforgeeks-icon-filled-256.webp?v=1675596635395" alt="Polaroid camera" />
                            <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                                <div class="items-head">
                                    <p className='text-lg text-white font-bold'>Geeks For Geeks</p>
                                    <hr/>
                                </div>
                                <div class="items-body">
                                    <div class="items-body-content">
                                        <a class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" href={GFGlink} target="_blank"><p  className='whitespace-nowrap truncate w-full'>{GFG}</p></a>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col py-3 sm:flex-row sm:justify-between py-2">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/296147592_2018745671662587_6096738208180601413_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VB2ZBZkk3VEAX8F-Kz6&_nc_ht=scontent.flko9-1.fna&oh=00_AfBmF3ZhK-nAaOzrtYqhf2Ip1Vo5_YHZHXtgcB3JuJZXGw&oe=64C41DEB" alt="Polaroid camera" />
                            <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                                <div class="items-head">
                                    <p className='text-lg text-white font-bold'>Coding Ninjas</p>
                                    <hr/>
                                </div>

                                <div class="items-body">
                                    <div class="items-body-content">
                                        <a class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" href={CNalink} target="_blank"><p  className='whitespace-nowrap truncate w-full'>{CNa}</p></a>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div class="items-body">
                                    <div class="items-body-content">
                                        <a style={{font:"#F4F4F5"}} class="text-base text-white hover:text-blue-600" href={CNblink} target="_blank"><p className='whitespace-nowrap truncate w-full'>{CNb}</p></a>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> 
            </div>

        </div>
  )
}
