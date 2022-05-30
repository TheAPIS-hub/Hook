import axios from 'axios'

//const DefaultUrl = 'https://api.hook.cool'
const DefaultUrl = 'http://devhook.natapp1.cc'

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
  return await axios.post(`${DefaultUrl}/game/comment`, params)
}
export async function getGameIconsByGpId(params) {
  return await axios.get(`${DefaultUrl}/game/getGameIconByGpId`, { params })
}
export async function liked(params) {
  return await axios.post(`${DefaultUrl}/game/liked`, params)
}

export async function getGameIcon() {
  return await axios.get(`${DefaultUrl}/game/getGameIcon`)
}
export async function setGameIcon(params) {
  return await axios.post(`${DefaultUrl}/game/userSetGameIcon`, params)
}
export async function getNormal(params) {
  return await axios.get(`${DefaultUrl}/game/normal`, { params })
}

export async function getTwitter() {
  return await axios.get(`${DefaultUrl}/game/socialMedia`)
}
export async function uploadIcon(params) {
  return await axios.post(`${DefaultUrl}/game/uploadGameIcon`, params)
}
