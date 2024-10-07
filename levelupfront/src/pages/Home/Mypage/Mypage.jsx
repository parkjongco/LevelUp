import styles from './Mypage.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from './Main/Main'

export const Mypage = () => {
    return (
        <div className={styles.container}>
            Mypage
            <Routes>
                <Route path="/" element={<Navigate to="main" replace />} />
                <Route path="main" element={<Main />} />
            </Routes>
        </div>
    )
}
