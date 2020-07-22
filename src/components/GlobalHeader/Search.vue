<template>
  <div class="search">
    <FlatButton @click="$refs.input.focus()">
      <c-icon-search class="search-icon" />
    </FlatButton>
    <input
      ref="input"
      class="search-input"
      type="search"
      placeholder="站内搜索"
      :class="{ expanded: searchExpaned }"
      @focus="searchExpaned = true"
      @blur="searchExpaned = false"
    />
  </div>
</template>

<script>
import FlatButton from '@/components/FlatButton'

export default {
  components: { FlatButton },

  data() {
    return {
      searchExpaned: false
    }
  },

  methods: {
    toggleSearch() {
      this.searchExpaned = !this.searchExpaned
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.search-input {
  width: 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  line-height: 32px;
  color: inherit;
  background: transparent;
  opacity: 0;
  transition: all 0.2s ease;

  &.expanded {
    width: 200px;
    opacity: 1;
  }

  &:focus {
    border-color: $--primary-color;
    outline: none;
  }
}
</style>
