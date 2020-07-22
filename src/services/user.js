import axios from '@/utils/axios'

export async function getNotices() {
  const response = await axios.get('/api/notice/list')
  return response.data
}

export async function markNoticeAsRead(noticeId) {
  const response = await axios.post('/api/notice/read', { noticeId })
  return response.data
}

export async function getActivities() {
  const response = await axios.get('/api/user/activities')
  return response.data
}

export async function login({ name, password }) {
  const isValid = name === 'admin' && password === 'clair'
  const message = isValid ? null : '用户名或密码错误'
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        error: !isValid,
        message
      })
    }, 1000)
  })
}
