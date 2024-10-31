import styles from './Admin.module.css'
import { Routes, Route } from 'react-router-dom'
import Title from '../../components/Title/Title'
import { Main } from './Main/Main'
import { Banner } from './Banner/Banner'
import { Member } from './Member/Member'
import { Blacklist } from './Member/Blacklist/Blacklist'
import { Reportedmember } from './Member/Reportedmember/Reportedmember'
import { Tradepost } from './Tradepost/Tradepost'
import { Timepart } from './Timepart/Timepart'
import { Payment } from './Payment/Payment'
import { Notice } from './Notice/Notice'
import Qna from './Customerservice/Qna/Qna'
import Faq from './Customerservice/Faq/Faq'
import { Chat } from './Chat/Chat'

export const Admin = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route
                    path="admin/home"
                    element={
                        <>
                            <Title title={'메인 페이지'} />
                            <Main />
                        </>
                    }
                />

                <Route
                    path="admin/banner"
                    element={
                        <>
                            <Title title={'배너'} />
                            <Banner />
                        </>
                    }
                />

                <Route
                    path="admin/member"
                    element={
                        <>
                            <Title title={'회원 관리'} />
                            <Member />
                        </>
                    }
                />

                <Route
                    path="admin/blacklist"
                    element={
                        <>
                            <Title title={'블랙리스트 관리'} />
                            <Blacklist />
                        </>
                    }
                />

                <Route
                    path="admin/reportedmember"
                    element={
                        <>
                            <Title title={'신고 회원 관리'} />
                            <Reportedmember />
                        </>
                    }
                />

                <Route
                    path="admin/tradepost"
                    element={
                        <>
                            <Title title={'신고 중고거래 관리'} />
                            <Tradepost />
                        </>
                    }
                />

                <Route
                    path="admin/timepart"
                    element={
                        <>
                            <Title title={'신고 알바 관리'} />
                            <Timepart />
                        </>
                    }
                />

                <Route
                    path="admin/payment"
                    element={
                        <>
                            <Title title={'거래내역 관리'} />
                            <Payment />
                        </>
                    }
                />

                <Route
                    path="admin/notice"
                    element={
                        <>
                            <Title title={'공지사항 관리'} />
                            <Notice />
                        </>
                    }
                />

                <Route
                    path="admin/qna"
                    element={
                        <>
                            <Title title={'Q&A 관리'} />
                            <Qna />
                        </>
                    }
                />

                <Route
                    path="admin/faq"
                    element={
                        <>
                            <Title title={'FAQ 관리'} />
                            <Faq />
                        </>
                    }
                />

                <Route
                    path="admin/chat"
                    element={
                        <>
                            <Title title={'채팅 관리'} />
                            <Chat />
                        </>
                    }
                />
            </Routes>
        </div>
    )
}
