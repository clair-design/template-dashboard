<template>
  <c-card :bordered="false" title="条件筛选列表" :body-style="{ padding: 0 }">
    <div class="search-list">
      <c-form inline class="search-list__query">
        <c-form-item label="项目状态：">
          <c-select v-model="query.status" @change="search">
            <c-option value="ALL">全部</c-option>
            <c-option
              v-for="(status, index) in statusList"
              :key="status.name"
              :value="index"
            >
              {{ status.name }}
            </c-option>
          </c-select>
        </c-form-item>
        <c-form-item label="创建日期：">
          <c-date-picker v-model="query.date" @change="search" />
        </c-form-item>
      </c-form>

      <c-table :data-source="list">
        <c-table-column prop="date" title="创建日期" />
        <c-table-column prop="name" title="项目名称" />
        <c-table-column prop="group" title="项目分组" />
        <c-table-column prop="activity" title="活跃度" />
        <c-table-column prop="status" title="状态">
          <template v-slot="{ row: { status = 0 } }">
            <c-tag :color="statusList[status].color">
              {{ statusList[status].name }}
            </c-tag>
          </template>
        </c-table-column>
      </c-table>
      <div class="search-list__pages">
        <c-pagination
          :total="total"
          :pn="pn"
          :ps="ps"
          @page-change="pageChange"
        />
      </div>
    </div>
  </c-card>
</template>

<script>
import { getProjectList } from '@/services/project'

export default {
  data() {
    return {
      total: 0,
      ps: 10,
      pn: 1,
      list: [],
      statusList: [
        { name: '未开始', color: 'grey' },
        { name: '进行中', color: 'blue' },
        { name: '已完成', color: 'green' }
      ],
      query: {
        status: 'ALL',
        date: ''
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const data = await getProjectList({ pn: this.pn, ...this.query })
      this.total = data.total
      this.list = data.list
    },

    search() {
      this.pn = 1
      this.fetchData()
    },

    pageChange({ detail: { pn } }) {
      this.pn = pn
      this.fetchData()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.search-list {
  &__query {
    padding: 20px 0 0 20px;
  }

  &__pages {
    margin: 16px 20px;
    text-align: right;
  }
}
</style>
