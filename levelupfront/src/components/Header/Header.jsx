import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo_how.png'
import { useNavigate } from 'react-router-dom'
import { Search } from '../Search/Search'

export const Header = () => {
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState('Main')
    const [activeSubMenu, setActiveSubMenu] = useState('홈')
    const [isFixed, setIsFixed] = useState(false)
    const [session, setSession] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('의류')
    const categories = ['의류', '가전제품', '뷰티', '가구', '전자기기']
    const [showUserModal, setShowUserModal] = useState(false)

    const detailCategories = {
        의류: [
            {
                title: '여성의류',
                items: ['티셔츠', '니트', '원피스'],
            },
            {
                title: '남성의류',
                items: ['니트', '뷰티', '정장'],
            },
        ],
        가전제품: [
            {
                title: '냉장고',
                items: [],
            },
            {
                title: 'TV',
                items: [],
            },
            {
                title: '세탁기',
                items: [],
            },
            {
                title: '주방가구',
                items: [],
            },
        ],
        뷰티: [
            {
                title: '스킨케어',
                items: [],
            },
            {
                title: '메이크업',
                items: ['아이 메이크업', '베이스 메이크업', '립'],
            },
        ],
        가구: [
            {
                title: '침실가구',
                items: ['소파', '거실장'],
            },
            {
                title: '거실가구',
                items: ['식탁', '수납장'],
            },
        ],
        전자기기: [
            {
                title: '노트북',
                items: ['삼성', '애플', 'LG'],
            },
            {
                title: '데스크탑',
                items: ['일체형', '브랜드', '조립'],
            },
            {
                title: '모니터',
                items: [],
            },
        ],
        // 나머지 카테고리에 대한 세부 카테고리도 여기에 추가
    }

    const handleMenuClick = menuName => {
        setActiveMenu(menuName)
        if (menuName === '중고거래') {
            navigate('/tradepost')
        } else if (menuName === '알바') {
            navigate('/parttime')
        } else if (menuName === '공지사항') {
            navigate('/notice')
        } else if (menuName === '고객센터') {
            navigate('/customerservice')
        }
    }

    const handleSubMenuClick = subMenu => {
        setActiveSubMenu(subMenu)
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // const handleUserIconClick = () => {
    //     setShowUserModal(!showUserModal) // 모달 열기/닫기 토글
    // }

    const handleUserIconClick = subMenu => {
        setShowUserModal(subMenu) // 모달 열기/닫기 토글
    }

    return (
        <div className="header">
            <div className={styles.headerWrap}>
                <div
                    className={`${styles.headerCont} ${
                        isFixed ? styles.fixed : ''
                    }`}
                >
                    <div className={styles.mainNavi}>
                        <div className={styles.topWrap}>
                            <div className={styles.menuBox}>
                                <div className={styles.mainLogo}>
                                    <a>
                                        {/* <img src={logo} alt="Logo" /> */}
                                        Level Up
                                    </a>
                                </div>
                                <div className={styles.naviMenuList}>
                                    <div className={styles.searchBox}>
                                        <Search placeholder="어떤 상품을 찾으시나요?" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.naviInfo}>
                                <div className={styles.infoIcon}>
                                    <a>
                                        <div className={styles.icon}>
                                            <i class="bx bx-message-rounded-dots"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.infoIcon}>
                                    <a
                                        onClick={() => {
                                            navigate('/cart')
                                        }}
                                    >
                                        <div className={styles.icon}>
                                            <i className="bx bx-cart"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.infoIcon}>
                                    <a>
                                        <div className={styles.icon}>
                                            <i className="bx bx-bell"></i>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className={`${styles.infoUser} ${
                                        showUserModal ? styles.active : ''
                                    }`}
                                    onMouseEnter={() => setShowUserModal(true)}
                                    onMouseLeave={() => setShowUserModal(false)}
                                >
                                    {session ? (
                                        <a>
                                            <img src="" alt="User" />
                                        </a>
                                    ) : (
                                        <a>
                                            <div className={styles.icon}>
                                                <i class="bx bxs-user-circle"></i>
                                            </div>
                                        </a>
                                    )}
                                </div>
                                {showUserModal && (
                                    <div
                                        className={styles.userModal}
                                        onMouseEnter={() =>
                                            setShowUserModal(true)
                                        }
                                        onMouseLeave={() =>
                                            setShowUserModal(false)
                                        }
                                    >
                                        <ul>
                                            <li>마이페이지</li>
                                            <li>history</li>
                                            <li>로그아웃</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.ranking}>
                            <button>{'<'}</button>
                            <button>{'>'}</button>
                            <ul className={styles.rank}>
                                <li>
                                    <span>1.</span>
                                    <span>낙곱새</span>
                                </li>
                                <li>
                                    <span>2.</span>
                                    <span>닭발</span>
                                </li>
                                <li>
                                    <span>3.</span>
                                    <span>마라탕</span>
                                </li>
                                <li>
                                    <span>4.</span>
                                    <span>햄버거</span>
                                </li>
                                <li>
                                    <span>5.</span>
                                    <span>서브웨이</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.bottomWrap}>
                            <div
                                className={styles.categoryBox}
                                onMouseEnter={() => setShowModal(true)}
                                onMouseLeave={() => setShowModal(false)}
                            >
                                <i class="bx bx-menu"></i>카테고리
                                {showModal && (
                                    <div className={styles.modal}>
                                        <div className={styles.modalCategory}>
                                            <ul>
                                                {categories.map(
                                                    (category, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() =>
                                                                setSelectedCategory(
                                                                    category
                                                                )
                                                            }
                                                            className={
                                                                selectedCategory ===
                                                                category
                                                                    ? styles.active
                                                                    : ''
                                                            }
                                                        >
                                                            {category}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className={styles.detailCategory}>
                                            {selectedCategory &&
                                                detailCategories[
                                                    selectedCategory
                                                ]?.map((detail, index) => (
                                                    <ul key={index}>
                                                        <li
                                                            className={
                                                                styles.title
                                                            }
                                                        >
                                                            <span>
                                                                {detail.title}
                                                            </span>
                                                        </li>
                                                        {detail.items.length >
                                                            0 &&
                                                            detail.items.map(
                                                                (item, idx) => (
                                                                    <li
                                                                        key={
                                                                            idx
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={styles.menu}
                                onClick={() => handleMenuClick('중고거래')}
                            >
                                중고거래
                            </div>
                            <div
                                className={styles.menu}
                                onClick={() => handleMenuClick('알바')}
                            >
                                알바
                            </div>
                            <div
                                className={styles.menu}
                                onClick={() => handleMenuClick('공지사항')}
                            >
                                공지사항
                            </div>
                            <div
                                className={styles.menu}
                                onClick={() => handleMenuClick('고객센터')}
                            >
                                고객센터
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
