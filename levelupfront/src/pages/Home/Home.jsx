import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Mypage } from './Mypage/Mypage'
import { Main } from './Main/Main'
// import { Tradepost } from './../Admin/Tradepost/Tradepost'
import { Tradepost } from './Tradepost/Tradepost'
import { Timepart } from './Timepart/Timepart'
import { Notice } from './Notice/Notice'
import { Faq } from './Customerservice/Faq/Faq'
import { Customerservice } from './Customerservice/Customerservice'
export const Home = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mypage/*" element={<Mypage />} />
                <Route path="/tradepost/*" element={<Tradepost />}></Route>
                <Route path="/parttime/*" element={<Timepart />}></Route>
                <Route path="/notice/*" element={<Notice />}></Route>
                <Route
                    path="/customerservice/*"
                    element={<Customerservice />}
                ></Route>
            </Routes>
        </div>
    )
}
