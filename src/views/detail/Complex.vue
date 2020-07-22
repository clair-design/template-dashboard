<template>
  <div>
    <h3>高级详情</h3>
    <c-card :bordered="false" title="基本信息">
      <DescriptionList>
        <DescriptionItem title="项目名称">UI 设计规范</DescriptionItem>
        <DescriptionItem title="立项时间">2019-09-19</DescriptionItem>
        <DescriptionItem title="负责人">小桃几Sissy</DescriptionItem>
        <DescriptionItem title="项目状态">
          <c-tag color="blue" size="small">开发中</c-tag>
        </DescriptionItem>
        <DescriptionItem title="项目类型">非业务类</DescriptionItem>
        <DescriptionItem title="Git 地址">
          <a href="#">/bizfe/clair</a>
        </DescriptionItem>
      </DescriptionList>
    </c-card>

    <c-card :bordered="false" title="开发进度" class="grid-row progress">
      <c-steps active-key="2">
        <c-step step-key="1" title="需求确认" />
        <c-step step-key="2" title="项目开发" />
        <c-step step-key="3" title="部署上线" />
      </c-steps>
      <p class="progress__description">
        所有项目必须经过安全测试才能上线，未经安全测试的项目域名不会被解析。
      </p>
    </c-card>

    <c-card
      :bordered="false"
      title="项目活动"
      :body-style="{ padding: 0, marginTop: '-1px' }"
      class="grid-row"
    >
      <c-table size="small" :data-source="[]">
        <c-table-column prop="version" title="操作类型" />
        <c-table-column prop="number" title="操作人" />
        <c-table-column prop="status" title="时间" />
        <c-table-column prop="detail" title="详情" />
      </c-table>
    </c-card>
  </div>
</template>

<script>
import { getActivities } from '@/services/user'
import DescriptionList from './components/DescriptionList.vue'
import DescriptionItem from './components/DescriptionItem.vue'

export default {
  components: { DescriptionList, DescriptionItem },

  data() {
    return {
      activities: []
    }
  },

  async created() {
    this.activities = await getActivities()
  }
}
</script>

<style lang="scss" scoped>
.progress {
  .c-steps {
    margin: 1em 2em;
  }

  &__description {
    color: #555;
    text-align: center;
  }
}

.grid-row {
  margin-top: 20px;
}
</style>
