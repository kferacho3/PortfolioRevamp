import cn from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from 'styled-components';
import {
  CarouselBg, CarouselBgDiv,
  CarouselContainer,
  CarouselImg,
  CarouselImgBg,
  CarouselImgWrap,
  CarouselLeftA, CarouselRightA,
  CarouselSVG, CarouselSvgText,
  CarouselText,
  CarouselTextBg,
  CarouselTextWrap
} from "./CarouselElements";

import arrow from './images/bottomImg/arrow.svg';
import bg from './images/bottomImg/bottomDiv.svg';
import svg from './images/bottomImg/bottomSvg.svg';

import "./intro.scss";

export const Prev = styled.div`
 
    background: url(prev);
    background-position: center;
    background-size: cover;
    pointer-events: fill;
    cursor: pointer;
    
`;

export const Next = styled.div`
 
    background: url(next);
    background-position: center;
    background-size: cover;
    pointer-events: fill;
    cursor: pointer;
`;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data, leadingText, isOpen, toggle}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 52;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 10;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <CarouselContainer className="container">

      <CarouselBgDiv >
      <CarouselSVG style = {{ backgroundImage: `url(${svg})`}}>
        <CarouselSvgText>LOCATION</CarouselSvgText>
      </CarouselSVG>


      <CarouselImgBg >
      <CarouselImgWrap to = {data[activeIndex].id} onClick={toggle}>
        <CarouselImg   style = {{ backgroundImage: `url(${data[activeIndex].content.image})`}}/>
</CarouselImgWrap>
      </CarouselImgBg>
        <CarouselTextBg >
        {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                    {item.introline}
                  </button>
                ))}

       

         
         <CarouselLeftA
            type="button"
            onClick={() => handleClick("prev")}
            style = {{ backgroundImage: `url(${arrow})`}}
          >
         
          </CarouselLeftA>
          <CarouselTextWrap to = {data[activeIndex].id}>
          <CarouselText  onClick={toggle} >{data[activeIndex].content.introline}</CarouselText>
          </CarouselTextWrap>
          <CarouselRightA
            type="button"
            onClick={() => handleClick("next")}
            style = {{ backgroundImage: `url(${arrow})`}}
          >
          </CarouselRightA>
        </CarouselTextBg>
    
      </CarouselBgDiv>
    <CarouselBg style = {{ backgroundImage: `url(${bg})`}} />
    </CarouselContainer>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;