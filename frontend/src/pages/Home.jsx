import React, {addEventListener, useEffect} from 'react'
import { Icon } from '@iconify/react';




export const Home = () => {
  return (
    
// <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen min-w-screen-sm lg:py-0'>
<div style={{backgroundColor:"#2D2D2D"}} className='overlap-hidden flex flex-col items-center justify-center'>
        <div className='w-full text-center p-4 border-b-2 border-black'>
            <h2 className="whitespace-nowrap truncate text-white mx-auto text-xl font-light ">Problem Of The Day</h2>
        </div>

        <div style={{backgroundColor:"#1A1A1A"}} className="flex flex-col w-full p-5 text-gray-800">
            <ul className="flex flex-col divide-gray-300">
                <li className="flex flex-col py-3 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/305317853_616467910000160_3824851731065368025_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=y14_hFgVbZAAX9Rw6ip&_nc_ht=scontent.flko9-1.fna&oh=00_AfDj0Og6CFfsQDSosILypgsodbW20bm_IZ2K7gp0_BGsdQ&oe=64C306DB" alt="Polaroid camera" />
                        <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                            <div class="items-head">
                                <p className='text-lg text-white font-bold'>Leetcode</p>
                                <hr/>
                            </div>
                            <div class="items-body">
                                <div class="items-body-content">
                                    <a id="leetCode_potd_ref" class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" href="#" target="_blank"><p  id="leetCode_potd" className='whitespace-nowrap truncate w-full'>Loading..</p></a>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="flex flex-col py-3 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://cdn-1.webcatalog.io/catalog/geeksforgeeks/geeksforgeeks-icon-filled-256.webp?v=1675596635395" alt="Polaroid camera" />
                        <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                            <div class="items-head">
                                <p className='text-lg text-white font-bold'>Geeks For Geeks</p>
                                <hr/>
                            </div>
                            <div class="items-body">
                                <div class="items-body-content">
                                    <a class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" id="gfg_potd_ref" href="#" target="_blank"><p  id="gfg_potd" className='whitespace-nowrap truncate w-full'>Loading..</p></a>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-3 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-10 h-10 border-transparent rounded outline-none bg-gray-500" src="https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/296147592_2018745671662587_6096738208180601413_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VB2ZBZkk3VEAX8F-Kz6&_nc_ht=scontent.flko9-1.fna&oh=00_AfBmF3ZhK-nAaOzrtYqhf2Ip1Vo5_YHZHXtgcB3JuJZXGw&oe=64C41DEB" alt="Polaroid camera" />
                        <div className="overflow-hidden flex flex-col justify-between w-full pb-4">
                            <div class="items-head">
                                <p className='text-lg text-white font-bold'>Coding Ninjas</p>
                                <hr/>
                            </div>

                            <div class="items-body">
                                <div class="items-body-content">
                                    <a id="ninjas_potd_ref" class="whitespace-nowrap truncate text-base text-white hover:text-blue-600" href="#" target="_blank"><p  id="ninjas_potd" className='whitespace-nowrap truncate w-full'>Loading..</p></a>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                            <div class="items-body">
                                <div class="items-body-content">
                                    <a id="ninjas_potd2_ref" style={{font:"#F4F4F5"}} class="text-base text-white hover:text-blue-600" href="#" target="_blank"><p id="ninjas_potd2" className='whitespace-nowrap truncate w-full'>Loading..</p></a>
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
