import React, {useState, useEffect} from 'react';

import { Home } from './components/Home';
import {Todo} from "./components/Todo";

export const View = () => {
    const [Screen, setScreen] = useState(1);
    function change(){
        console.log("we are trying to change View");
        // setScreen(1-Screen);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setScreen(1-Screen);
        console.log('You clicked submit.');
    }
    
    window.onclick = function(event) {
        var target = event.target ;
        if(target.matches('.clickableBtn')) {
            var clickedEle = document.activeElement.id ;
            var ele = document.getElementById(clickedEle);
            alert(ele.text);
        }
    }

    return (
        <div style={{height:"100px"}}>
            <div style={{backgroundColor:"#2D2D2D"}} className='overlap-hidden flex flex-col items-center justify-center'>
                <div style={{borderColor:"black"}} className='w-full text-center p-4 border-b-2 border-black'>
                    {
                        Screen == 1?
                        <h2 className="whitespace-nowrap truncate text-white mx-auto text-xl font-light ">Problem Of The Day</h2>
                        :
                        <h2 className="whitespace-nowrap truncate text-white mx-auto text-xl font-light ">To Do List</h2>
                    }

                </div>
            </div>
        {
          Screen == 1?
          <Home/>
          :
          <Todo/>
        }
            <div style={{backgroundColor:"#1A1A1A"}} className="flex justify-center space-x-4 p-4">
                <form onSubmit={handleSubmit}>
                {
                    Screen == 1?
                    <button type="submit" className="text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-500 dark:border-gray-600">
                        To-Do List
                    </button>
                    :
                    <button type="submit" className="text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-500 dark:border-gray-600">
                        POTD's
                    </button>
                }
                </form>
            </div>
        </div>
  )


}
