<template>
  <c-form ref="form" label-width="80px">
    <c-form-item label="所在区域">
      <c-select
        v-model="form.city"
        placeholder="请选择所在城市"
        style="width: 240px; margin-right: 20px;"
      >
        <c-option v-for="city in citys" :key="city.value" :value="city.value">
          {{ city.label }}
        </c-option>
      </c-select>
      <c-select
        v-model="form.district"
        placeholder="请选择所在区县"
        style="width: 240px;"
      >
        <c-option
          v-for="district in districts"
          :key="district.value"
          :value="district.value"
        >
          {{ district.label }}
        </c-option>
      </c-select>
    </c-form-item>
    <c-form-item label="详细地址">
      <c-input
        v-model="form.detailAddress"
        placeholder="请输入详细地址"
        style="width: 500px;"
      />
    </c-form-item>
    <c-form-item label="">
      <c-button
        type="primary"
        :disabled="loading"
        style="margin-right: 10px;"
        @click="submit"
      >
        <c-icon-spin v-if="loading" />
        确认提交
      </c-button>
      <c-button @click="$emit('prevStep')">上一步</c-button>
    </c-form-item>
  </c-form>
</template>

<script>
export default {
  data() {
    return {
      citys: [
        { label: '北京', value: '1' },
        { label: '天津', value: '2' },
        { label: '长沙', value: '3' },
        { label: '杭州', value: '4' },
        { label: '上海', value: '5' },
        { label: '深圳', value: '6' }
      ],
      districts: [
        { label: '海淀', value: '1' },
        { label: '朝阳', value: '2' },
        { label: '昌平', value: '3' },
        { label: '东城', value: '4' },
        { label: '西城', value: '5' },
        { label: '顺义', value: '6' }
      ],
      form: {
        city: '',
        district: '',
        detailAddress: ''
      },
      loading: false
    }
  },
  methods: {
    async submit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$emit('nextStep')
      }, 1500)
    }
  }
}
</script>
