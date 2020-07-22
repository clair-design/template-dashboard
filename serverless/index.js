const qs = require('qs')
const mockData = require('../mock/index.js')

const mocks = Object.keys(mockData).map(item => {
  const [method, path] = item.split(/\s+/)
  return {
    method,
    path,
    res: mockData[item]
  }
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

addEventListener('fetch', e => {
  e.respondWith(handleRequest(e.request))
})

async function handleRequest(request) {
  const method = request.method.toUpperCase()
  const url = new URL(request.url)
  const matched = mocks.find(item => item.path === url.pathname)

  // CORS preflight
  if (method === 'OPTIONS') {
    return new Response('', { headers: corsHeaders })
  }

  // no matched mock data
  if (!matched) {
    return new Response(`No mock data found for ${method} ${url.pathname}`, {
      headers: corsHeaders
    })
  }

  const { res } = matched
  const headers = {
    'content-type': 'application/json',
    ...corsHeaders
  }

  // direct mock data found
  if (typeof res !== 'function') {
    return new Response(JSON.stringify(res), { headers })
  }

  // get mock data from function
  const query = qs.parse(url.query)
  return new Response(JSON.stringify(res(query, {})), { headers })
}
