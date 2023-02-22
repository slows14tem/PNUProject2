import axios from 'axios'

//axios 인스턴스 생성
const BASE_URL = "http://localhost:8080/data/"

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

const axiosAuthAPI = (url, options) => {
  const token = localStorage.getItem('wtw-token') || ''
  const instance = axios.create({
    baseURL: url,
    headers:  { Authorization: "Bearer " + token },
    ...options,
  })
  return instance
}

export const defaultInstance = axiosAPI(BASE_URL)
export const authInstance = axiosAuthAPI(BASE_URL)


// fetch('http://localhost:8000/login/', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     'id': 'kim',
//     'password': '1234'
//   })
// })
// .then(response => response.json())
// .then(response => {
//   if (response.token) {
//     localStorage.setItem('wtw-token', response.token);
//   }
// })

// let token = localStorage.getItem('wtw-token') || '';

// fetch('http://localhost:8000/likes/', {
//   headers: {
//       'Authorization': token,
//   }
// })
// .then(response => response.json())
// .then(response => {
//    console.log(response.data);
// })