
import React, { useRef,useState } from "react";
import styles from "./_home.module.scss"

const Swiper = ()=>{
const swiperPost = [
    {
        id: 1,
        post:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsliderFirstImage.222eee57.png&w=1200&q=75",

    },
    {
        id: 2,
        post:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        post:"https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:4,
        post:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
    }
];
const [currentIndex, setCurrentIndex] = useState(0);
const touchStartEx = useRef(0);
const touchEndEx = useRef(0);

const handleTouchStart = (e)=>{
    touchStartEx.current = e.touches[0].clientX
};
const handleTouchMove = (e)=>{
    touchEndEx.current = e.touches[0].clientX
}
const handleTouchEnd = ()=>{
    if (touchStartEx.current - touchEndEx.current > 50) {
        setCurrentIndex((prevIndex)=>(
            prevIndex + 1
         ) % swiperPost.length)
    }
    else if (touchStartEx.current - touchEndEx.current < -50) {
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + swiperPost.length) % swiperPost.length)
    }
}
const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperPost.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + swiperPost.length) % swiperPost.length);
  };
return(
    <div
    className={styles.swiperContainer}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
  <div className={styles.slideInner}>
  <button className={styles.navButton} onClick={goToPrevSlide}>&lt;</button>
          <div
        className={styles.swiperWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {swiperPost.map((item) => (
          <div className={styles.swiperSlide} key={item.id}>
            <img src={item.post} alt={`Slide ${item.id}`} />
          </div>
        ))}
      </div>
      <button className={styles.navButton} onClick={goToNextSlide}>
        &gt; {/* Right Arrow */}
      </button>

  </div>
  <div className={styles.slideDesc}>
<h1>Small touches, big changes.</h1>
<p>We work to make every corner of your home bring you happiness. With you since 2019!</p>
  </div>
    </div>


)
}
export default Swiper