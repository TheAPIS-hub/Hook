import axios from 'axios'

const DefaultUrl = 'https://api.hook.cool'

export async function getGameItemsData(params) {
  return await axios.get(`${DefaultUrl}/game/getGameItems`, {
    params,
  })
}
