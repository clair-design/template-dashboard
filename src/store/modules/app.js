/*
 * vuex module for global states of the web app
 * including sidebar status, theme, etc.
 */
import { TOGGLE_SIDEBAR, TOGGLE_THEME } from '@/store/mutation-types.js'

export default {
  namespaced: true,

  state: {
    sidebarCollapsed: false,
    theme: 'dark',
    logo: require('@/assets/logo.svg'),
    smallLogo: require('@/assets/logo-small.svg')
  },

  mutations: {
    [TOGGLE_SIDEBAR](state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    [TOGGLE_THEME](state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    }
  },

  actions: {
    toggleSidebar({ commit }) {
      commit(TOGGLE_SIDEBAR)
    },
    toggleTheme({ commit }) {
      commit(TOGGLE_THEME)
    }
  }
}
