
import React, { useState } from "react";
import PropTypes from "prop-types";
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import cn from "classnames";

import "./intro.scss";

export const Prev = styled(LinkS)`
 
    background: url('./images/uparrow.png');
    background-position: center;
    background-size: cover;
    pointer-events: fill;
    cursor: pointer;
    
`;

export const Next = styled(LinkS)`
 
    background: url('./images/downarrow.png');
    background-position: center;
    background-size: cover;
    pointer-events: fill;
    cursor: pointer;
`;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data, leadingText }) => {
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
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <Prev
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
           
          >
         
          </Prev>

          <div className="carousel">
            <div className="leading-text">
              <p>{leadingText}</p>
            </div>
            <div className="slides">
              <div className="carousel-inner">
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
              </div>
            </div>
          </div>

          <Next
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
          </Next>
        </div>
        <div className="content">
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
          <img className="img2"
            src={data[activeIndex].content.image2}
            alt={data[activeIndex].content.introline}
          />
          <p style={{ color:`#000000` }}  >{data[activeIndex].content.copy}</p>
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;