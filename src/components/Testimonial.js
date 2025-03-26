import React, { useState } from "react";
import Card from "./Card";
import {FaQuoteLeft, FaQuoteRight, FaGem} from 'react-icons/fa';
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
        <div>
            <Card review={review[index]}></Card>

            <div>
                <FaQuoteLeft/>
            </div>

            <div>
                {review.text}
            </div>

            <div>
                <FaQuoteRight/>
            </div>

            <div>
                <button 
                onClick={leftClickHandler}
                className="cursor-pointer">
                    <FaChevronLeft  />
                </button>

                <button 
                onClick={rightClickHandler}
                className="cursor-pointer">
                    <FaChevronRight/>
                </button>
            </div>

            <div>
                <button
                onClick={surpriseHandler}> 
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
export default Testimonial;