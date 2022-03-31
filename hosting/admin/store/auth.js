import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  uid: '',
  user: null,
})

export const getters = {
  isLoggedIn: (state) => state.status === 'loggedIn',
  uid: (state) => state.uid,
  user: (state) => state.user,
}

export const actions = {
  async saveAuthInfo({ commit, dispatch }, { user }) {
    const userInfo = await dispatch(
      'users/get',
      { userID: user.uid },
      { root: true }
    )
    commit('setUser', { user: userInfo })
    commit('setAuthInfo', { user })
  },
  saveUser({ commit }, { user }) {
    commit('setUser', { user })
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  },
}

export const mutations = {
  setAuthInfo(state, { user }) {
    state.status = 'loggedIn'
    state.uid = user.uid
  },
  setUser(state, { user }) {
    state.user = user
  },
  logout(state) {
    state.status = 'loggedOut'
    state.uid = ''
  },
}
