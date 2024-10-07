import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Mypage } from './Mypage/Mypage'
import { Main } from './Main/Main'

export const Home = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mypage/*" element={<Mypage />} />
            </Routes>
        </div>
    )
}
