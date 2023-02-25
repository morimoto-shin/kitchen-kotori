import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  uid: '',
})

export const getters = {
  isLoggedIn: (state) => state.status === 'loggedIn',
  uid: (state) => state.uid,
}

export const actions = {
  saveAuthInfo({ commit }, { user }) {
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

  logout(state) {
    state.status = 'loggedOut'
    state.uid = ''
  },
}
