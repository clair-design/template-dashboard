<template>
  <c-card :bordered="false" :body-style="{ padding: 0 }">
    <template #title>
      基础列表
      <c-tooltip content="基础列表说明" placement="top">
        <c-icon-question class="question-icon" />
      </c-tooltip>
    </template>

    <div class="basic-list">
      <div class="basic-list__toolbar">
        <c-button type="primary" @click="openModal">新建项目</c-button>
        <c-popConfirm
          v-if="selectedItems.length"
          content="确定要删除选中项目吗？"
          @confirm="removeSelectedItems"
        >
          <c-button type="danger">删除选中项目</c-button>
        </c-popConfirm>
        <c-button class="c-button--download" @click="downloadData">
          <c-icon-download />
        </c-button>
      </div>

      <c-table :data-source="list" @selected-change="onSelectionChange">
        <c-table-column
          prop="selected"
          type="selection"
          :width="54"
          align="center"
        />
        <c-table-column prop="date" title="日期" />
        <c-table-column prop="name" title="项目名称" />
        <c-table-column prop="group" title="项目分组" />
        <c-table-column prop="activity" title="活跃度" />
        <c-table-column prop="actions" title="操作" :width="160">
          <div class="basic-list__actions">
            <a href="#">编辑</a>
            <a href="#">查看</a>
            <a href="#">删除</a>
          </div>
        </c-table-column>
      </c-table>
      <div class="basic-list__pages">
        <c-pagination
          :total="total"
          :pn="pn"
          :ps="ps"
          @page-change="pageChange"
        />
      </div>
    </div>

    <c-modal
      title="创建项目"
      width="400px"
      :visible="isModalVisible"
      @confirm="createProject"
      @cancel="isModalVisible = false"
    >
      <c-form
        ref="form"
        label-width="7em"
        label-position="right"
        :rules="rules"
        :model="newProject"
      >
        <c-form-item label="项目名称" prop="name">
          <c-input v-model="newProject.name" placeholder="请输入项目名称" />
        </c-form-item>
        <c-form-item label="项目分类" prop="group">
          <c-select v-model="newProject.group">
            <c-option>基础圈选</c-option>
            <c-option>自定义分类</c-option>
          </c-select>
        </c-form-item>
      </c-form>
    </c-modal>
  </c-card>
</template>

<script>
import { format } from 'date-fns'
import { saveAS } from '@/utils/download'
import { getProjectList } from '@/services/project'

export default {
  data() {
    return {
      total: 0,
      ps: 10,
      pn: 1,
      list: [],
      selectedItems: [],
      isModalVisible: false,
      newProject: {
        name: '',
        group: ''
      },
      rules: {
        name: [{ required: true, message: '请填写项目名称' }]
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const data = await getProjectList({ pn: this.pn })
      this.total = data.total
      this.list = data.list
    },

    pageChange({ detail: { pn } }) {
      this.pn = pn
      this.fetchData()
    },

    onSelectionChange({ detail }) {
      this.selectedItems = detail.selectedDataList
    },

    async removeSelectedItems() {
      this.fetchData()
      this.selectedItems = []
    },

    downloadData() {
      const toCSV = item => {
        const { id, date, name, activity } = item
        return [id, date, name, activity].join(',')
      }
      const csv = ['ID, 日期, 项目名称, 活跃度', ...this.list.map(toCSV)]
      saveAS(csv.join('\n'), 'data.csv', 'text/csv')
    },

    openModal() {
      this.isModalVisible = true
    },

    async createProject() {
      const { success } = await this.$refs.form.validate()
      if (!success) return
      this.list.unshift({
        date: format(new Date(), 'yyyy-MM-dd'),
        activity: 0,
        ...this.newProject
      })
      this.isModalVisible = false
      this.newProject.name = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.question-icon {
  width: 1em;
  height: 1em;
  padding: 2px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #6e6e6e;
  border-radius: 50%;
}

.basic-list {
  &__toolbar {
    padding: 12px 20px;

    .c-button + .c-button {
      margin-left: 10px;
    }

    .c-button--download {
      float: right;
      min-width: 0;
      padding: 0 8px;
    }
  }

  &__actions a {
    color: $--primary-color;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 1em;
    }
  }

  &__pages {
    margin: 16px 20px;
    text-align: right;
  }
}
</style>
