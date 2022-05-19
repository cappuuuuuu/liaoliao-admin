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

export function operatorLogout ({ body }) {
  return xhr({
    method: 'post',
    url: '/logout',
    data: body
  })
}
