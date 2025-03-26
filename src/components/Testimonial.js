import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Testimonial=({review})=>{
    const [index, setIndex] = useState(0);
    function leftClickHandler(){
        if(index -1 < 0){
            setIndex(review.length -1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightClickHandler(){
        if(index + 1 > review.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }    
    }

    function surpriseHandler(){
        let randomindex = Math.floor(Math.random() * review.length);
        setIndex(randomindex);
    }


    return(
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
            <Card review={review[index]}></Card>

            <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
                <button 
                className='cursor-pointer hover:text-violet-500 '
                onClick={leftClickHandler}>
                    <FaChevronLeft  />
                </button>

                <button 
                onClick={rightClickHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FaChevronRight/>
                </button>
            </div>

            <div className='mt-6'>
                <button
                onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'> 
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
export default Testimonial;