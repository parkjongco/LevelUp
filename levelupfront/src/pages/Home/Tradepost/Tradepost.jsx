import styles from './Tradepost.module.css'

export const Tradepost = () => {
    return (
        <div className={styles.tradepostContainer}>
            <div className={styles.title}>중고거래 인기매물</div>
            <div className={styles.searchWrap}>
                <div className={styles.sortWrap}>
                    <select className={styles.sort} id="category">
                        <option>카테고리</option>
                    </select>
                </div>
                <div className={styles.choiceWrap}>
                    <div>동네를 선택하세요</div>
                    <select className={styles.sort} id="category">
                        <option>카테고리</option>
                    </select>
                </div>
            </div>
            <div className="containerWrap"></div>
        </div>
    )
}

export default Tradepost
