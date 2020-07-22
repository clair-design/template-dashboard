<template>
  <c-card :bordered="false" title="基础详情页">
    <section class="info-section info-section--bordered">
      <h4>基本信息</h4>
      <DescriptionList>
        <DescriptionItem title="用户姓名">小桃几Sissy</DescriptionItem>
        <DescriptionItem title="出生年月">2001-09-19</DescriptionItem>
        <DescriptionItem title="电话">13888888888</DescriptionItem>
        <DescriptionItem title="性别">女</DescriptionItem>
        <DescriptionItem title="所在地">北京市朝阳区</DescriptionItem>
        <DescriptionItem title="邮箱">clair@360.cn</DescriptionItem>
      </DescriptionList>
    </section>

    <section class="info-section info-section--bordered">
      <h4>其它信息</h4>
      <DescriptionList :col-props="{ xs: { span: 12 }, lg: { span: 6 } }">
        <DescriptionItem title="公司">北京奇虎科技有限公司</DescriptionItem>
        <DescriptionItem title="地址">
          北京市朝阳区酒仙桥路6号院
        </DescriptionItem>
        <DescriptionItem title="职位">UXC-设计师</DescriptionItem>
        <DescriptionItem title="网址">
          <a href="#">https://www.360.cn</a>
        </DescriptionItem>
      </DescriptionList>
    </section>

    <section class="info-section">
      <h4>账户活动</h4>
      <c-table :data-source="activities" size="small">
        <c-table-column prop="time" title="时间" />
        <c-table-column prop="device" title="设备" />
        <c-table-column prop="location" title="地点" />
        <c-table-column prop="activity" title="操作" />
      </c-table>
    </section>
  </c-card>
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
.info-section {
  margin-bottom: 20px;
  padding-bottom: 20px;

  &--bordered {
    border-bottom: 1px solid #ddd;
  }

  h4 {
    margin: 0 0 12px;
    font-size: 16px;
  }
}
</style>
