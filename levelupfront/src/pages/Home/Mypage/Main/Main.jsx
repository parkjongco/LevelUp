import styles from './Main.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerImg}></div>
            <div className={styles.mainBox}></div>
        </div>
    )
}
