// 将时间格式化成 YYYY-mm-dd 格式字符串
const format = new Intl.DateTimeFormat('zh', {
  month: 'numeric',
  day: 'numeric'
}).format

// 返回指定天数后的时间
const relativeDate = day => {
  const MS_IN_DAY = 86400000
  return new Date(Date.now() + MS_IN_DAY * day)
}

// 返回最大和最小间的随机整数
const random = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

module.exports = {
  'GET /api/chart': {
    // 关键指标数据
    keyMetricsData: [
      {
        title: '新增用户数',
        value: 35476,
        icon: 'user-plus',
        dailyChange: -0.1245,
        weeklyChange: 0.24
      },
      {
        title: '活跃用户数',
        value: 47923,
        status: 'success',
        icon: 'user',
        dailyChange: 0.0909,
        weeklyChange: 0.189
      },
      {
        title: '累积用户数',
        value: 923455,
        status: 'warning',
        icon: 'user-number',
        dailyChange: -0.0076,
        weeklyChange: -0.0149
      }
    ],
    // 趋势分析数据
    trendChartData: [...Array(20).keys()].map(i => ({
      date: format(relativeDate(i % 10)),
      value: random(40, 100),
      type: i < 10 ? 'pv' : 'uv'
    })),
    // 访客分析
    visitorsChartData: [...Array(14).keys()].map(i => ({
      date: format(relativeDate(i % 7)),
      value: random(4000, 10000),
      type: i < 7 ? 'PC网站访客' : '移动端访客'
    })),
    // 时间轴
    eventListData: [
      { title: '正在同步数据', time: '30分钟前' },
      { title: '完成缓存清理', time: '6小时前', color: '#52b818' },
      { title: '成功修复系统漏洞', time: '09:54:30', color: '#52b818' },
      { title: '成功上传数据包', time: '2019-07-30', color: '#52b818' },
      { title: '设备检修暂停访问', time: '2019-07-29', color: '#f84e44' },
      { title: '系统升级维护', time: '2019-07-28', color: '#f84e44' },
      { title: '正在更新日志', time: '2019-07-27' },
      { title: '完成阶段性目标', time: '2019-07-26' },
      { title: '正在同步数据', time: '2019-07-26' },
      { title: '成功修复系统漏洞', time: '2019-07-25', color: '#52b818' }
    ],
    // 散点图
    scatterChartData: [...Array(30).keys()].map(i => ({
      x: i * 40 + random(100, 1000),
      y: i * 40 + random(100, 1000),
      size: random(3, 20),
      category: `分类${random(1, 3)}`
    })),
    // 占比分析
    pieChartData: [
      { category: '养生保健', value: 5587 },
      { category: '服饰箱包', value: 4837 },
      { category: '美妆护肤', value: 4460 },
      { category: '母婴用品', value: 3988 },
      { category: '其它', value: 4209 }
    ],
    // 数据榜单
    topListData: ['view', 'interaction', 'click'].reduce((data, type, i) => {
      const years = ['2019年', '2018年', '2017年']
      const brands = ['Huawei', 'Samsung', 'Apple', 'OPPO', 'Xiaomi']
      const arr = []
      years.forEach(year => {
        brands.forEach((brand, j) => {
          arr.push({
            brand,
            year,
            value: random(1000, 2000) - i * 300 - j * 100
          })
        })
      })
      data[type] = arr
      return data
    }, {})
  }
}
