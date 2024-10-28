/**
 *  API 사용 함수 작성
 *  axios 데이터 통신 관리 폴더
 *  해당기능.js 파일 만들어서 관리
 */

import { api, host } from '../config/config'
// api는 무조건 import 해야함. 단, host는 본인 선택

const baseUrl = `${host}/member`

// 함수로 선언한 baseUrl 사용 예시
// 회원 상세 조회
export const detailMember = member_id => {
    return api.get(`${baseUrl}/detail?member_id=${member_id}`)
}

// host 같은경우 import 해서 쓸거면 요런식으로 사용 가능
// 예시1
export const ex1 = () => {
    return api.get(`${baseUrl}/getAgeGenderDistribution`)
}

// host는 따로 import 안하고 그냥 /member/ 이렇게 써도 괜찮음
// 예시2
export const ex2 = () => {
    return api.get('/member/getAgeGenderDistribution')
}

/* 주의사항!! */
export const checkIdForSignUp = memberId => {
    return axios.post(`${baseUrl}/checkId`, { member_id: memberId })
}

// 로그인 없이도 기능이 되어야하는건 api 대신 axios 라고 쓴다
// 나중에 시큐리티 설정할때 api 라고 해둔건 반드시 로그인을 해야만 사용 가능한 기능
// api 대신 axios 라고 쓴건 로그인 없이도 가능한 기능
// 로그인 안해도 중고거래, 알바 전체목록 조회나 상세조회 까진 가능 해야하니깐 ㅇㅋ?
