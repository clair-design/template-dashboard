<template>
  <c-form
    ref="form"
    class="form"
    label-width="80px"
    :model="form"
    :rules="rules"
  >
    <c-form-item label="账号 ID" prop="id">
      <c-input v-model="form.id" placeholder="请输入账号 ID" />
    </c-form-item>
    <c-form-item label="项目名称" prop="projectName">
      <c-input v-model="form.projectName" placeholder="请输入名称" />
    </c-form-item>
    <c-form-item label="项目类型">
      <c-select v-model="form.projectType">
        <c-option value="1">私有项目</c-option>
        <c-option value="2">共有项目</c-option>
      </c-select>
    </c-form-item>
    <c-form-item label="">
      <c-button type="primary" @click="submit">下一步</c-button>
    </c-form-item>
  </c-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        projectName: '',
        projectType: ''
      },
      rules: {
        id: [{ required: true, message: '请输入账号 ID', trigger: 'blur' }],
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async submit() {
      const { success } = await this.$refs.form.validate()
      if (success) {
        this.$emit('nextStep')
      } else {
        this.$emit('setError')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  .c-input,
  .c-select {
    width: 500px;
  }
}
</style>
