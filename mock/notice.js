module.exports = {
  'GET /api/notice/list': [
    {
      id: 1,
      title: '您的休假申请已经审批结束',
      avatar: 'W',
      time: '11-02 13:45'
    },
    {
      id: 2,
      title: '小明向您提交了工单',
      avatar: 'L',
      time: '11-04 09:23'
    },
    {
      id: 3,
      title: '您收到一条私信，点击查看',
      avatar: 'H',
      time: '11-05 19:18',
      read: true
    }
  ],

  'POST /api/notice/read': {
    id: 2
  }
}
