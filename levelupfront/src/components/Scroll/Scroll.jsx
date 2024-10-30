// ScrollToTopButton.js
import React, { useState, useEffect } from 'react'
import styles from './Scroll.module.css' // 스타일링 파일을 별도로 작성할 수도 있습니다.

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(true)

    // 페이지 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="scrollToTop">
            {isVisible && (
                <button onClick={scrollToTop} className={styles.scrollButton}>
                    <i class="bx bxs-up-arrow"></i>
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton
