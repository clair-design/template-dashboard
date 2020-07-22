<template>
  <div class="notifications">
    <c-popover
      trigger="click"
      placement="bottom-right"
      :custom-style="{ marginLeft: '14px', padding: 0 }"
    >
      <FlatButton>
        <c-badge :value="unreadCount" :hidden="!unreadCount">
          <c-icon-bell />
        </c-badge>
      </FlatButton>
      <template #content>
        <Notice
          v-for="notice in notices"
          :key="notice.id"
          :avatar="notice.avatar"
          :title="notice.title"
          :meta="notice.time"
          :read="notice.read"
          @click.native="markNoticeAsRead(notice.id)"
        />
      </template>
    </c-popover>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FlatButton from '@/components/FlatButton'
import Notice from './Notice.vue'

export default {
  components: { FlatButton, Notice },

  computed: {
    unreadCount() {
      return this.notices.filter(notice => !notice.read).length
    },
    ...mapState('user', ['notices'])
  },

  created() {
    this.fetchNotices()
  },

  methods: {
    ...mapActions('user', ['fetchNotices', 'markNoticeAsRead'])
  }
}
</script>
