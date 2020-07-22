<template>
  <div class="themes">
    <FlatButton @click="toggleTheme"><c-icon-drawing /></FlatButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FlatButton from '@/components/FlatButton'

export default {
  components: { FlatButton },

  methods: {
    ...mapActions('app', ['toggleTheme'])
  }
}
</script>
