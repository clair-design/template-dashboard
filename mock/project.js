module.exports = {
  'GET /api/project/popular': {
    total: 1168,
    pending: 45,
    list: [
      {
        name: '360e+ Design System',
        date: '2019-08-04',
        stared: false
      },
      {
        name: '组件规范项目',
        date: '2019-08-05',
        stared: true
      },
      {
        name: '产品界面改版',
        date: '2019-08-06',
        stared: true
      },
      {
        name: '增长研究数据模型',
        date: '2019-08-07',
        stared: false
      },
      {
        name: 'IOT 销量统计',
        date: '2019-08-11',
        stared: false
      },
      {
        name: '用户人群画像',
        date: '2019-08-01',
        stared: false
      }
    ]
  },

  'GET /api/project/list': query => {
    const pn = query.pn || 1
    const { date, status } = query
    const total = 52
    const pageSize = 10
    const itemCount = parseInt(pn) < 6 ? pageSize : 2
    return {
      total,
      list: [...Array(itemCount).keys()].map(i => ({
        id: i,
        date:
          date ||
          new Intl.DateTimeFormat('zh').format(
            Date.now() - Math.random() * 1000000000 * i
          ),
        name: `项目名称 ${(pn - 1) * pageSize + i}`,
        group: ['自定义分类', '基础圈选'][Math.round(Math.random())],
        activity: Math.round(Math.random() * 1000),
        status: status === 'ALL' ? Math.round(Math.random() * 2) : status
      }))
    }
  },

  'GET /api/project/activity': [
    {
      avatar: 'H',
      title: 'Haoeryou 创建了一个新项目',
      description: '于 15 分钟前'
    },
    {
      avatar: 'L',
      title: 'Liuyuchen 发表新的评论',
      description: '于 1 小时前'
    },
    {
      avatar: 'Z',
      title: 'Zhaowenbo 创建一个新的议题',
      description: '11月12日 09:34:09'
    },
    {
      avatar: 'E',
      title: 'Eva 提交了新的代码',
      description: '11月09日 15:47:45'
    },
    {
      avatar: 'G',
      title: 'Grace 发表了新的评论',
      description: '11月01日 22:45:19'
    }
  ],
  'GET /api/project/task': [
    {
      title: '设计规范组件化周会（周五下午）',
      done: false
    },
    {
      title: '用户研究例会——A 座 13 层培训教室',
      done: false
    },
    {
      title: 'QA 部门新增设备审核',
      done: true
    },
    {
      title: '提交差旅费报销申请，待行政组审批通过',
      done: false
    },
    {
      title: '开发变更管理，申请人力资源信息系统审核',
      done: true
    },
    {
      title: 'IOT 设备申请，到 5 层 OPS 处签字',
      done: false
    }
  ],
  'GET /api/project/members': [
    {
      avatar: 'S',
      name: '沙隆巴斯',
      role: '超级管理员'
    },
    {
      avatar: 'T',
      name: 'Taocj',
      role: '管理员'
    },
    {
      avatar: 'P',
      name: '蓬蓬',
      role: '超级管理员'
    },
    {
      avatar: 'D',
      name: '丁满',
      role: '编辑者'
    },
    {
      avatar: 'L',
      name: '李献计',
      role: '查看者'
    }
  ]
}
