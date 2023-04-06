import React, { useCallback, useEffect, useRef, useState } from 'react'
import sliderStyles from './ad.module.css'

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


export const ImageSlider = ({ ads }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const timerRef = useRef(null)

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === ads.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, ads])

  const gotoSlide = (adIndex) => {
    setCurrentIndex(adIndex)
  }

  const urlImageSlider = `/assets/ads/${ads[currentIndex].id}.jpg`
  
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${urlImageSlider})`,
  };
  
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 5000);
  
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [goToNext])
  

  return (
    <div className={sliderStyles.slider}>
      <div style={slideStylesWidthBackground}>
        <div className={`${sliderStyles.contentGrid}`}>
          <h1>{ads[currentIndex].title}</h1>
          <h2>{ads[currentIndex].subtitle}</h2>
          <h3>{ads[currentIndex].description}</h3>
        </div>
      </div>
      <div className={sliderStyles.dotsContainer}>
        {
          ads.map((ad, adIndex) => (
            <div
              className={sliderStyles.dot}
              key={adIndex}
              onClick={() => gotoSlide(adIndex)}>
              ●
            </div>
          ))
        }
      </div>
    </div>
  )
}