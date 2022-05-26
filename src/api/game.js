import axios from 'axios'

const DefaultUrl = 'https://api.hook.cool'

export async function getGameItemsData(params) {
  return await axios.get(`${DefaultUrl}/game/getGameItems`, {
    params,
  })
}
export async function getCommentsDate(params) {
  return await axios.get(`${DefaultUrl}/game/getComments`, {
    params,
  })
}
export async function witeComments(params) {
  return await axios.post(`${DefaultUrl}/game/comment`, {
    params,
  })
}
export async function getGameIconsByGpId(params) {
  return await axios.get(`${DefaultUrl}/game/getGameIconByGpId`, {
    params,
  })
}
export async function liked(params) {
  return await axios.post(`${DefaultUrl}/game/liked`, {
    params,
  })
}

export async function getGameIcon() {
  return await axios.get(`${DefaultUrl}/game/getGameItems`)
}

