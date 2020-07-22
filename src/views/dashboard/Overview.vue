<template>
  <div>
    <!-- 重要数据指标 -->
    <c-row gutter="20px">
      <c-col
        v-for="metrics in keyMetricsData"
        :key="metrics.title"
        :xs="{ span: 12 }"
        :lg="{ span: 4 }"
      >
        <KeyMetrics
          :icon="metrics.icon"
          :type="metrics.status"
          :title="metrics.title"
          :value="metrics.value | formatNumber"
        >
          <Trend label="日环比" :value="metrics.dailyChange | percentage" />
          <Trend label="周同比" :value="metrics.weeklyChange | percentage" />
        </KeyMetrics>
      </c-col>
    </c-row>

    <!-- 筛选 -->
    <c-card :bordered="false" class="grid-row">
      <div class="data-filter">
        <c-date-picker
          v-model="dateRange"
          type="daterange"
          @change="fetchData"
        />
        <c-input placeholder="请输入查询内容" @keyup.enter="fetchData">
          <c-icon-search slot="suffix-icon" />
        </c-input>
      </div>
    </c-card>

    <!-- 趋势分析图 -->
    <c-card title="趋势分析图" :bordered="false" class="grid-row">
      <LineChart
        :height="400"
        :data="trendChartData"
        row="type"
        text="date"
        value="value"
      />
    </c-card>

    <c-row gutter="20px" class="grid-row">
      <!-- 最近7日访客分析 -->
      <c-col :xs="{ span: 12 }" :lg="{ span: 8 }">
        <c-card :bordered="false" title="最近7日访客分析">
          <BarChart
            v-if="visitorsChartData.length"
            :height="438"
            :data="visitorsChartData"
            row="type"
            text="date"
            value="value"
            transpose
            stack
          />
        </c-card>
      </c-col>

      <!-- 动态时间轴 -->
      <c-col :xs="{ span: 12 }" :lg="{ span: 4 }">
        <c-card :bordered="false" title="动态时间轴">
          <c-timeline>
            <c-timeline-item
              v-for="item in eventListData"
              :key="item.title + item.time"
              :color="item.color"
            >
              <div class="timeline-content">
                <span>{{ item.title }}</span>
                <span class="timeline-content__time">{{ item.time }}</span>
              </div>
            </c-timeline-item>
          </c-timeline>
        </c-card>
      </c-col>
    </c-row>

    <c-row gutter="20px" class="grid-row">
      <!-- 散点图 -->
      <c-col :xs="{ span: 12 }" :lg="{ span: 6 }">
        <c-card :bordered="false" title="散点图">
          <ScatterChart
            v-if="scatterChartData.length"
            :height="400"
            :data="scatterChartData"
            row="category"
            text="x"
            value="y"
            area-field="size"
          />
        </c-card>
      </c-col>

      <!-- 占比分析图 -->
      <c-col :xs="{ span: 12 }" :lg="{ span: 6 }">
        <c-card :bordered="false" title="占比分析图">
          <PieChart
            v-if="pieChartData.length"
            :data="pieChartData"
            :height="400"
            row="category"
            value="value"
            :radius="1.2"
            rose
          />
        </c-card>
      </c-col>
    </c-row>

    <!-- 数据榜单TOP5 -->
    <c-card :bordered="false" title="数据榜单 TOP5" class="grid-row">
      <c-tabs active-key="曝光量">
        <c-tab-pane
          v-for="type in topListTypes"
          :key="type.title"
          :label="type.title"
          :tab-key="type.title"
          lazy
        >
          <BarChart
            v-if="topListData[type.data]"
            :height="450"
            :data="topListData[type.data]"
            row="year"
            text="brand"
            value="value"
          />
        </c-tab-pane>
      </c-tabs>
    </c-card>
  </div>
</template>

<script>
import KeyMetrics, { Trend } from '@/components/KeyMetrics'
import { LineChart, BarChart, ScatterChart, PieChart } from '@/components/Chart'
import { getChartData } from '@/services/chart'
import { formatNumber, percentage } from '@/utils/filters'

export default {
  components: {
    KeyMetrics,
    Trend,
    LineChart,
    BarChart,
    ScatterChart,
    PieChart
  },

  filters: { formatNumber, percentage },

  data() {
    return {
      dateRange: [],
      keyMetricsData: [],
      trendChartData: [],
      visitorsChartData: [],
      eventListData: [],
      scatterChartData: [],
      pieChartData: [],
      topListTypes: [
        { title: '曝光量', data: 'view' },
        { title: '互动量', data: 'interaction' },
        { title: '点击量', data: 'click' }
      ],
      topListData: {}
    }
  },

  async mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const chartData = await getChartData()
      Object.assign(this, chartData)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-row {
  margin-top: 20px;
}

.data-filter {
  display: flex;
  justify-content: space-between;
}

.timeline-content {
  display: flex;
  justify-content: space-between;

  &__time {
    color: #999;
  }
}
</style>
