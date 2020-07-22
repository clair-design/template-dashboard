/*
 * vuex module for user states including login status, notices, profile etc.
 */
import { UPDATE_NOTICES, MARK_NOTICE_AS_READ } from '@/store/mutation-types'
import { getNotices, markNoticeAsRead } from '@/services/user'

export default {
  namespaced: true,
  state: {
    userName: 'Grace',
    avatar: 'G',
    bio: '今日阴转小雨，22℃ - 32℃，出门记得带伞哦。',
    notices: []
  },

  mutations: {
    [UPDATE_NOTICES](state, notices) {
      state.notices = notices
    },

    [MARK_NOTICE_AS_READ](state, noticeId) {
      state.notices = state.notices.map(item => {
        const notice = { ...item }
        if (notice.id === noticeId) {
          notice.read = true
        }
        return notice
      })
    }
  },

  actions: {
    async fetchNotices({ commit }) {
      const notices = await getNotices()
      commit(UPDATE_NOTICES, notices)
    },

    async markNoticeAsRead({ commit }, noticeId) {
      commit(MARK_NOTICE_AS_READ, noticeId)
      await markNoticeAsRead(noticeId)
    }
  }
}
