import axios from '@/utils/axios'

export async function getChartData() {
  const response = await axios.get('/api/chart')
  return response.data
}
