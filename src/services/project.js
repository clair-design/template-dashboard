import axios from '@/utils/axios'

export async function getPopularProjects() {
  const response = await axios.get('/api/project/popular')
  return response.data
}

export async function getProjectList(params) {
  const response = await axios.get('/api/project/list', { params })
  return response.data
}

export async function getActivities() {
  const response = await axios.get('/api/project/activity')
  return response.data
}

export async function getTasks() {
  const response = await axios.get('/api/project/task')
  return response.data
}

export async function getMembers() {
  const response = await axios.get('/api/project/members')
  return response.data
}
