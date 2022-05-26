import {
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
  getSearchHeat,
  getCmcData,
  getTag,
  setSearchHeat,
  setTag_address,
  getSearchData,
  getTxData,
} from '../api/dashbord'

import {
  register,
  getUser,
  setUserAddress,
  setUpdataLoginPwdByCode,
  setUpdataLoginPwdByPwd,
  setUpdataUser,
  isLogin,
  loginByCode,
  loginByPwd,
  logout,
  emailCode,
  forgotPassword,
} from '../api/user'
import {
  getGameItemsData
} from '../api/game'
// overview
export const getMarketCapAndVolume = (type) => {
  return getMarketCapitalization({ type })
}
export const getEthAndBtcData = (methods, type) => {
  return getGlassnodeFigureData({ methods, type })
}
export const getGraphData = (time) => {
  return getFigureData({ time })
}

export const getSearchRank = (limit) => {
  return getSearchHeat({ limit })
}
export const getCmcDatas = (limit, start, type) => {
  return getCmcData({ limit, start, type })
}

// track

export const getSearchDatas = (address) => {
  return getSearchData({ address })
}

export const getTxDatas = (address, limit, start) => {
  return getTxData({ address, limit, start })
}
export const setSearchHeats = (searchName) => {
  return setSearchHeat(searchName)
}

// user

export const userRegister = (email, password, code, userName) => {
  return register({ email, password, code, userName })
}
export const getUserInfo = (email, token) => {
  return getUser({ email }, token)
}
export const setAddress = (uid, address) => {
  return setUserAddress({ uid, address })
}
export const updataLoginPwdByCode = (uid, code, passwordNew) => {
  return setUpdataLoginPwdByCode({ uid, code, passwordNew })
}
export const updataLoginPwdByPwd = (uid, password, passwordNew) => {
  return setUpdataLoginPwdByPwd({ uid, password, passwordNew })
}
export const UpdataUser = (uId) => {
  return setUpdataUser({ uId })
}
export const userIsLogin = (token) => {
  return isLogin(token)
}
export const userLoginByCode = (email, code) => {
  return loginByCode({ email, code })
}
export const userLoginByPwd = (email, password) => {
  return loginByPwd({ email, password })
}
export const userLogout = (uId, token) => {
  return logout({ uId }, token)
}
export const sendCode = (email) => {
  return emailCode({ email })
}
export const forgotPwd = (email) => {
  return forgotPassword({ email })
}
export const getTags = (address) => {
  return getTag({ address })
}
//game
export const getGameItemsDatas = (page,pageSize) => {
  return getGameItemsData({ page,pageSize })
}