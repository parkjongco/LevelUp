import styles from './Admin.module.css'
import { Routes, Route } from 'react-router-dom'
import Title from '../../components/Title/Title'
import { Main } from './Main/Main'
import { Member } from './Member/Member'
import { Blacklist } from './Member/Blacklist/Blacklist'
import { Reportedmember } from './Member/Reportedmember/Reportedmember'

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
            </Routes>
        </div>
    )
}
