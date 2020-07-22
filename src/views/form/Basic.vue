<template>
  <div>
    <c-card title="基础表单" :bordered="false">
      <c-form label-width="80px" class="form">
        <c-form-item label="项目名称">
          <c-input v-model="form.projectName" placeholder="请输入名称" />
        </c-form-item>
        <c-form-item label="联系电话">
          <c-input v-model="form.phoneNumber" placeholder="请输入电话" />
        </c-form-item>
        <c-form-item label="项目类型">
          <c-select v-model="form.projectType">
            <c-option value="1">私有项目</c-option>
            <c-option value="2">共有项目</c-option>
          </c-select>
        </c-form-item>
        <c-form-item label="时间提醒">
          <c-switch v-model="form.isRemind" />
        </c-form-item>
        <c-form-item label="项目属性">
          <c-checkbox-group v-model="form.projectProperty">
            <c-checkbox
              v-for="property in propertis"
              :key="property.value"
              :value="property.value"
            >
              {{ property.label }}
            </c-checkbox>
          </c-checkbox-group>
        </c-form-item>
        <c-form-item label="项目风险">
          <c-radio-group v-model="form.projectRisk">
            <c-radio
              v-for="risk in risks"
              :key="risk.value"
              :value="risk.value"
            >
              {{ risk.label }}
            </c-radio>
          </c-radio-group>
        </c-form-item>
        <c-form-item label="项目说明">
          <c-input
            v-model="form.projectDesc"
            placeholder="请输入内容"
            html-type="textarea"
          />
        </c-form-item>
        <c-form-item label="">
          <c-button
            type="primary"
            style="margin-right: 10px;"
            @click="visible = true"
          >
            立即提交
          </c-button>
          <c-button>取消</c-button>
        </c-form-item>
      </c-form>
    </c-card>

    <c-modal
      title="请确认所填写信息真实性"
      type="warning"
      :visible="visible"
      width="400px"
      center
      light
    >
      <template v-slot>
        此内容将作为您身份认证的唯一标准，请您确保所填内容真实完整后再次提交。
      </template>
      <template v-slot:footer>
        <c-button type="primary" @click="visible = false">知道了</c-button>
      </template>
    </c-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      risks: [
        { label: '高危', value: 'gw' },
        { label: '一般', value: 'yb' },
        { label: '低', value: 'd' },
        { label: '极低', value: 'jd' }
      ],
      propertis: [
        { label: '大数据', value: '1' },
        { label: '高科技', value: '2' },
        { label: '城市安全', value: '3' },
        { label: '互联网金融', value: '4' },
        { label: '智能化', value: '5' },
        { label: '新能源', value: '6' }
      ],
      form: {
        projectName: '',
        phoneNumber: '',
        projectType: '',
        isRemind: true,
        projectProperty: ['1'],
        projectRisk: '',
        projectDesc: ''
      },
      visible: false
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  max-width: 580px;
  margin: 24px auto 0;

  .c-input,
  .c-select {
    width: 500px;
  }

  .c-checkbox {
    margin: 13px 32px 13px 0;
  }

  .c-switch {
    vertical-align: middle;
  }
}
</style>
