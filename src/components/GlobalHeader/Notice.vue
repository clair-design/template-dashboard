<template>
  <div :class="classNames">
    <c-avatar class="avatar" :text="avatar"></c-avatar>
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="meta">{{ meta }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    meta: {
      type: String,
      default: ''
    },
    read: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classNames() {
      return {
        notice: true,
        read: this.read
      }
    }
  }
}
</script>

<style scoped>
.notice {
  display: flex;
  align-items: center;
  min-width: 200px;
  padding: 10px 20px;
  cursor: pointer;
}

.notice.read {
  opacity: 0.5;
}

.notice:not(:last-child) {
  border-bottom: 1px solid #eee;
}

.avatar {
  float: left;
  margin-right: 10px;
}

.content {
  overflow: hidden;
}

.content .title {
  font-size: 14px;
}

.content .meta {
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}
</style>
