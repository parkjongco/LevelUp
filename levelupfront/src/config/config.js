import axios from 'axios'

// 설정 변수
const { REACT_APP_BASE_URL } = process.env
export const host = REACT_APP_BASE_URL

// API base url 설정
export const api = axios.create({
    baseURL: `${host}`,
})
