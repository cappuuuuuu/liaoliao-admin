import xhr from './xhr'

export function loginAuth ({ body }) {
  return xhr({
    method: 'post',
    url: '/login',
    data: body
  })
}

export function getOperatorAccount () {
  return xhr({
    method: 'get',
    url: '/operator'
  })
}
