import React, { useState } from 'react'
import styles from './Side.module.css'
import { useNavigate, Link } from 'react-router-dom' // useNavigate 임포트
import { Button } from '../Button/Button'
import ScrollToTopButton from '../Scroll/Scroll'
export const Side = () => {
    const navigate = useNavigate() // useNavigate 사용
    const [notificationCount, setNotificationCount] = useState(5) // 예시로 5개로 설정

    const menuData = [
        {
            title: '메인 페이지',
            subMenu: [{ title: '배너 관리', path: '/admin/banner' }],
        },
        {
            title: '회원 관리',
            subMenu: [
                {
                    title: '회원 목록',
                    icon: 'bx bx-group',
                    path: '/admin/member',
                },
                {
                    title: '블랙리스트 목록',
                    icon: 'bx bx-block',
                    path: '/admin/blacklist',
                },
                {
                    title: '신고 회원 목록',
                    icon: 'bx bx-user-x',
                    path: '/admin/reportedmember',
                },
            ],
        },
        {
            title: '게시판 관리',
            subMenu: [
                {
                    title: '신고 게시글 목록',
                    icon: 'bx bxs-message-square-error',
                    path: '/',
                },
                { title: '신고 알바 목록', icon: 'bx bx-angry', path: '/' },
            ],
        },
        {
            title: '고객센터 관리',
            subMenu: [
                { title: '공지사항 관리', icon: 'bx bx-list-ul', path: '/' },
                {
                    title: 'Q&A 목록',
                    icon: 'bx bx-message-alt-edit',
                    path: '/',
                },
                { title: 'FAQ 목록', icon: 'bx bx-support', path: '/' },
            ],
        },
        {
            title: '결제관리',
            subMenu: [
                { title: '거래내역 조회', icon: 'bx bx-receipt', path: '/' },
                {
                    title: '임시 카테고리',
                    icon: 'bx bx-question-mark',
                    path: '/',
                },
            ],
        },
        {
            title: '알림관리',
            subMenu: [
                { title: '알림', icon: 'bx bx-bell', path: '/' },
                {
                    title: '채팅',
                    icon: 'bx bx-message-rounded-dots',
                    path: '/',
                },
            ],
        },
    ]

    return (
        <div className="side">
            <div className={styles.sideWrap}>
                {/* 로고 부분 */}
                <Link to="/admin/home">
                    <div className={styles.logoBox}>
                        <p className={styles.logotit}>Level Up</p>
                    </div>
                </Link>

                {/* 관리 리스트 */}
                <div className={styles.adminListCont}>
                    {menuData.map((menu, menuIndex) => (
                        <div key={menuIndex} className={styles.adminList}>
                            <ul>
                                <li
                                    className={`${styles.listTit} ${
                                        menu.title === '로그아웃'
                                            ? styles.logout
                                            : ''
                                    }`}
                                >
                                    {menu.title}

                                    {/* 2뎁스 메뉴 */}
                                    <ul className={styles.listFlDept}>
                                        {menu.subMenu.map(
                                            (subMenu, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className={styles.listFl}
                                                    onClick={() =>
                                                        subMenu.path &&
                                                        navigate(subMenu.path)
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.listFlBox
                                                        }
                                                    >
                                                        {subMenu.icon && (
                                                            <span
                                                                className={
                                                                    subMenu.icon
                                                                }
                                                            ></span>
                                                        )}
                                                        {subMenu.title === '' &&
                                                            notificationCount >
                                                                0 && (
                                                                <span
                                                                    className={
                                                                        styles.notificationBadge
                                                                    }
                                                                >
                                                                    {
                                                                        notificationCount
                                                                    }
                                                                </span>
                                                            )}
                                                        {subMenu.title}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    ))}
                    <div className={styles.btn}>
                        <Button title="로그아웃" size={'s'} />
                    </div>
                    {/* <ScrollToTopButton /> */}
                </div>
            </div>
        </div>
    )
}
