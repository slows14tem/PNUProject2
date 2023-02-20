import { defaultInstance, authInstance } from './indexAPI'

//생성된 axios인스턴스를 사용해 API호출

//login
export const login = async (requestBody) => {
  try {
    const { data } = await defaultInstance.post(
        "/auth/login",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getSelectList = async () => {
  try{
    const {data}  = await defaultInstance.get(
      'get',
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getSearchResults = async (requestBody) => {
  try {
    const { data } = await defaultInstance.post(
        "search",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

export const addBasket = async (requestBody) => {
  try {
    const { data } = await defaultInstance.post(
        "basket",
        requestBody
      )
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getBasket = async () => {
  try{
    const {data}  = await defaultInstance.get(
      'getbasket',
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

// post method example
// export const addLog = async (logInfo) => {
//   try {
//     const { data } = await defaultInstance.post(
//         "searchlog",
//         logInfo
//       )
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// }