import { NotAuthInstance, authInstance, flaskInstance } from './indexAPI'
//생성된 axios인스턴스를 사용해 API호출

//검색용 리스트 호출
export const getList = async () => {
  try {
    const { data } = await NotAuthInstance.get(
        "get",
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

//admin 화면 item입력정보 db 저장
export const addItem = async (requestBody) => {
  try {
    const { data } = await authInstance.post(
        "additem",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

//회원가입
export const signup = async (requestBody) => {
  try {
    const { data } = await NotAuthInstance.post(
        "/auth/signup",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

//login
export const login = async (requestBody) => {
  try {
    const { data } = await NotAuthInstance.post(
        "/auth/login",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

// 목록 한번에 출력(사용안됨)
export const getSelectList = async () => {
  try{
    const {data}  = await authInstance.get(
      'get',
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//검색한 리스트 호출
export const getSearchResults = async (requestBody) => {
  try {
    const { data } = await authInstance.post(
        "search",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

//장바구니 추가
export const addBasket = async (requestBody) => {
  try {
    const { data } = await authInstance.post(
        "addbasket",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

//아이디별 장바구니 호출
export const getBasket = async () => {
  try{
    const {data}  = await authInstance.get(
      'getbasket',
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//장바구니 삭제
export const delBasket = async (requestBody) => {
  try{
    const {data}  = await authInstance.post(
      'delbasket',
      requestBody
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//Flask 통신용 =========================

//카테고리 분류
export const classifier = async (requestBody) => {
  try{
    const {data}  = await flaskInstance.post(
      'classifier',
      requestBody
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//리드타임 예측
export const prediction = async (requestBody) => {
  try{
    const {data}  = await flaskInstance.post(
      'prediction',
      requestBody
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//장바구니 목록의 리드타임 전체 예측
export const predictAll = async (requestBody) => {
  try{
    const {data}  = await flaskInstance.post(
      'predictAll',
      requestBody
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

//품목 추천
export const recommendation = async (requestBody) => {
  try{
    const {data}  = await flaskInstance.post(
      'recommendation',
      requestBody
    )
    return data
  } catch (error) {
    console.log(error)
  }
}