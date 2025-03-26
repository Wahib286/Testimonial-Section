import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaGem} from 'react-icons/fa';

const Card=({review})=>{
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image} alt="" />
                <div className="absolute rounded-full w-[140px] h-[140px] z-[-10] top-[-6px] left-[10px] bg-violet-500"></div>
            </div>

            <div>
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

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
                <button>
                    +
                </button>

                <button>
                    +
                </button>
            </div>

            <div>
                <button> 
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
export default Card;