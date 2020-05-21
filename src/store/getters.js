const getters = {
  appNameWithVersion: (state) => {
    return `${state.appName}${state.appVersion}`
  }
}
export default getters
