import { defaultInstance } from './indexAPI'

//생성된 axios인스턴스를 사용해 API호출

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