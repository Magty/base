import Cookie from 'js-cookie'
export const setTitle = (title) => {
  window.document.title = title || 'main'
}

export const setToken = (token, tokenName = 'token') => {
  Cookie.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookie.get(tokenName)
}
